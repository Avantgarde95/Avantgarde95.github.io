import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { ThemeProvider as MUIThemeProvider, createTheme as createMUITheme } from "@mui/material/styles";

import { globalStyle } from "styles/Global";
import { defaultTheme } from "styles/Theme";

const muiTheme = createMUITheme();

const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <MUIThemeProvider theme={muiTheme}>
      <ThemeProvider theme={defaultTheme}>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </MUIThemeProvider>
  </RecoilRoot>
);

export default App;
