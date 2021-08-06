import { AppState } from "../store";

export const groupQuerySelector = (state: AppState) => state.groups.query

export const groupQueryCompletedSelector = (state : AppState) => {
  const groupIds = state.groups.queryMap[state.groups.query] || [];
  const group = groupIds.map((id) => state.groups.byId[id]);
  return group;
};