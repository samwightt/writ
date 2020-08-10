import type { FC } from "react";

interface CardProps {
  padding?: boolean;
  className?: string;
  shadow?: "lg" | "xl";
}

export const Card: FC<CardProps> = ({
  padding,
  children,
  className,
  shadow,
}) => {
  const hasPadding = padding === undefined ? true : false;
  const shadowSize = shadow || "lg";

  return (
    <div
      className={`rounded-lg border border-gray-200 shadow-${shadowSize} bg-white ${
        hasPadding && "py-10 px-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};
