import { bindActionCreators } from "redux";
import { store } from "..";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from "../../constant";
import { Group } from "../../model/Group";

const groupsQueryAction = (query:string) => ({ type: GROUP_QUERY, payload: query });
const groupsQueryCompletedAction = (query: string, groups: Group[]) => ({ type: GROUP_QUERY_COMPLETED, payload: { query, groups } });


export const groupAction = bindActionCreators(
  {
    query: groupsQueryAction,
    querCompleted: groupsQueryCompletedAction,
  },
  store.dispatch
);

