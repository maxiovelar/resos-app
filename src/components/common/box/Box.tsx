import { FC } from "react";
import { Box as BoxMaterialUI } from "@mui/material";

type BoxMaterialUIProps = React.ComponentProps<typeof BoxMaterialUI>;
type Props = BoxMaterialUIProps;

export const Box: FC<Props> = ({ ...props }) => {
  return <BoxMaterialUI {...props}>{props.children}</BoxMaterialUI>;
};
