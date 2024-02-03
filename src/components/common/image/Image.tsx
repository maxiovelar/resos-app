import { FC } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  loading?: "lazy" | "eager";
}

export const Image: FC<Props> = ({ alt, ...props }) => {
  return <img alt={alt} {...props} />;
};
