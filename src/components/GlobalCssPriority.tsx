import { FC, type ReactNode } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#492A5B",
    },
    secondary: {
      main: "#FEC720",
    },
  },
});

interface Props {
  children: ReactNode;
}
export const GlobalCssPriority: FC<Props> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};
