import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      primary: "#1f1916", // Set your desired background color here
      secondary: "#1a1512", // Set your desired background color here
    },

    primary: {
      main: "#382d27",
      darker: "#1c1613",
    },
    secondary: {
      main: "#332318",
    },

    bright: {
      main: "#deb887",
    },

    error: {
      main: red.A400,
    },
    footer: {
      main: "#382d27",
    },

    text: {
      primary: "#fff2de",
      secondary: "#ffeac9",
      disabled: "#000000", // Custom text.secondary color (red in this case)
      dark: "#a1988a", // Custom text.secondary color (red in this case)
    },

    brightText: {
      primary: "#fff2de", // Custom text.secondary color (red in this case)
      secondary: "#ccb083", // Custom text.secondary color (red in this case)
      disabled: "#ffffff", // Custom text.secondary color (red in this case)
    },

    components: {
      Link: {
        styleOverrides: {
          root: {
            color: "white",
            "&:hover": {
              color: "orange",
            },
            "&:active": {
              color: "gray",
            },
          },
        },
      },
    },
  },
});

export default theme;
