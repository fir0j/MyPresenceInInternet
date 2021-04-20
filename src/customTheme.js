import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";
import teal from "@material-ui/core/colors/teal";
import cyan from "@material-ui/core/colors/cyan";

const dark = "#2C2C2C";
const black = "#000";
const white = "#FFF";
const breakpoints = createBreakpoints({});

// It is the global theme(Style) which can be accessed all over the application.
// It is also the place to visit if MU-Default-Theme-Style needs to be overwritten/modified with our custom variant.
const darkTheme = createMuiTheme({
  // Palette provides  color system
  // Typograpy provides text presentation system like <p>, h1...h6 and so on
  palette: {
    type: "dark",
    common: {
      black: black,
      white: white,

      // contrastText: "",
    },
    primary: {
      // light: dark,
      main: dark,
      // dark: dark,
      contrastText: "black",
    },
    secondary: {
      // light: green,
      main: teal["A200"],
      // dark: green,
      // contrastText: "white",
    },
    tabColor: black,
    accent: {
      main: teal["A200"],
    },
  },
  typography: {},
  iconDimension: {
    width: "96px",
    height: "96px",
    [breakpoints.down("lg")]: {
      width: "64px",
      height: "64px",
    },
    [breakpoints.down("md")]: {
      width: "48px",
      height: "48px",
    },
  },

  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },

  // overrides: {
  //   // Style sheet name ⚛️
  //   MuiTab: {
  //     root: {
  //       "&$disabled": {
  //         backgroundColor: "blue",
  //       },
  //     },
  //   },
  // },
});

const lightTheme = createMuiTheme({
  // Palette provides  color system
  // Typograpy provides text presentation system like <p>, h1...h6 and so on
  palette: {
    type: "light",
    common: {
      black: black,
      white: white,
      dark: dark,

      // contrastText: "",
    },
    primary: {
      // light: dark,
      main: teal[700],
      // dark: dark,
      contrastText: "black",
    },
    accent: {
      main: grey[300],
    },
    tabColor: teal[900],
    secondary: {
      // light: green,
      main: black,
      // dark: green,
      // contrastText: white[500],
    },
  },
  iconDimension: {
    width: "96px",
    height: "96px",
    [breakpoints.down("lg")]: {
      width: "64px",
      height: "64px",
    },
    [breakpoints.down("md")]: {
      width: "48px",
      height: "48px",
    },
  },
  typography: {},

  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },

  // overrides: {
  //   // Style sheet name ⚛️
  //   MuiTab: {
  //     root: {
  //       "&$disabled": {
  //         backgroundColor: "blue",
  //       },
  //     },
  //   },
  // },
});

export { lightTheme, darkTheme };
