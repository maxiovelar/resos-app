import { FC } from "react";
import style from "./Tag.module.css";

interface Props {
  children: string;
}

export const Tag: FC<Props> = ({ children }) => {
  return <span className={style.tag}>{children}</span>;
};
