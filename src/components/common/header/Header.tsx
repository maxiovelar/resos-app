import { FC } from "react";
import style from "./Header.module.css";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const Header: FC<Props> = ({ children, className }) => {
  return <header className={`${style.skewed} ${className}`}>{children}</header>;
};
