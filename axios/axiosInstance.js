import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://medxcure-server-hj2p.vercel.app/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;