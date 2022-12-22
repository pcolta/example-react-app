import axios from "axios";
import User from "../types/User";
import {API_URL} from "./env";

export async function login(params: {
    email: string;
    password: string;
}): Promise<User> {
    const response = await axios.post(`${API_URL}/login`, params);
    window.localStorage.setItem("token", response.data.accessToken);

    return response.data.user;
}

export async function logout() {
    window.localStorage.removeItem("token")
}
