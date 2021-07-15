import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
import styled from "styled-components";
import axios from "axios";
import Button from "./Button";

import { useState, useEffect } from "react";

const MainGraph = styled.div``;

const Graphs = ({ data }) => {
  const [hourly, setHourly] = useState([]);

  const [graphDisplay, setGraphDisplay] = useState("month");

  useEffect(() => {
    const day = [];

    const promises = [];
    for (let i = 1; i < 24; i++) {
      if (data[0]) {
        let date = new Date(data[0][0]);
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
          day.push([item.data.lookup.time.iso, item.data.lookup.price]);
        })
      )
      .then(() => setHourly(day));
  }, []);

  //1 month
  const month = [];

  for (let i = 0; i < 30; i++) {
    month.push(data[i]);
  }

  // 7 days
  const week = [];

  for (let i = 0; i < 7; i++) {
    week.push(data[i]);
  }
  const handleDisplay = () => {
    if (graphDisplay === "month") return month;
    if (graphDisplay === "day") return hourly;
    if (graphDisplay === "week") return week;
  };

  return (
    <MainGraph>
      <LineChart width={500} height={300} data={handleDisplay()}>
        <XAxis dataKey="0" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="1" stroke="#8884d8" />
        {/* <Line type="monotone" dataKey="pv" stroke="#82ca9d" /> */}
      </LineChart>
      <Button onClick={() => setGraphDisplay("day")}>24 hours</Button>
      <Button onClick={() => setGraphDisplay("week")}>7 days</Button>
      <Button onClick={() => setGraphDisplay("month")}>1 month</Button>
    </MainGraph>
  );
};

export default Graphs;
