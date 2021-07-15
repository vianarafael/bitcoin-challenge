// import { createSelector } from "reselect";

// const newsData = (state) => state.news;

// const getGraphData = (state) => state.graphData;

// export const getNews = createSelector(
//   [newsData, getGraphData],
//   (news, graphData) => news
// );

const newsSelector = (state) => state.news;

export default newsSelector;
