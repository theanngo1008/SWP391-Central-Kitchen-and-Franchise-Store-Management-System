import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userApi } from "../api";

// Query keys for user-related queries
export const userKeys = {
    all: ["users"],
    lists: () => [...userKeys.all, "list"],
    list: (filters) => [...userKeys.lists(), filters],
    details: () => [...userKeys.all, "detail"],
    detail: (id) => [...userKeys.details(), id],
};

// Get all users
export function useUsers(params, options) {
    return useQuery({
        queryKey: userKeys.list(params),
        queryFn: () => userApi.getUsers(params),
        ...options,
    });
}

// Get single user
export function useUser(id, options) {
    return useQuery({
        queryKey: userKeys.detail(id),
        queryFn: () => userApi.getUser(id),
        enabled: !!id,
        ...options,
    });
}

// Create user mutation
export function useCreateUser(options) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: userApi.createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: userKeys.lists() });
        },
        ...options,
    });
}

// Update user mutation
export function useUpdateUser(options) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, ...data }) => userApi.updateUser(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: userKeys.detail(variables.id) });
            queryClient.invalidateQueries({ queryKey: userKeys.lists() });
        },
        ...options,
    });
}

// Delete user mutation
export function useDeleteUser(options) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: userApi.deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: userKeys.lists() });
        },
        ...options,
    });
}
