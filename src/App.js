import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useTheme, makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter, Switch } from "react-router-dom";
import { cyanTheme, goldTheme } from "./customTheme";

import Navigation from "./components/Navigation.component";
import Home from "./components/Home.component";
import SettingPanel from "./components/SettingPanel.component";
import MobileNav from "./components/MobileNav.component";
import Hidden from "@material-ui/core/Hidden";

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    // ".MuiCircularProgress-circleDeterminate": {
    //   stroke: myTheme.palette.accent.main,
    // },
    // ".Mui-selected": {
    //   backgroundColor: "transparent",
    //   border: "none",
    // },
  },
})(() => null);

function useLocalStorageState(key, defaultState = "") {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem("myTheme")) || defaultState
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

function App() {
  const [myTheme, setMyTheme] = useLocalStorageState("myTheme", goldTheme);

  const setTheme = (themeName) => {
    switch (themeName) {
      case "cyan":
        setMyTheme(cyanTheme);
        break;

      case "gold":
        setMyTheme(goldTheme);
        break;

      default:
        setMyTheme(cyanTheme);
    }
  };

  return (
    <React.Fragment>
      <GlobalCss />
      <ThemeProvider theme={createMuiTheme(myTheme)}>
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
                minWidth: "315px",
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
