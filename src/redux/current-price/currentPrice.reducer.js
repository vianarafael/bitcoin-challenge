import { CurrentPriceTypes } from "./currentPrice.types";

const INITIAL_STATE = {
  news: null,
};

const currentPriceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrentPriceTypes.SET_CURRENT_PRICE:
      return {
        ...state,
        currentPrice: action.payload,
      };
    default:
      return state;
  }
};

export default currentPriceReducer;
