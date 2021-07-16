import { HistoryTypes } from "./history.types";

export const setHistory = (history) => ({
  type: HistoryTypes.SET_HISTORY,
  payload: history,
});
