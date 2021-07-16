import { combineReducers } from "redux";

import newsReducer from "./news/news.reducer";
import currentPriceReducer from "./current-price/currentPrice.reducer";
import historyReducer from "./history/history.reducer";

const rootReducer = combineReducers({
  news: newsReducer,
  currentPrice: currentPriceReducer,
  history: historyReducer,
});

export default rootReducer;
