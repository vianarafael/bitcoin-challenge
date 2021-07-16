import { NewsTypes } from "./news.types";

export const setNews = (news) => ({
  type: NewsTypes.SET_NEWS,
  payload: news,
});
