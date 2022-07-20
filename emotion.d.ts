import "@emotion/react";

declare module "@emotion/react" {
  interface Theme {
    color: {
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
    };
  }
}
