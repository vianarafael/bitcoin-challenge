import { connect } from "react-redux";
import styled from "styled-components";

const NewsContainer = styled.aside`
  h2 {
    font-size: 1rem;
    width: 60%;
  }

  img {
    width: 60%;
    height: 8rem;
  }
`;

const News = ({ news }) => {
  return (
    <NewsContainer>
      {news
        ? news.map((item) => (
            <article key={item.id}>
              <a href={item.link}>
                <img src={item.image} alt="" /> <h2>{item.title}</h2>
              </a>
            </article>
          ))
        : ""}
    </NewsContainer>
  );
};

const mapStateToProps = (state) => {
  const { news } = state;
  return news;
};

export default connect(mapStateToProps)(News);
