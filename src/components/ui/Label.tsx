import type { FC, HTMLProps } from "react";

export const Label: FC<HTMLProps<HTMLLabelElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <label className={`text-gray-900 ${className}`} {...props}>
      {children}
    </label>
  );
};
