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
  // adding super small (ss) custom breakpoints
  breakpoints: {
    keys: ["ss", "xs", "sm", "md", "lg", "xl"],
    values: {
      ss: 0,
      xs: 320,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
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
      // color: offWhite,

      fontSize: "1.11rem",
    },
    h3: {
      color: green,
      [breakpoints.down("md")]: {
        fontSize: "2.1rem",
      },
      [breakpoints.down("xs")]: {
        fontSize: "1.8rem",
      },
    },
    h4: {
      color: green,
      [breakpoints.down("xs")]: {
        fontSize: "1.8rem",
      },
    },
    h6: {
      color: offWhite,
      [breakpoints.down("sm")]: {
        fontSize: "1.1rem",
      },
    },
    subtitle1: {
      color: offWhite,
      fontSize: "1rem",
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
