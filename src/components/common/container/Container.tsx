import { FC } from "react";
import { Container as ContainerMaterialUI } from "@mui/material";
type ContainerMaterialUIProps = React.ComponentProps<
  typeof ContainerMaterialUI
>;
type Props = ContainerMaterialUIProps;

export const Container: FC<Props> = ({ ...props }) => {
  return <ContainerMaterialUI {...props}>{props.children}</ContainerMaterialUI>;
};
