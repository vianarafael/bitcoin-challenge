import { useState, useEffect } from "react";
import axios from "axios";

import Graphs from "./components/Graphs";
import News from "./components/News";

const App = () => {
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
        const title = items[i].querySelector("title").innerHTML;
        const link = items[i].querySelector("link").innerHTML;
        const description = items[i].querySelector("description").innerHTML;
        const image = getImage(description);
        const date = items[i].querySelector("pubDate").innerHTML;
        news.push({ title, link, image, date });
      }
      setFeed(news);
    };

    getNews();
  }, []);
  return (
    <main>
      <h1>BCH</h1>
      <Graphs />
      <News feed={feed} />
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

export default App;
