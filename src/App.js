import { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";

import Graphs from "./components/Graphs";
import News from "./components/News";

import { setNews } from "./redux/news/news.action";

const Container = styled.main`
  display: flex;
  align-content: space-around;
`;

const App = ({ setNews }) => {
  const [data, setData] = useState([]);
  const [cur, setCur] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const rawNews = await axios.get("https://news.bitcoin.com/feed/");
      const data = new window.DOMParser().parseFromString(
        rawNews.data,
        "text/xml"
      );
      const items = data.querySelectorAll("item");
      const news = [];
      for (let i = 0; i < 4; i++) {
        const id = i;
        const title = items[i].querySelector("title").innerHTML;
        const link = items[i].querySelector("link").innerHTML;
        const description = items[i].querySelector("description").innerHTML;
        const image = getImage(description);
        const date = items[i].querySelector("pubDate").innerHTML;
        news.push({ id, title, link, image, date });
      }

      setNews(news);
    };

    const getPriceData = async () => {
      let graph = await axios.get(
        "https://index-api.bitcoin.com/api/v0/cash/history"
      );
      graph = graph.data.map((item) => {
        let date = new Date(item[0]);
        date = date.getMonth() + 1 + "/" + date.getDate();
        let price = item[1];

        return { date, price, iso: item[0] };
      });
      setData(graph);

      const priceData = await axios.get(
        "https://index-api.bitcoin.com/api/v0/cash/price/usd"
      );

      setCur(priceData.data.price);
    };

    // make this update without the need for a refresh
    getPriceData();
    getNews();
  }, [setNews]);
  return (
    <main>
      <h2>Current Price: ${cur}</h2>
      <Container>
        <Graphs data={data} />
        <News />
      </Container>
    </main>
  );
};

const getImage = (str) => {
  const index = str.indexOf(`src="`);
  // + 4
  const strArr = str.split("");
  const startLink = strArr.splice(index + 5);
  let image = "";
  for (let i = 0; startLink[i] !== `"`; i++) {
    image += startLink[i];
  }

  return image;
};

const mapDispatchToProps = (dispatch) => ({
  setNews: (news) => dispatch(setNews(news)),
});

export default connect(null, mapDispatchToProps)(App);
