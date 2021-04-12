import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./customTheme";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter, Switch } from "react-router-dom";

import Navigation from "./components/Navigation.component";
import Home from "./components/Home.component";
import SettingPanel from "./components/SettingPanel.component";
import MobileNav from "./components/MobileNav.component";
import Hidden from "@material-ui/core/Hidden";

function App() {
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
                    // border: "1px solid red",
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
              <Hidden smUp>
                <Grid
                  item
                  container
                  direction="column"
                  justify="space-evenly"
                  style={{
                    height: "100%",
                    maxHeight: "100vh",
                    flexBasis: "100%",
                    flexWrap: "nowrap",
                  }}
                >
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
                    <SettingPanel
                      isNightmode={isNightmode}
                      setNightmode={setNightmode}
                    />
                  </Grid>
                  <Grid item style={{ width: "100%" }}>
                    <MobileNav />
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
