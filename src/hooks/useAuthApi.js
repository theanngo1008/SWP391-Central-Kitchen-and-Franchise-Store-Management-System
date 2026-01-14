import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi } from "../api";

// Query keys for auth
export const authKeys = {
    profile: ["auth", "profile"],
};

// Login mutation
export function useLogin(options) {
    return useMutation({
        mutationFn: authApi.login,
        onSuccess: (data) => {
            if (data.token) {
                localStorage.setItem("token", data.token);
            }
        },
        ...options,
    });
}

// Register mutation
export function useRegister(options) {
    return useMutation({
        mutationFn: authApi.register,
        ...options,
    });
}

// Logout mutation
export function useLogout(options) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authApi.logout,
        onSuccess: () => {
            localStorage.removeItem("token");
            queryClient.clear();
        },
        ...options,
    });
}

// Get current user profile
export function useProfile(options) {
    return useQuery({
        queryKey: authKeys.profile,
        queryFn: authApi.getProfile,
        retry: false,
        ...options,
    });
}

// Forgot password mutation
export function useForgotPassword(options) {
    return useMutation({
        mutationFn: authApi.forgotPassword,
        ...options,
    });
}

// Reset password mutation
export function useResetPassword(options) {
    return useMutation({
        mutationFn: ({ token, password }) => authApi.resetPassword(token, password),
        ...options,
    });
}
