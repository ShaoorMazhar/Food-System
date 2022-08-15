import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1b4d89 ", //blue
      light: "#fafafa" //white
    },
    secondary: {
      main: "#c8d8e4", //light blue
      light: "#6db784" //green
    }
  },
  typography: {
    h3: {
      fontWeight: 600,
      fontSize: "4rem",
      fontFamily: "Brush Script MT"
    },
    h4: {
      fontWeight: 600,
      lineHeight: "1.4",
      marginBottom: "0.35em",
      fontFamily: "sans-serif"
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.6rem"
    },
    h6: {
      fontSize: "2rem",
      fontWeight: 600,
      marginLeft: "10px",
      color: "primary.main"
    },
    subtitle1: {
      fontWeight: 200,
      fontSize: "1.2rem",
      paddingTop: "10px",
      textAlign: "center"
    }
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "white",
          border: "1px solid black",
          color: "black"
        }
      }
    }
  }
});

export default theme;
