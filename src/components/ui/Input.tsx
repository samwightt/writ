import type { FC, HTMLProps } from "react";

export const Input: FC<HTMLProps<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      className={`mt-2 mb-1 px-4 py-2 border border-gray-400 rounded-md w-full hover:border-gray-600 focus:border-gray-800 transition-all duration-200 outline-none focus:shadow
  ${className}`}
      {...props}
    />
  );
};
