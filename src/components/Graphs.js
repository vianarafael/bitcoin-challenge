import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
import styled from "styled-components";
import axios from "axios";
import Button from "./Button";

import { useState, useEffect } from "react";

const MainGraph = styled.div`
  width: 100%;
`;

const Graphs = ({ data }) => {
  const [hourly, setHourly] = useState([]);
  const [graphDisplay, setGraphDisplay] = useState("month");

  useEffect(() => {
    const day = [];
    const promises = [];
    for (let i = 1; i < 24; i++) {
      if (data[0]) {
        let date = new Date(data[0].iso);
        date = date.setHours(date.getHours() - i);
        date = new Date(date);
        promises.push(
          axios.get(
            `https://index-api.bitcoin.com/api/v0/cash/lookup?time=${date.toISOString()}`
          )
        );
      }
    }
    Promise.all(promises)
      .then((raw) =>
        raw.forEach((item) => {
          const date = new Date(item.data.lookup.time.iso);
          day.push({
            date: date.getHours(),
            price: item.data.lookup.price,
          });
        })
      )
      .then(() => setHourly(day));
  }, [data]);

  let month = [];

  for (let i = 0; i < 30; i++) {
    month.push(data[i]);
  }

  let week = [];

  for (let i = 0; i < 7; i++) {
    week.push(data[i]);
  }

  const handleDisplay = () => {
    if (graphDisplay === "month") return month;
    if (graphDisplay === "day") return hourly;
    if (graphDisplay === "week") return week;
  };

  const handleRange = () => {
    // not the best solution - just trying to make the graph more interesting
    if (graphDisplay === "month") return [40000, 70000];
    if (graphDisplay === "day") return [46300, 47000];
    if (graphDisplay === "week") return [45000, 55000];
  };

  return (
    <MainGraph aspect={3}>
      <LineChart width={800} height={600} data={handleDisplay()}>
        <XAxis dataKey="date" />
        <YAxis type="number" domain={handleRange()} />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
      <Button onClick={() => setGraphDisplay("day")}>24 hours</Button>
      <Button onClick={() => setGraphDisplay("week")}>7 days</Button>
      <Button onClick={() => setGraphDisplay("month")}>1 month</Button>
    </MainGraph>
  );
};

export default Graphs;
