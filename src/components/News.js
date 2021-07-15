import { connect } from "react-redux";
import newsSelector from "../redux/news/news.selector";
// import { createStructuredSelector } from "reselect";

const News = ({ news }) => {
  return (
    <aside>
      {news
        ? news.map((item) => (
            <article key={item.id}>
              <a href={item.link}>
                <img src={item.image} alt="" /> <h2>{item.title}</h2>
              </a>
            </article>
          ))
        : ""}
    </aside>
  );
};

const mapStateToProps = (state) => {
  const { news } = state;
  return news;
};

export default connect(mapStateToProps)(News);
