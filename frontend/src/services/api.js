import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//============== Auth API ===================
export const registerUser = async (data)=>{
    return api.post("/auth/signup",data);
}

export const loginUser = async (data)=>{
    return api.post("/auth/login",data);
}


// ---------- TASK APIS ----------
export const getTasks = async () => {
  return api.get("/tasks");
};

export const createTask = async (data) => {
  return api.post("/tasks", data);
};

export const updateTask = async (taskId, data) => {
  return api.put(`/tasks/${taskId}`, data);
};

export const deleteTask = async (taskId) => {
  return api.delete(`/tasks/${taskId}`);
};

export default api;