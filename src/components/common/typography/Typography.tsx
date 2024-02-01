import { Typography as TypographyMaterialUI } from "@mui/material";
import { FC } from "react";

type TypographyMaterialUIProps = React.ComponentProps<
  typeof TypographyMaterialUI
>;
type Props = TypographyMaterialUIProps;

export const Typography: FC<Props> = ({ ...props }) => {
  return <Typography {...props}>{props.children}</Typography>;
};
