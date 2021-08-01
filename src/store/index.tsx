import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "../model/Group";
import { User } from "../model/User";

export interface AppState {
  me?: User;
  groups: Group[];
}

const initailState: AppState = {
  me: undefined,
  groups: [],
};

const reducer: Reducer<AppState, AnyAction> = (
  currentState = initailState,
  dispatchedAction: AnyAction
) => {
  switch (dispatchedAction.type) {
    case "me/fetch":
      return { ...currentState, me: dispatchedAction.payload };

    case "me/login":
      return { ...currentState, me: dispatchedAction.payload };

    case "groups/fetch":
          return { ...currentState, groups: dispatchedAction.payload };
      

    default:
      return currentState;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
