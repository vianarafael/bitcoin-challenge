import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
import styled from "styled-components";
import axios from "axios";
import Button from "./Button";
import { connect } from "react-redux";

import { useState, useEffect } from "react";
const Buttons = styled.div`
  @media (min-width: 860px) {
    display: flex;
    justify-content: space-around;
    margin-right: 5rem;
    margin-top: 2rem;
  }
`;
const MainGraph = styled.div`
  width: 100%;
`;

const Graphs = ({ history }) => {
  console.log(window.screen.width);
  const [hourly, setHourly] = useState([]);
  const [graphDisplay, setGraphDisplay] = useState("month");
  useEffect(() => {
    const day = [];
    const promises = [];
    if (history) {
      for (let i = 1; i < 24; i++) {
        let date = new Date(history[0].iso);
        date = date.setHours(date.getHours() - i);
        date = new Date(date);
        promises.push(
          axios.get(
            `https://index-api.bitcoin.com/api/v0/cash/lookup?time=${date.toISOString()}`
          )
        );
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
    }
  }, [history]);

  let month = [];
  let week = [];
  if (history) {
    for (let i = 0; i < 30; i++) {
      month.push(history[i]);
    }

    for (let i = 0; i < 7; i++) {
      week.push(history[i]);
    }
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
      <LineChart
        width={window.screen.width >= 860 ? 800 : 350}
        height={window.screen.width >= 860 ? 500 : 200}
        data={handleDisplay()}
      >
        <XAxis dataKey="date" />
        <YAxis type="number" domain={handleRange()} />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
      <Buttons>
        <Button day onClick={() => setGraphDisplay("day")}>
          24 hours
        </Button>
        <Button week onClick={() => setGraphDisplay("week")}>
          7 days
        </Button>
        <Button month onClick={() => setGraphDisplay("month")}>
          1 month
        </Button>
      </Buttons>
    </MainGraph>
  );
};

const mapStateToProps = (state) => {
  const { history } = state;
  return history;
};

export default connect(mapStateToProps)(Graphs);
