import { Alert as AlertMaterialUI } from "@mui/material";
import { FC } from "react";

type AlertMaterialUIProps = React.ComponentProps<typeof AlertMaterialUI>;
type Props = AlertMaterialUIProps;

export const Alert: FC<Props> = ({ ...props }) => {
  return <Alert {...props}>{props.children}</Alert>;
};
