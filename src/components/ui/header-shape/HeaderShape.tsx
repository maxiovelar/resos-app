import { FC } from "react";
import style from "./HeaderShape.module.css";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const HeaderShape: FC<Props> = ({ children, className }) => {
  return <div className={`${style.skewed} ${className}`}>{children}</div>;
};
