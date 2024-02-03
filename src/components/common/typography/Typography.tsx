import { Typography as TypographyMaterialUI } from "@mui/material";
import { FC } from "react";

type TypographyMaterialUIProps = React.ComponentProps<
  typeof TypographyMaterialUI
>;

export const Typography: FC<TypographyMaterialUIProps> = ({ ...props }) => {
  return (
    <TypographyMaterialUI {...props}>{props.children}</TypographyMaterialUI>
  );
};
