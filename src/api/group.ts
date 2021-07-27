import axios from "axios";
import { State } from "../model/State";
import { User } from "../model/User";
import { BASE_URL } from "./base";

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourites" | "archieved";
}
interface GroupResponse {
  data: {
    name: string;
    creator: User;
    description: string;
    group_image_url: string;
    state: State;
  };
}

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";

  return axios
    .get<GroupResponse>(url, { params: data })
    .then((response) => {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
