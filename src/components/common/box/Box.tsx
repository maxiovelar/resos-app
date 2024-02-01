import { FC } from "react";
import { Box as BoxMaterialUI } from "@mui/material";

type BoxMaterialUIProps = React.ComponentProps<typeof BoxMaterialUI>;

export const Box: FC<BoxMaterialUIProps> = ({ ...props }) => {
  return <BoxMaterialUI {...props}>{props.children}</BoxMaterialUI>;
};
