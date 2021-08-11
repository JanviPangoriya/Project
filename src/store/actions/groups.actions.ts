import {
  GROUP_QUERY,
  GROUP_QUERY_COMPLETED,
  GROUP_SELECT,
  GROUP_SELECT_INDEX,
} from "../../constant";
import { Group } from "../../model/Group";

export const queryAction = (query: string) => ({ type: GROUP_QUERY, payload: query });

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
