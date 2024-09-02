import axios from "axios";

export function apiPost(route = "", body = {}) {
    return axios.post("https://www.webies-media.com/" + route, body, { withCredentials: true })
}

export function apiFetch(route = "") {
    return axios.get("https://www.webies-media.com/" + route, { withCredentials: true })
}

export async function isLoggedIn() {
    const response = await apiFetch("auth/is-logged-in")
    const loggedIn = response.data
    return loggedIn
}