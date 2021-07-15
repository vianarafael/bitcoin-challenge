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

  return (
    <MainGraph aspect={3}>
      <LineChart width={600} height={400} data={handleDisplay()}>
        <XAxis dataKey="date" />
        <YAxis />
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
