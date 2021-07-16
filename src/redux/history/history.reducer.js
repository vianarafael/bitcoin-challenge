import { HistoryTypes } from "./history.types";

const INITIAL_STATE = {
  news: null,
};

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HistoryTypes.SET_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
    default:
      return state;
  }
};

export default historyReducer;
