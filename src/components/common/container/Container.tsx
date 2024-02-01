import { FC } from "react";
import { Container as ContainerMaterialUI } from "@mui/material";
type ContainerMaterialUIProps = React.ComponentProps<
  typeof ContainerMaterialUI
>;

export const Container: FC<ContainerMaterialUIProps> = ({ ...props }) => {
  return <ContainerMaterialUI {...props}>{props.children}</ContainerMaterialUI>;
};
