import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({});

const DefaultUIProvider = (props: React.PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
};

export default DefaultUIProvider;
