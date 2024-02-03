import { FC } from "react";
import { useTheme } from "@mui/material";
import { Typography } from "..";

interface Props {
  children: string;
}

export const Tag: FC<Props> = ({ children }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  return (
    <Typography
      variant="caption"
      bgcolor={secondary}
      color={primary}
      fontWeight={500}
      paddingY={"1px"}
      paddingX={"8px"}
      borderRadius={4}
    >
      {children}
    </Typography>
  );
};
