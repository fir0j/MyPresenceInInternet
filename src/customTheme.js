import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import grey from "@material-ui/core/colors/grey";
const breakpoints = createBreakpoints({}); // in order to be able to use breakpoint in this file

const offWhite = grey[400];
const black = "#000";
const white = "#FFF";
const dark = "#2C2C2C";
const portfolioGrey = "#8b8b8b";
const green = "#4ae4b8";
const gold = "#B29155";

// It is EXACTLY the place to visit if MUI-DEFAUL-THEME needs to be CUSTOMIZED/OVERWRITTEN with our custom variant GLOBALLY.
// It is the global theme(Style) which can be accessed all over the application.

const cyanTheme = {
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
  // Primary 60%
  // Secondary 30%
  // Accent 10%
  palette: {
    // type: "cyan",
    common: {
      offWhite: offWhite,
      panelColor: black,
      tab: black,
      bg: black,
      color2: green,
      color1: gold,
      filterGrey: "rgb(30, 30, 30)",
      // contrastText: "",
    },
    primary: {
      main: dark,
      // contrastText: "black",
    },
    secondary: {
      main: portfolioGrey,
      // main: white,
    },
    accent: {
      main: green,
      // main: white,
    },
  },

  typography: {
    fontFamily: "Lora",
    body1: {
      fontSize: "1.11rem",
    },
    h3: {
      [breakpoints.down("md")]: {
        fontSize: "2.1rem",
      },
      [breakpoints.down("xs")]: {
        fontSize: "1.8rem",
      },
    },
    h4: {
      [breakpoints.down("xs")]: {
        fontSize: "1.8rem",
      },
    },

    h6: {
      [breakpoints.down("sm")]: {
        fontSize: "1.1rem",
      },
    },
    subtitle1: {
      fontSize: "1rem",
    },

    caption: {
      fontSize: "1rem",
      [breakpoints.down("md")]: {
        fontSize: "0.8rem",
      },
    },
  },
};

const goldTheme = {
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
  // Primary 60%
  // Secondary 30%
  // Accent 10%
  palette: {
    common: {
      black: black,
      white: white,
      offWhite: offWhite,
      panelColor: black,
      tab: black,
      bg: grey[900],
      filterGrey: "rgb(30, 30, 30)",
      color1: gold,
      color2: green,

      // contrastText: "",
    },
    primary: {
      main: black,
      // contrastText: "black",
    },
    secondary: {
      main: portfolioGrey,
    },
    accent: {
      main: gold,
    },
  },
  typography: {
    fontFamily: "Lora",
    body1: {
      fontSize: "1.11rem",
    },
    h3: {
      [breakpoints.down("md")]: {
        fontSize: "2.1rem",
      },
      [breakpoints.down("xs")]: {
        fontSize: "1.8rem",
      },
    },
    h4: {
      [breakpoints.down("xs")]: {
        fontSize: "1.8rem",
      },
    },
    h6: {
      [breakpoints.down("sm")]: {
        fontSize: "1.1rem",
      },
    },
    subtitle1: {
      fontSize: "1rem",
    },

    caption: {
      fontSize: "1rem",
      [breakpoints.down("md")]: {
        fontSize: "0.8rem",
      },
    },
  },
};

// const goldTheme = createMuiTheme(goldPallete);
// const cyanTheme = createMuiTheme(cyanPallete);

export { cyanTheme, goldTheme };
