import type { FC, HTMLProps } from "react";

export const Hero: FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center py-32 rounded-md border-gray-200 shadow-lg bg-white">
      {children}
    </div>
  );
};

export const HeroTitle: FC<HTMLProps<HTMLHeadingElement>> = ({
  children,
  ...props
}) => {
  return (
    <h1 {...props} className="text-xl font-semibold">
      {children}
    </h1>
  );
};

export const HeroDescription: FC<HTMLProps<HTMLParagraphElement>> = ({
  children,
  ...props
}) => {
  return (
    <p {...props} className={"max-w-lg text-sm text-center mt-1 text-gray-500"}>
      {children}
    </p>
  );
};
