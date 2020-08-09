import type { FC, HTMLProps } from "react";

export const InputDescription: FC<HTMLProps<HTMLSpanElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <span className={`text-sm text-gray-600 ${className}`} {...props}>
      {children}
    </span>
  );
};
