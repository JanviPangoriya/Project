import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "../model/Group";
import { User } from "../model/User";

export interface AppState {
  me?: User;
  groupQuery: string;
  groupQueryMap: { [keyword: string]: number[] };

  groups: { [id: number]: Group };
}

const initailState: AppState = {
  me: undefined,

  groupQuery: "",
  groupQueryMap: {},
  groups: {},
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

    case "groups/query":
      return { ...currentState, groupQuery: dispatchedAction.payload };
    case "groups/fetch":
      const groups = dispatchedAction.payload.groups as Group[];
      const groupIds = groups.map((g) => g.id);

      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});

      return {
        ...currentState,
        groupQueryMap: {
          ...currentState.groupQueryMap,
          [dispatchedAction.payload.query]: groupIds,
        },
        groups: { ...currentState.groups, ...groupMap },
      };

    default:
      return currentState;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const meFetchAction = (u: User) => ({ type: "me/fetch", payload: u });

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
