import { createSelector } from "reselect";
import { uiStateSelector } from "./app.selectors";

export const uiSideBarSelector = createSelector(
  [uiStateSelector],
  (uiState) => {
    return uiState.isSideBarOpen;
  }
);
