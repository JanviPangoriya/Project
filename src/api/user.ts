import axios from "axios";
import { User } from "../model/User";
import { BASE_URL } from "./base";

interface MeData {
  data: User;
}

export const updateMe = (data: User) => {
    const url = BASE_URL + "/me";
    
  return axios.put<MeData>(url, data).then((response) => response.data.data);
};
