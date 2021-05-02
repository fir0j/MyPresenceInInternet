import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});
const black = "#000";
const white = "#FFF";
const dark = "#2C2C2C";
const offWhite = grey[400];
const portfolioGrey = "#8b8b8b";
const green = "#4ae4b8";

// It is EXACTLY the place to visit if MUI-DEFAUL-THEME needs to be CUSTOMIZED/OVERWRITTEN with our custom variant GLOBALLY.
// It is the global theme(Style) which can be accessed all over the application.
const darkTheme = createMuiTheme({
  // Palette provides  color system
  // Typograpy provides text presentation system like <p>, h1...h6 and so on
  // Primary 60%
  // Secondary 30%
  // Accent 10%
  palette: {
    type: "dark",
    common: {
      black: black,
      dark: dark,
      offWhite: offWhite,
      white: white,

      // contrastText: "",
    },
    primary: {
      // light: dark,
      main: portfolioGrey,
      // dark: dark,
      contrastText: "black",
    },
    secondary: {
      // light: green,
      main: green,
      // dark: green,
      // contrastText: "white",
    },
    tabColor: black,
    accent: {
      main: green,
    },
  },
  typography: {
    fontFamily: "Lora",
    body1: {
      color: portfolioGrey,
      fontSize: "1.11rem",
    },
    h3: {
      // fontFamily: "Lora",
      color: green,
      [breakpoints.down("md")]: {
        fontSize: "2.1rem",
      },
    },
    h4: {
      color: green,
      // fontFamily: "Lora",
    },
    h6: {
      // fontFamily: "Lora",
      color: offWhite,
      [breakpoints.down("sm")]: {
        fontSize: "1.1rem",
      },
    },
    caption: {
      fontSize: "1rem",
      [breakpoints.down("md")]: {
        fontSize: "0.8rem",
      },
    },
  },

  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },

  overrides: {
    // Style sheet name ⚛️
    // MuiTab: {
    //   root: {
    //     "&$disabled": {
    //       backgroundColor: "blue",
    //     },
    //   },
    // },
  },
});

const lightTheme = createMuiTheme({
  // Palette provides  color system
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
      // main: grey[300],
    },
    tabColor: teal[900],
    secondary: {
      // light: green,
      main: black,
      // dark: green,
      // contrastText: white[500],
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
