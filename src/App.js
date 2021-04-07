import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import customTheme from "./customTheme";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter, Switch } from "react-router-dom";

import Navigation from "./components/Navigation.component";
import Home from "./components/Home.component";
import SettingPanel from "./components/SettingPanel.component";
import MobileNav from "./components/MobileNav.component";
import Hidden from "@material-ui/core/Hidden";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
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
                    // border: "1px solid red",
                  }}
                >
                  <Navigation />
                  <Home />
                  <SettingPanel />
                </Grid>
              </Hidden>
              <Hidden smUp>
                <Grid
                  item
                  container
                  direction="column"
                  justify="space-between"
                  style={{
                    height: "100%",
                    maxHeight: "100vh",
                    flexBasis: "100%",
                    flexWrap: "nowrap",
                  }}
                >
                  <Grid item style={{ width: "100%" }}>
                    <MobileNav />
                  </Grid>
                  <Grid
                    item
                    style={{
                      flexGrow: 1,
                      overflow: "scroll",
                    }}
                  >
                    <Home />
                  </Grid>
                  <Grid item style={{ width: "100%" }}>
                    <SettingPanel />
                  </Grid>
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
