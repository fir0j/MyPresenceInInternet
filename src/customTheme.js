import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});
const black = "#000";
const white = "#FFF";
const dark = "#2C2C2C";
const offWhite = grey[400];
const portfolioGrey = "#8b8b8b";
const green = "#4ae4b8";
const gold = "#B29155";

// It is EXACTLY the place to visit if MUI-DEFAUL-THEME needs to be CUSTOMIZED/OVERWRITTEN with our custom variant GLOBALLY.
// It is the global theme(Style) which can be accessed all over the application.

const lightPallete = {
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
    type: "light",
    common: {
      black: black,
      offWhite: offWhite,
      grey: portfolioGrey,
      white: white,
      panelColor: black,

      // contrastText: "",
    },
    primary: {
      // light: dark,
      main: black,
      // dark: dark,
      contrastText: "black",
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
      color: portfolioGrey,
      fontSize: "1.11rem",
    },
    h3: {
      color: gold,
      [breakpoints.down("md")]: {
        fontSize: "2.1rem",
      },
      [breakpoints.down("xs")]: {
        fontSize: "1.8rem",
      },
    },
    h4: {
      color: gold,
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

  // cutomize the default value(s) of a component's props
  props: {
    // Name of the component
    MuiButtonBase: {
      // Name of the prop
      disableRipple: true,
    },
  },

  // customize the appearance of all instances of a component type by modifying global class names provided in the API section
  overrides: {
    // Name of the global class of the component
    MuiCircularProgress: {
      // Name of  global child class of the same component
      circleDeterminate: {
        stroke: gold,
      },
    },

    // Name of the global class of the component
    // MuiTab: {
    // Name of  global child class of the same component
    //   root: {
    // Name of the psudeo class of the child component
    //     "&$disabled": {
    //       backgroundColor: "blue",
    //     },
    //   },
    // },
  },
};

const darkPallete = {
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
    type: "dark",
    common: {
      black: black,
      offWhite: offWhite,
      grey: portfolioGrey,
      white: white,
      panelColor: black,

      // contrastText: "",
    },
    primary: {
      // light: dark,
      main: dark,
      // dark: dark,
      contrastText: "black",
    },
    secondary: {
      main: portfolioGrey,
    },
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
      color: offWhite,
      fontSize: "1rem",
      [breakpoints.down("md")]: {
        fontSize: "0.8rem",
      },
    },
  },

  // cutomize the default value(s) of a component's props
  props: {
    // Name of the component
    MuiButtonBase: {
      // Name of the prop
      disableRipple: true,
    },
  },

  // customize the appearance of all instances of a component type by modifying global class names provided in the API section
  overrides: {
    // Name of the global class of the component
    MuiCircularProgress: {
      // Name of  global child class of the same component
      circleDeterminate: {
        stroke: green,
      },
    },

    // Name of the global class of the component
    // MuiTab: {
    // Name of  global child class of the same component
    //   root: {
    // Name of the psudeo class of the child component
    //     "&$disabled": {
    //       backgroundColor: "blue",
    //     },
    //   },
    // },
  },
};
const darkTheme = createMuiTheme(darkPallete);
const lightTheme = createMuiTheme(lightPallete);

export { lightTheme, darkTheme };
