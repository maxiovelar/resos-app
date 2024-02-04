import { FC } from "react";
import { Box, Container } from "../../common";
import { Navbar } from "..";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Box
      width={"100vw"}
      display={"flex"}
      flexDirection={"column"}
      data-testid="layout"
    >
      <Navbar />
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};
