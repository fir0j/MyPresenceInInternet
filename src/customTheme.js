import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import grey from "@material-ui/core/colors/grey";
const breakpoints = createBreakpoints({}); // in order to be able to use breakpoint in this file

// react router refresh error
// card incomplete data
// add missed mui pallate
// animations and also wrt. scroll position

const offWhite = grey[400];
const black = "#000";
const white = "#FFF";
const dark = "#2C2C2C";
const portfolioGrey = "#8b8b8b";
const green = "#4ae4b8";
const gold = "#B29155";
const bgGreenish = "rgb(76 84 82)";

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
      backgroundColor: dark,
      filterGrey: "rgb(30, 30, 30)",
      buttonGroupBG: black,
      buttonGroupBGHover: "rgba(74,228,184,0.9)",
      paperLayer: "rgba(38,38,38,1)",
      coreWeb: "rgba(74,228,184,0.85)",
      library: "rgba(74,228,184,0.7)",
      runtime: "rgba(74,228,184,0.5)",
      database: "rgba(74,228,184,0.3)",
      messageBox: "rgba(38,38,38,1)",
      myGradient:
        "linear-gradient(135deg, rgba(90,206,97,1) 0%, rgba(74,228,184,1) 100%)",

      cardBG: "rgba(30,30,30,0.1)",
      // contrastText: "",
    },
    primary: {
      // main: dark,
      main: "rgb(30, 30, 30)",
      // contrastText: "black",
    },
    secondary: {
      main: portfolioGrey,
      // main: white,
    },
    // text:{
    //   primary:{},
    //   secondary:{},
    //   disabled:{},
    //   hint:{}
    // },
    // divider:{},
    accent: {
      main: green,
      // main: white,
    },
    // error: {},
    // success: {},
    // action: {
    //   active: "rgba(0, 0, 0, 0.54)",
    //   hover: "rgba(0, 0, 0, 0.04)",
    //   hoverOpacity: 0.04,
    //   selected: "rgba(0, 0, 0, 0.08)",
    //   selectedOpacity: 0.08,
    //   disabled: "rgba(0, 0, 0, 0.26)",
    //   disabledBackground: "rgba(0, 0, 0, 0.12)",
    //   disabledOpacity: 0.38,
    //   focus: "rgba(0, 0, 0, 0.12)",
    //   focusOpacity: 0.12,
    //   activatedOpacity: 0.12,
    // },
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

  props: {
    MuiTab: {
      disableRipple: true,
    },
  },

  // overrides: {
  //   MuiInput: {
  //     root: {
  //       color: green,
  //       fontWeight: 300,
  //     },
  //     underline: {
  //       "&:before": {
  //         borderBottom: `2px solid ${portfolioGrey}`,
  //       },
  //       "&:hover:not($disabled):not($focused):not($error):before": {
  //         borderBottom: `2px solid ${portfolioGrey}`,
  //       },
  //       "&:after": {
  //         borderBottom: `2px solid rgba(74,228,184,0.8)`,
  //       },
  //     },
  //   },

  //   MuiInputLabel: {
  //     root: {
  //       color: portfolioGrey,
  //       fontSize: "1.1rem",
  //     },
  //   },
  // },
};

// ADVANCE GRADIENT generating TECHNIQUE
// background:
//   "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
// backgroundBlendMode: "multiply",

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
      backgroundColor: "#212121",
      bg: grey[900],
      paperLayer: "rgba(20,20,20,1)",
      filterGrey: "rgb(30, 30, 30)",
      buttonGroupBG: "rgb(30, 30, 30)",
      buttonGroupBGHover: "rgba(178, 145, 85, 0.9)",
      coreWeb: "rgba(125, 98, 36, 0.95)",
      library: "rgba(125, 98, 36, 0.7)",
      runtime: "rgba(178,145,85,0.6)",
      database: "rgba(178,145,85,0.45)",
      messageBox: "rgba(18,18,18,1)",
      myGradient:
        "linear-gradient(135deg, rgba(170,184,110,1) 0%, rgba(180,137,49,1) 100%)",
      cardBG: "rgba(255,255,255,0.1)",

      // contrastText: "",
    },

    primary: {
      main: black,
      // contrastText: "black",
    },
    secondary: {
      main: portfolioGrey,
    },
    // text:{
    //   primary:{},
    //   secondary:{},
    //   disabled:{},
    //   hint:{}
    // },
    // divider:{},
    accent: {
      main: gold,
    },
    // error: {},
    // success: {},
    // action: {
    //   active: "rgba(0, 0, 0, 0.54)",
    //   hover: "rgba(0, 0, 0, 0.04)",
    //   hoverOpacity: 0.04,
    //   selected: "rgba(0, 0, 0, 0.08)",
    //   selectedOpacity: 0.08,
    //   disabled: "rgba(0, 0, 0, 0.26)",
    //   disabledBackground: "rgba(0, 0, 0, 0.12)",
    //   disabledOpacity: 0.38,
    //   focus: "rgba(0, 0, 0, 0.12)",
    //   focusOpacity: 0.12,
    //   activatedOpacity: 0.12,
    // },
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

  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
};

// const goldTheme = createMuiTheme(goldPallete);
// const cyanTheme = createMuiTheme(cyanPallete);

export { cyanTheme, goldTheme };
