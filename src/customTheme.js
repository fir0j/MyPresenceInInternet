import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
// const arcGrey = "#868686";

// It is the global theme(Style) which can be accessed all over the application.
// It is also the place to visit if MU-Default-Theme-Style needs to be overwritten/modified with our custom variant.
const customTheme = createMuiTheme({
  // Palette provides  color system
  // Typograpy provides text presentation system like <p>, h1...h6 and so on
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

export default customTheme;
