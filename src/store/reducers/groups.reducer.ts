import { Reducer } from "redux";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from "../../constant";
import { Group } from "../../model/Group";
import { addMany, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
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
      const groupIds = getIds(groups);
      const newState = addMany<GroupState>(state, groups);

      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
      };
    default:
      return state;
  }
};
