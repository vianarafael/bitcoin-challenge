import { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Graphs from "./components/Graphs";
import News from "./components/News";

import { setNews } from "./redux/news/news.action";

const App = ({ setNews }) => {
  const [feed, setFeed] = useState([]);
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
      // setFeed(news);
      setNews(news);
    };

    getNews();
  }, []);
  return (
    <main>
      <h1>BCH</h1>
      <Graphs />
      <News />
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
