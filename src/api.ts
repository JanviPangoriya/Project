import axios from "axios";
const BASE_URL = "https://api-dev.domecompass.com";
export const LS_LOGIN_TOKEN = "login_token";
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  if (!token) {
    return config;
  }
  return { ...config, headers: { ...config.headers, Authorization: token } };
});

axios.interceptors.response.use(undefined, (error) => {
  if (error.response.data.code === 9101) {
    localStorage.removeItem(LS_LOGIN_TOKEN);
    window.location.href = "/login";
  }
  return Promise.reject(error);
});
interface LoginRequest {
  email: string;
  password: string;
}
interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  };
  token: string;
  user: User;
}
export interface User {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  roles: "staff" | "admin";
  profile_pic_url: string;
}
export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  console.log(data);
  return axios.post<LoginResponse>(url, data).then((response) => {
    console.log(response);
    localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
    return response.data.user;
  });
};

export const logout = () => {
  localStorage.removeItem(LS_LOGIN_TOKEN);
};
interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourites" | "archieved";
}
export interface GroupResponse {
  data: {
    name: string;
    creator: User;
    description: string;
    group_image_url: string;
    state: State;
  };
}
export interface State {
  created_at: string;
  state_code: string;
  title: string;
  updated_at: string;
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
