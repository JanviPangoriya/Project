import { GroupRequest } from "../api/group";
import { fetchGroups as fetchGroupsApi } from "../api/group";
import { groupLoadingQuerySelector } from "../selectors/groups.selectors";
import { store } from "../store";
import { groupAction } from "../store/actions/groups.actions";

export const fetchGroups = (request: GroupRequest) => {
  const query = request.query;

  const queryLoading = groupLoadingQuerySelector(store.getState());
  const loading = queryLoading[query];
  groupAction.query(query);
  if (loading) {
    return;
  }
  fetchGroupsApi(request).then((groups) => {
    groupAction.querCompleted(groups, query);
  });
};
