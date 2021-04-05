import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import customTheme from "./customTheme";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter, Switch } from "react-router-dom";

import LeftNav from "./components/LeftNav.component";
import Home from "./components/Home.component";
import RightNav from "./components/RightNav.component";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <Switch>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="row"
            >
              <Grid item container style={{ maxWidth: "1920px" }}>
                <LeftNav />
                <Home />
                <RightNav />
              </Grid>
            </Grid>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
