import { API } from "../../../config/axios";

type UserType = {
  userName: string,
    password: string,
};

export const getLogin = async (user: UserType) => {
  return await API.post(`authentication/login`, user);
};

export const getLogout = async()=>{
return await API.post("authentication/logout")
}