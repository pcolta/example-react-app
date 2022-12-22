import axios from "axios";
import User from "../types/User";
import { API_URL } from "./env";

const headers = {
    'Content-Type': 'application/json'
}

export async function getCurrentUser(): Promise<User> {
    const response = await axios.get(`${API_URL}/current_user`,
        { headers: {
            'x-access-token': window.localStorage.getItem("token")
            }
        });

    return response.data;
}

export async function signUp(params: {
    userName: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string
}): Promise<User> {
    const response = await axios.post(`${API_URL}/signup`, params, {headers: headers});

    window.localStorage.setItem("token", response.data.accessToken);
    return response.data.user;
}
