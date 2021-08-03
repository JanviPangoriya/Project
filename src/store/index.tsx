import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { GROUP_FETCH, GROUP_QUERY, ME_FETCH, ME_LOGIN, UI_SIDEBAR } from "../constant";
import { Group } from "../model/Group";
import { User } from "../model/User";

export interface AppState {
  me?: User;
  isSideBarOpen: boolean;
  groupQuery: string;
  groupQueryMap: { [keyword: string]: number[] };

  groups: { [id: number]: Group };
}

const initailState: AppState = {
  me: undefined,
  isSideBarOpen: true,
  groupQuery: "",
  groupQueryMap: {},
  groups: {},
};

const reducer: Reducer<AppState, AnyAction> = (
  currentState = initailState,
  dispatchedAction: AnyAction
) => {
  switch (dispatchedAction.type) {
    case ME_FETCH:
      return { ...currentState, me: dispatchedAction.payload };

    case ME_LOGIN:
      return { ...currentState, me: dispatchedAction.payload };

    case GROUP_QUERY:
      return { ...currentState, groupQuery: dispatchedAction.payload };
    case GROUP_FETCH:
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
    case UI_SIDEBAR:
      console.log(dispatchedAction.payload);
      return { ...currentState ,isSideBarOpen:dispatchedAction.payload};
    default:
      return currentState;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
