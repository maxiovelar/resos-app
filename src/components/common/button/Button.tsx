import { FC } from "react";
import { Button as ButtonMaterialUI } from "@mui/material";

type ButtonMaterialUIProps = React.ComponentProps<typeof ButtonMaterialUI>;
type Props = ButtonMaterialUIProps;

export const Button: FC<Props> = ({ ...props }) => {
  return <ButtonMaterialUI {...props}>{props.children}</ButtonMaterialUI>;
};
