import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

// Create axios instance with default config
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

// Request interceptor - add auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor - handle errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

// Helper methods
export const apiClient = {
    get: (url, config) => api.get(url, config).then((res) => res.data),
    post: (url, data, config) => api.post(url, data, config).then((res) => res.data),
    put: (url, data, config) => api.put(url, data, config).then((res) => res.data),
    patch: (url, data, config) => api.patch(url, data, config).then((res) => res.data),
    delete: (url, config) => api.delete(url, config).then((res) => res.data),
};

export default api;
