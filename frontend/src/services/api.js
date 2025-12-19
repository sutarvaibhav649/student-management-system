import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

//============== Auth API ===================
export const registerUser = async (data)=>{
    return api.post("/auth/signup",data);
}

export const loginUser = async (data)=>{
    return api.post("/auth/login",data);
}

export default api;