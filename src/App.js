import React, { useState } from "react";
import {
  ThemeProvider,
  createMuiTheme,
  withStyles,
} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Route } from "react-router-dom";

import { Switch, useLocation } from "react-router-dom";
import { cyanTheme, goldTheme } from "./customTheme";

import Navigation from "./components/Navigation.component";
import SettingPanel from "./components/SettingPanel.component";

import Resume from "./pages/resume";
import Project from "./pages/project";
import Stats from "./pages/stats";
import HireMe from "./pages/hireme";

const GlobalCss = withStyles({
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
  const [myTheme, setMyTheme] = useState(goldTheme);
  // const [myTheme, setMyTheme] = useLocalStorageState("myTheme", goldTheme);

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
            flexWrap: "nowrap",
          }}
        >
          <Navigation />
          <Switch>
            <Route exact path="/" render={(props) => <Resume {...props} />} />
            <Route path="/project" render={(props) => <Project {...props} />} />
            <Route path="/stats" render={(props) => <Stats {...props} />} />
            <Route path="/hireme" render={(props) => <HireMe {...props} />} />
          </Switch>
        </Grid>
        <SettingPanel setTheme={setTheme} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
