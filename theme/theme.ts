import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Helvetica, Arial",
  },
  palette: {
    primary: {
      main: "#adcbbe",
    },
    secondary: {
      main: "#d3a69a",
    },
    common: {
      white: "#f6f6f6",
      black: "#162533",
    },
    grey: {
      100: "#efefe3",
      300: "#ded6cb",
      600: "#6a6f6d",
      800: "#333a3d",
    },
    background: {
      default: "#efefe3",
    },
    text: {
      primary: "#333a3d",
    },
  },
});

export default theme;
