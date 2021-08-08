import axios from "axios";
import { Group } from "../model/Group";
import { BASE_URL } from "./base";

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourites" | "archieved";
}
interface GroupResponse {
  data: Group[];
}
interface GroupResponseSpecific {
  data: Group;
}
export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";

  return axios
    .get<GroupResponse>(url, { params: data })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return error;
    });
};
export const fetchSpecificGroup = (id: number) => {
  const url = BASE_URL + "/groups/" + id;
  return axios.get<GroupResponseSpecific>(url).then((response) => {
    return response.data.data;
  });
};
