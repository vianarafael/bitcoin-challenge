import { CurrentPriceTypes } from "./currentPrice.types";

export const setCurrentPrice = (currentPrice) => ({
  type: CurrentPriceTypes.SET_CURRENT_PRICE,
  payload: currentPrice,
});
