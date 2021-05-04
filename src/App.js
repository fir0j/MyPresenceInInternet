import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./customTheme";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter, Switch } from "react-router-dom";

import Navigation from "./components/Navigation.component";
import Home from "./components/Home.component";
import SettingPanel from "./components/SettingPanel.component";
import MobileNav from "./components/MobileNav.component";
import Hidden from "@material-ui/core/Hidden";

function App() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
  const [isNightmode, setNightmode] = useState(true);

  return (
    <React.Fragment>
      <ThemeProvider theme={isNightmode ? darkTheme : lightTheme}>
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
              }}
            >
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
                  <SettingPanel
                    isNightmode={isNightmode}
                    setNightmode={setNightmode}
                  />
                </Grid>
              </Hidden>

              {/* mobile navigation */}
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
                  <SettingPanel
                    isNightmode={isNightmode}
                    setNightmode={setNightmode}
                  />
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
