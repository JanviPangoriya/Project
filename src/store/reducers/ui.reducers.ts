import { Reducer } from "redux";
import { UI_SIDEBAR } from "../../constant";

export interface uiState {
  isSideBarOpen: boolean;
}
const initialState = {
  isSideBarOpen: false,
};
export const uiReducer: Reducer<uiState> = (state = initialState, action) => {
  switch (action.type) {
    case UI_SIDEBAR:
      return { ...state, isSideBarOpen: action.payload };
    default:
      return state;
  }
};
