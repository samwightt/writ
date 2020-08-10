import type { ComponentType, FC, HTMLProps } from "react";

interface CommonButtonProps {
  icon?: ComponentType<{ size?: number | string; className?: string }>;
  className?: string;
}

interface LinkProps extends HTMLProps<HTMLAnchorElement>, CommonButtonProps {
  as?: "a";
}

interface ButtonProps extends HTMLProps<HTMLButtonElement>, CommonButtonProps {
  as?: "button";
}

export const Button: FC<LinkProps | ButtonProps> = ({
  icon: Icon,
  href,
  className: inputClassName,
  ...props
}) => {
  const className = `group bg-gray-200 font-semibold border shadow border-gray-700 px-6 py-3 rounded-lg hover:bg-black hover:shadow-md focus:bg-black focus-shadow-md transition-all duration-200 flex flex-row items-center space-x-2 cursor-pointer focus:outline-none ${inputClassName}`;

  const buttonChildren = (
    <>
      {Icon && (
        <Icon className="text-gray-700 group-hover:text-white group-focus:text-white" />
      )}{" "}
      <span className="text-gray-700 group-hover:text-white group-focus:text-white">
        {props.children}
      </span>
    </>
  );

  switch (props.as) {
    case "a":
      return (
        <a className={className} {...props}>
          {buttonChildren}
        </a>
      );
    case "button":
    default:
      return <button className={className}>{buttonChildren}</button>;
  }
};
