import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    // Primaryカラーを設定
    primary: {
      main: "#344955", //button color
    },
    // Secondaryカラーを設定
    secondary: {
      main: "#D68600", //button color
    },
    background: {
      default: "#333",
    },
    text: {
      primary: "#fff"
    }
  },
});
