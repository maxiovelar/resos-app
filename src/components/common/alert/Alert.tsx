import { Alert as AlertMaterialUI } from "@mui/material";
import { FC } from "react";
import style from "./Alert.module.css";

type AlertMaterialUIProps = React.ComponentProps<typeof AlertMaterialUI>;

export const Alert: FC<AlertMaterialUIProps> = ({ ...props }) => {
  return (
    <AlertMaterialUI {...props} className={`${style.alert} ${props.className}`}>
      {props.children}
    </AlertMaterialUI>
  );
};
