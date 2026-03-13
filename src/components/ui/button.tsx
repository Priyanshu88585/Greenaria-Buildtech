// src/components/ui/button.tsx

"use client";

import React from "react";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      primary: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500",

      secondary: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-700",

      outline:
        "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",

      ghost: "text-gray-700 hover:bg-gray-100",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",

      md: "px-4 py-2 text-sm",

      lg: "px-6 py-3 text-base",
    };

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled || loading}
        className={clsx(
          baseStyles,
          variants[variant],
          sizes[size],

          fullWidth && "w-full",

          (disabled || loading) && "opacity-60 cursor-not-allowed",

          className,
        )}
        {...props}
      >
        {loading && <Loader2 size={16} className="animate-spin" />}

        {!loading && leftIcon}

        {children}

        {!loading && rightIcon}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
