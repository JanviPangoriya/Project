import { GroupRequest } from "../api/group";
import { fetchGroups as fetchGroupsApi } from "../api/group";
import { groupMapQuerySelector } from "../selectors/groups.selectors";
import { store } from "../store";
import { groupAction } from "../store/actions/groups.actions";
export const fetchGroups = (request: GroupRequest) => {
  const query = request.query;

  const groupsMap = groupMapQuerySelector(store.getState());
  const groupId = groupsMap[query];
  groupAction.query(query, !groupId);
  if (groupId) {
    return;
  }
  fetchGroupsApi(request).then((groups) => {
    groupAction.querCompleted(groups, query);
  });
};
 