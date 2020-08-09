import type { FC } from "react";

import Styles from "./OffsetBackground.module.css";

export const OffsetBackground: FC = ({ children }) => {
  return (
    <div>
      <div className="absolute right-0 left-0 h-84 bg-white" />
      <div className="relative pt-10">{children}</div>
    </div>
  );
};
