import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    // Primaryカラーを設定
    primary: {
      main: "#121212", //button color
    },
    // Secondaryカラーを設定
    secondary: {
      main: "#EF810F", //button color
    },
    background: {
      default: "#121212",
    },
    text: {
      primary: "#fff"
    }
  },
});

