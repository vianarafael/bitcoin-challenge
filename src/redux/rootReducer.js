import { combineReducers } from "redux";

import newsReducer from "./news/news.reducer";
import currentPriceReducer from "./current-price/currentPrice.reducer";

const rootReducer = combineReducers({
  news: newsReducer,
  currentPrice: currentPriceReducer,
});

export default rootReducer;
