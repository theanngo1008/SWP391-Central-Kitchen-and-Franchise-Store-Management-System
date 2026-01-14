import { apiClient } from "./api";

// Auth API endpoints
export const authApi = {
    // Login
    login: (credentials) => apiClient.post("/auth/login", credentials),

    // Register
    register: (data) => apiClient.post("/auth/register", data),

    // Logout
    logout: () => apiClient.post("/auth/logout"),

    // Refresh token
    refreshToken: () => apiClient.post("/auth/refresh"),

    // Get current user profile
    getProfile: () => apiClient.get("/auth/me"),

    // Forgot password
    forgotPassword: (email) => apiClient.post("/auth/forgot-password", { email }),

    // Reset password
    resetPassword: (token, password) =>
        apiClient.post("/auth/reset-password", { token, password }),
};

export default authApi;
