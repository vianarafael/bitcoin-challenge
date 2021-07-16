import { CurrentPriceTypes } from "./currentPrice.types";

export const setCurrentPrice = (currentPrice) => ({
  type: "SET_CURRENT_PRICE",
  payload: currentPrice,
});
