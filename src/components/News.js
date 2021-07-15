const News = ({ feed }) => {
  return (
    <aside>
      {feed.map((item) => (
        <article key={item.id}>
          <a href={item.link} target="_blank" rel="noopener">
            <img src={item.image} /> <h2>{item.title}</h2>
          </a>
        </article>
      ))}
    </aside>
  );
};

export default News;
