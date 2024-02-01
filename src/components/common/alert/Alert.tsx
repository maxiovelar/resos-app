import { Alert as AlertMaterialUI } from "@mui/material";
import { FC } from "react";

type AlertMaterialUIProps = React.ComponentProps<typeof AlertMaterialUI>;

export const Alert: FC<AlertMaterialUIProps> = ({ ...props }) => {
  return <Alert {...props}>{props.children}</Alert>;
};
