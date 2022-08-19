import { Theme } from "@emotion/react";
import { createTheme as createMUITheme } from "@mui/material/styles";

export const defaultTheme: Theme = {
  color: {
    black: "#1f1f1f",
    white: "#ffffff",
    gray1: "#f7f7f7",
    gray2: "#818181",
    gray3: "#e8e8e8",
    blue: "#3c4fff",
  },
};

export const muiTheme = createMUITheme();
