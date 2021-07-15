import { NewsTypes } from "./news.types";

export const setNews = (news) => ({
  type: "SET_NEWS",
  payload: news,
});
