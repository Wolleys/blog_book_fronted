import axios from "axios";

export const BASE_URL = "http://localhost:3300/api/v1";

const api = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

export default api;
