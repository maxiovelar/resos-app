import { useTheme } from "@mui/material";
import { ResOsIcon } from "../../icons/ResOsIcon";
import { useScrollPosition } from "../../../hooks";
import { Box, Container } from "../../common";
import style from "./Navbar.module.css";

export const Navbar = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primaryDarker = "rgba(44, 35, 59, 0.85)";
  const scrollPosition = useScrollPosition();
  const scrollDown = scrollPosition > 10;
  const customColor = scrollDown ? primaryDarker : primary;

  return (
    <Box
      bgcolor={customColor}
      position={"sticky"}
      top={0}
      left={0}
      display={"flex"}
      alignItems={"center"}
      zIndex={100}
      className={style.navbar}
    >
      <Container>
        <ResOsIcon />
      </Container>
    </Box>
  );
};
