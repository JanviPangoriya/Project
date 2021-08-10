import axios, { Canceler } from "axios";
import { GroupRequest } from "../api/group";
import { fetchGroups as fetchGroupsApi } from "../api/group";
import { groupAction } from "../store/actions/groups.actions";
let canceler: Canceler | undefined;
export const fetchGroups = (request: GroupRequest) => {
  const query = request.query;
  groupAction.query(query);

  canceler && canceler();
  const { cancel, token } = axios.CancelToken.source();
  canceler = cancel;

  fetchGroupsApi(request, token)
    .then((groups) => {
      groupAction.querCompleted(groups, query);
      canceler = undefined;
    })
    .catch((error) => {
      console.log(error);
    });
};
