import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { useTheme, makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter, Switch } from "react-router-dom";
import { lightTheme, darkTheme } from "./customTheme";

import Navigation from "./components/Navigation.component";
import Home from "./components/Home.component";
import SettingPanel from "./components/SettingPanel.component";
import MobileNav from "./components/MobileNav.component";
import Hidden from "@material-ui/core/Hidden";

function App() {
  const [myTheme, setMyTheme] = useState(darkTheme);
  const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    "@global": {
      // You should target [class*="MuiButton-root"] instead if you nest themes.
      "::-webkit-scrollbar": {
        width: "8px",
      },

      "::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        backgroundColor: myTheme.palette.secondary.main,
        boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.5)`,
      },
      "::-webkit-scrollbar-track": {
        borderRadius: "10px",
        backgroundColor: myTheme.palette.primary.main,
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.4)",
      },
      // ".MuiCircularProgress-circleDeterminate": {
      //   stroke: myTheme.palette.accent.main,
      // },
    },
  })(() => null);

  const setTheme = (themeName) => {
    switch (themeName) {
      case "light":
        setMyTheme(lightTheme);
        break;

      case "dark":
        setMyTheme(darkTheme);
        break;

      default:
        setMyTheme(darkTheme);
    }
  };

  return (
    <React.Fragment>
      <GlobalCss />
      <ThemeProvider theme={myTheme}>
        <BrowserRouter>
          <Switch>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{
                position: "relative",
                height: "100vh",
                width: "100vw",
                maxHeight: "100vh",
                maxWidth: "2560px",
                minWidth: "318px",
              }}
            >
              {/* Desktop View */}
              <Hidden xsDown>
                <Grid
                  item
                  container
                  style={{
                    position: "relative",
                    flexWrap: "nowrap",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Navigation />
                  <Home />
                  <SettingPanel setTheme={setTheme} />
                </Grid>
              </Hidden>

              {/* Mobile View */}
              <Hidden smUp>
                <Grid
                  item
                  container
                  direction="column"
                  style={{
                    height: "100%",
                    width: "100%",
                    flexWrap: "nowrap",
                    // border: "1px solid red",
                  }}
                >
                  <Home />
                  <SettingPanel setTheme={setTheme} />
                  <MobileNav />
                </Grid>
              </Hidden>
            </Grid>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
