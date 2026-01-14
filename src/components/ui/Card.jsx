const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

export function Card({ children, className = "", padding = "md" }) {
    return (
        <div
            className={`
        rounded-xl border border-gray-200
        bg-white shadow-sm
        transition-shadow duration-200
        hover:shadow-md
        dark:border-gray-700 dark:bg-gray-800
        ${paddingClasses[padding]}
        ${className}
      `}
        >
            {children}
        </div>
    );
}

export function CardHeader({ title, subtitle, action }) {
    return (
        <div className="mb-4 flex items-start justify-between">
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                </h3>
                {subtitle && (
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {subtitle}
                    </p>
                )}
            </div>
            {action && <div>{action}</div>}
        </div>
    );
}
