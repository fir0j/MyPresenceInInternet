import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({}); // in order to be able to use breakpoint in this file

// card incomplete data
// add missed mui pallate
// animations and also wrt. scroll position
// linear-gradient(87deg, #fb6340 0, #fbb140 100%)
//     transform: skewY(-8deg);
//   transform-origin: 0;
// background:#fff and color: rgb(82, 95, 127)

const greenCyanGradient =
  "linear-gradient(135deg, rgba(90,206,97,1) 0%, rgba(74,228,184,1) 100%)";
const greenGoldGradient =
  "linear-gradient(135deg, rgba(170,184,110,1) 0%, rgba(180,137,49,1) 100%)";

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

  palette: {
    // it affects other colors
    type: "dark",

    primary: {
      main: "rgb(30, 30, 30)",
      contrastText: "#fff",
    },

    secondary: {
      // main: "rgba(74,228,184,0.85)",
      main: "rgba(52,211,164,1)",
      contrastText: "#000",
    },

    text: {
      primary: "rgba(52,211,164,1)",
      secondary: "rgba(255, 255, 255, 0.7)",
      tertiary: "rgba(255, 255, 255, 0.5)",

      disabled: "rgba(255, 255, 255, 0.5)",
      // hint: "rgba(255, 255, 255, 0.5)",
      // icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255,0,0,1)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      // default: grey[50],
      paper: "rgb(30, 30, 30)",
      floor: "#2C2C2C",
      microPaper: "rgba(38,38,38,1)",
      gradient: greenCyanGradient,
      card: "rgba(30,30,30,0.1)",
      messageBox: "rgba(38,38,38,1)",
      coreWeb: "rgba(74,228,184,0.85)",
      library: "rgba(74,228,184,0.7)",
      runtime: "rgba(74,228,184,0.5)",
      database: "rgba(74,228,184,0.3)",
      filterButtons: "#000",
    },

    // Defining my palette for action. This is not overiding. for overriding you need to use overrides prop of the palette.
    // action: {
    //   disabled: "rgba(74,228,184,0.3)",
    //   disabledBackground: "rgba(0, 0, 0, 0.12)",
    //   active: "rgba(0, 0, 0, 0.54)",
    //   hover: "rgba(0, 0, 0, 0.04)",
    //   hoverOpacity: 0.04,
    //   selected: "rgba(0, 0, 0, 0.08)",
    //   selectedOpacity: 0.08,
    //   disabledOpacity: 0.38,
    //   focus: "rgba(0, 0, 0, 0.12)",
    //   focusOpacity: 0.12,
    //   activatedOpacity: 0.12,
    // },

    // FOR THESE SITUATIONS, MUI DEFAULTS WORK GREAT FOR MOST APPLICATION
    // success: {main:""},
    // error: {main:""},
    // warning:{main:""}
    // info:{main:""}
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

  palette: {
    // it affects other colors
    type: "dark",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "rgba(165,121,46,1)",
    },
    text: {
      primary: "rgba(165,121,46,1)",
      secondary: "rgba(255, 255, 255, 0.7)",
      tertiary: "rgba(255, 255, 255, 0.47)",

      disabled: "rgba(255, 255, 255, 0.5)",
      // hint: "rgba(255, 255, 255, 0.5)",
      // icon: "rgba(255, 255, 255, 0.5)",
    },
    // divider: "rgba(255,0,0,1)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      // default: grey[50],
      paper: "#000",
      floor: "#2C2C2C",
      microPaper: "rgba(20,20,20,1)",
      gradient: greenGoldGradient,
      card: "rgba(255,255,255,0.1)",
      messageBox: "rgba(18,18,18,1)",
      coreWeb: "rgba(125, 98, 36, 0.95)",
      library: "rgba(125, 98, 36, 0.7)",
      runtime: "rgba(178,145,85,0.6)",
      database: "rgba(178,145,85,0.45)",
      filterButtons: "#1A1A1A",
    },

    action: {
      // active: "rgba(0, 0, 0, 0.54)",
      // hover: "rgba(0, 0, 0, 0.04)",
      // hoverOpacity: 0.04,
      // selected: "rgba(0, 0, 0, 0.08)",
      // selectedOpacity: 0.08,
      // disabled: "rgba(0, 0, 0, 0.26)",
      // disabledBackground: "rgba(0, 0, 0, 0.12)",
      // disabledOpacity: 0.38,
      // focus: "rgba(0, 0, 0, 0.12)",
      // focusOpacity: 0.12,
      // activatedOpacity: 0.12,
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

  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
};

// const goldTheme = createMuiTheme(goldPallete);
// const cyanTheme = createMuiTheme(cyanPallete);

export { cyanTheme, goldTheme };

// ADVANCE GRADIENT generating TECHNIQUE
// background:
//   "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
// backgroundBlendMode: "multiply",
