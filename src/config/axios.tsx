import axios, {AxiosInstance} from "axios";
import Cookies from "js-cookie";

export const API: AxiosInstance = axios.create({
    baseURL: "https://api.itsmf.az/api/",
    // baseURL: "https://localhost:7261/api/",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
    },
});