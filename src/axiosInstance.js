import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("adminToken")) {
        req.headers.Authorization = `Bearer ${JSON.parse(
            localStorage.getItem("adminToken")
        )}`;
    }
    return req;
});

export default API;