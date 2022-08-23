import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";
import Script from "next/script";
import { Global, ThemeProvider } from "@emotion/react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

import { globalStyle } from "common/styles/Global";
import { defaultTheme, muiTheme } from "common/styles/Theme";

const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <GoogleAnalytics />
    <MUIThemeProvider theme={muiTheme}>
      <ThemeProvider theme={defaultTheme}>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </MUIThemeProvider>
  </RecoilRoot>
);

const GoogleAnalytics = () => (
  <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-174139466-1" />
    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-174139466-1');
        `,
      }}
    />
  </>
);

export default App;
