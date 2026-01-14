import { apiClient } from "./api";

// User API endpoints
export const userApi = {
    // Get all users
    getUsers: (params) => apiClient.get("/users", { params }),

    // Get single user by ID
    getUser: (id) => apiClient.get(`/users/${id}`),

    // Create new user
    createUser: (data) => apiClient.post("/users", data),

    // Update user
    updateUser: (id, data) => apiClient.put(`/users/${id}`, data),

    // Partial update user
    patchUser: (id, data) => apiClient.patch(`/users/${id}`, data),

    // Delete user
    deleteUser: (id) => apiClient.delete(`/users/${id}`),
};

export default userApi;
