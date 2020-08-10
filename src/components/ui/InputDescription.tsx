import type { FC, HTMLProps } from "react";

export const InputDescription: FC<HTMLProps<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p className={`text-sm text-gray-600 leading-snug ${className}`} {...props}>
      {children}
    </p>
  );
};
