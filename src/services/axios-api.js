import axios from "axios";
let token;

export function apiPost(route = "", body = {}) {
    token = localStorage.getItem("token")
    const headers = {}

    if (token) {
        headers.authorization = "Bearer " + token
    }

    return axios.post("https://www.webies-media.com/" + route, body, { headers })
}

export function apiFetch(route = "") {
    token = localStorage.getItem("token")
    const headers = {}

    if (token) {
        headers.authorization = "Bearer " + token
    }

    return axios.get("https://www.webies-media.com/" + route, { headers: { Authorization: "Bearer " + token } })
}

export async function isLoggedIn() {
    const response = await apiFetch("auth/is-logged-in")
    if (!response) return false
    const loggedIn = response.data
    return loggedIn
}