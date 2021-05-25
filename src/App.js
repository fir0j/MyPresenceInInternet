import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  createMuiTheme,
  useTheme,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import { Grid, useMediaQuery, Container, Typography } from "@material-ui/core";
import { Route } from "react-router-dom";

import { Switch, useLocation } from "react-router-dom";
import { cyanTheme, goldTheme } from "./customTheme";
import { animated, useTransition } from "react-spring";

import Navigation from "./components/Navigation.component";
import SettingPanel from "./components/SettingPanel.component";

import Resume from "./pages/resume";
import Project from "./pages/project";
import Stats from "./pages/stats";
import HireMe from "./pages/hireme";

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

function App() {
  const [myTheme, setMyTheme] = useState(cyanTheme);
  // const [myTheme, setMyTheme] = useLocalStorageState("myTheme", goldTheme);
  const location = useLocation();

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

  // function useLocalStorageState(key, defaultState = "") {
  //   const [state, setState] = useState(
  //     () => JSON.parse(window.localStorage.getItem("myTheme")) || defaultState
  //   );
  //   useEffect(() => {
  //     window.localStorage.setItem(key, JSON.stringify(state));
  //   }, [key, state]);

  //   return [state, setState];
  // }

  return (
    <React.Fragment>
      {/* <GlobalCss /> */}
      <ThemeProvider theme={createMuiTheme(myTheme)}>
        <Grid
          container
          style={{
            position: "absolute",
            inset: 0,
            width: "100vw",
            height: "100vh",
            maxWidth: "100vw",
            maxHeight: "100vh",
            backgroundColor: myTheme.palette.common.backgroundColor,
            // background:
            //   "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
            // backgroundBlendMode: "multiply",
            flexWrap: "nowrap",
          }}
        >
          <Navigation />
          <Switch>
            <Route exact path="/" render={(props) => <Resume />} />
            <Route exact path="/project" render={(props) => <Project />} />
            <Route exact path="/stats" render={(props) => <Stats />} />
            <Route exact path="/hireme" render={(props) => <HireMe />} />
          </Switch>
        </Grid>
        <SettingPanel setTheme={setTheme} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
