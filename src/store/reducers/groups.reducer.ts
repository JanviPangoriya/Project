import { Reducer } from "redux";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from "../../constant";
import { Group } from "../../model/Group";

export interface GroupState {
  byId: {
    [id: number]: Group;
  };
  query: string;
  queryMap: { [query: string]: number[] };
}
const initialState = {
  byId: {},
  query: "",
  queryMap: {},
};
export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_QUERY:
      return { ...state, query: action.payload };
    case GROUP_QUERY_COMPLETED:
      const groups = action.payload.groups as Group[];
      const groupIds = groups.map((g) => g.id);

      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});

      return {
        ...state,
        queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupIds,
        },
        byId: { ...state.byId, ...groupMap },
      };
      default:
          return state;
  }
};
