import axios from "axios";

export const BASE_URL = "http://localhost:3300/api/v1";
export const IMAGE_URL = "http://localhost:3300/uploads/";

const api = axios.create({
    baseURL: BASE_URL,
    // headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

export default api;
