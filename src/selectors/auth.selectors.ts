import { createSelector } from "reselect";
import { authStateSelector, userStateSelector } from "./app.selectors";

// export const meSelector = (state: AppState) =>
//   (state.auth.id !== undefined) ? state.users.byId[state.auth.id] : undefined;

export const authByIdSelector = createSelector(
  [authStateSelector],
  (authState) => {
    return authState.id;
  }
);
export const userByIdSelector = createSelector(
  [userStateSelector],
  (userState) => {
    return userState.byId;
  }
);

export const meSelector = createSelector(
  [userByIdSelector, authByIdSelector],
  (userId, authid) => {
    return authid !== undefined ? userId[authid] : undefined;
  }
);
