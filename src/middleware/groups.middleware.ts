import { GroupRequest } from "../api/group";
import { fetchGroups as fetchGroupsApi } from "../api/group";
import { groupAction } from "../store/actions/groups.actions";
export const fetchGroups = (request: GroupRequest) => {
  const query = request.query;
  groupAction.query(query);
  fetchGroupsApi(request).then((groups) => {
    groupAction.querCompleted(groups, query);
  });
};
