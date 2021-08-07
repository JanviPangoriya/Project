import { bindActionCreators } from "redux";
import { store } from "..";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED, GROUP_SELECT } from "../../constant";
import { Group } from "../../model/Group";

const queryAction = (query: string) => ({ type: GROUP_QUERY, payload: query });

const queryCompletedAction = (query: string, groups: Group[]) => ({
  type: GROUP_QUERY_COMPLETED,
  payload: { query, groups },
});


export const selectGroup = (id: number) => ({
  type: GROUP_SELECT,
  payload: id,
});

export const groupAction = bindActionCreators(
  {
    query: queryAction,
    querCompleted: queryCompletedAction,
  },
  store.dispatch
);
