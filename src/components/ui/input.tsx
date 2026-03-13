// src/components/ui/input.tsx

"use client";

import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Input({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* LABEL */}

      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      {/* INPUT WRAPPER */}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}

        <input
          disabled={disabled}
          className={clsx(
            "w-full border rounded-lg bg-white text-sm transition",

            "px-3 py-2",

            leftIcon && "pl-10",
            rightIcon && "pr-10",

            "border-gray-300",

            "focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent",

            disabled && "bg-gray-100 cursor-not-allowed",

            error && "border-red-500 focus:ring-red-500",

            className,
          )}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>

      {/* ERROR MESSAGE */}

      {error && <p className="text-xs text-red-500">{error}</p>}

      {/* HELPER TEXT */}

      {!error && helperText && (
        <p className="text-xs text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
