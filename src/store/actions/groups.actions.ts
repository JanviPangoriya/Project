import { bindActionCreators } from "redux";
import { store } from "..";
import {
  GROUP_QUERY,
  GROUP_QUERY_COMPLETED,
  GROUP_SELECT,
  GROUP_SELECT_INDEX,
} from "../../constant";
import { Group } from "../../model/Group";

const queryAction = (query: string, loading: boolean) => ({
  type: GROUP_QUERY,
  payload: { query, loading },
});

export const queryCompletedAction = (groups: Group[], query: string) => ({
  type: GROUP_QUERY_COMPLETED,
  payload: { groups, query },
});

export const selectGroupAction = (group: Group) => ({
  type: GROUP_SELECT,
  payload: group,
});
export const selectGroupIdAction = (id: number) => ({
  type: GROUP_SELECT_INDEX,
  payload: id,
});
export const groupAction = bindActionCreators(
  {
    query: queryAction,
    querCompleted: queryCompletedAction,
    selectGroup: selectGroupAction,
    selectGroupId: selectGroupIdAction,
  },
  store.dispatch
);
