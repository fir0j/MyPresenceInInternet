import { lightBlue } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const misteriousgreen = "#69F0AE";
const dark = "#2C2C2C";
const oceanblue = "#07C3E2";
const pureblack = "black";

// It is the global theme(Style) which can be accessed all over the application.
// It is also the place to visit if MU-Default-Theme-Style needs to be overwritten/modified with our custom variant.
const customTheme = createMuiTheme({
  // Palette provides  color system
  // Typograpy provides text presentation system like <p>, h1...h6 and so on
  palette: {
    common: {
      misteriousgreen: misteriousgreen,
      oceanblue: oceanblue,
      pureblack: pureblack,
    },
    primary: {
      main: misteriousgreen,
    },
    secondary: {
      main: dark,
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

  overrides: {
    // Style sheet name ⚛️
    MuiTab: {
      root: {
        "&$disabled": {
          backgroundColor: "blue",
        },
      },
    },
  },
});

export default customTheme;
