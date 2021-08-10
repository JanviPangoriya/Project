import { Reducer } from "redux";
import {
  GROUP_QUERY,
  GROUP_QUERY_COMPLETED,
  GROUP_SELECT,
  GROUP_SELECT_INDEX,
} from "../../constant";
import { Group } from "../../model/Group";
import { addMany, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  selectedGroup?: Group;
  selectedGroupId?: number;
  loading:boolean;
}
const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  loading:false,
};
export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_QUERY:
     const query=action.payload;
            return {
              ...state,
              query: query,
              loading: true,
            };
    case GROUP_SELECT:
      return { ...state, selectedGroup: action.payload };
    case GROUP_SELECT_INDEX:
      return { ...state, selectedGroupId: action.payload };
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
        loading: false,
      };
    default:
      return state;
  }
};
