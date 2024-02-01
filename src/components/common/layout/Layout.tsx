import { FC } from "react";
import { Box, Container, Navbar } from "..";
import style from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Box className={style.layout}>
      <Navbar />
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};
