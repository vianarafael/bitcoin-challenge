import { connect } from "react-redux";
import styled from "styled-components";

const NewsContainer = styled.aside`
  @media (max-device-width: 480px) {
    article {
      margin: 1rem 0.5rem;
    }
    a {
      display: flex;
      flex-direction: row-reverse;
    }

    img {
      width: 35%;
      border-radius: 3px;
    }

    h2 {
      font-size: 1rem;
      width: 60%;
    }

    a {
      text-decoration: none;
      color: rgb(91, 102, 124);
    }
  }

  @media (min-width: 860px) {
    article {
      text-align: center;
    }

    h2 {
      font-size: 1rem;
      width: 60%;
      margin: 8px auto;
    }

    img {
      width: 45%;
      height: 5.5rem;
      border-radius: 3px;
    }

    a {
      text-decoration: none;
      color: rgb(91, 102, 124);
    }
  }
`;

const News = ({ news }) => {
  return (
    <NewsContainer>
      {news
        ? news.map((item) => (
            <article key={item.id}>
              <a href={item.link}>
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
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
