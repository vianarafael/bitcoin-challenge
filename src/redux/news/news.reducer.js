import { NewsTypes } from "./news.types";

const INITIAL_STATE = {
  news: null,
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsTypes.SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
