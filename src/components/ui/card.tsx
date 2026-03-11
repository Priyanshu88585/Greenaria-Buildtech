// src/components/ui/card.tsx

import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardSectionProps) {
  return (
    <div
      className={clsx("px-6 pt-6 pb-2 font-semibold text-gray-900", className)}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }: CardSectionProps) {
  return (
    <div className={clsx("px-6 py-4 text-sm text-gray-600", className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: CardSectionProps) {
  return (
    <div
      className={clsx(
        "px-6 pb-6 pt-2 flex items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
