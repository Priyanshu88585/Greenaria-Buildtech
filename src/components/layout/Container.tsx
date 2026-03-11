// src/components/layout/Container.tsx

import React from "react";
import clsx from "clsx";

type ContainerProps<T extends React.ElementType = "div"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export default function Container<T extends React.ElementType = "div">({
  as,
  children,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={clsx(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
