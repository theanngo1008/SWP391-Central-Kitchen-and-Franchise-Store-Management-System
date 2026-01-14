// Utility functions
export const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
