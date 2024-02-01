import { FC } from "react";
import { Button as ButtonMaterialUI } from "@mui/material";

type ButtonMaterialUIProps = React.ComponentProps<typeof ButtonMaterialUI>;

export const Button: FC<ButtonMaterialUIProps> = ({ ...props }) => {
  return <ButtonMaterialUI {...props}>{props.children}</ButtonMaterialUI>;
};
