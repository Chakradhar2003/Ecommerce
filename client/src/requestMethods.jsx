import axios from "axios"
const BASE_URL = "https://atlas-one-alpha.vercel.app/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTJhYzdhZTBhMGFhZGE2ZWM3MmNlMyIsImlzQWRtaW4";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});
