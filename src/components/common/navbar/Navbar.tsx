import { useTheme } from "@mui/material";
import { ResOsLogo } from "../../icons/ResOsLogo";
import { useScrollPosition } from "../../../hooks/useScrollPosition";
import { Box, Container } from "..";
import style from "./Navbar.module.css";

export const Navbar = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primaryDarker = "rgba(44, 35, 59, 0.85)";
  const scrollPosition = useScrollPosition();
  const scrollDown = scrollPosition > 10;
  const customColor = scrollDown ? primaryDarker : primary;

  return (
    <Box bgcolor={customColor} className={style.navbar}>
      <Container className={style.container}>
        <ResOsLogo />
      </Container>
    </Box>
  );
};
