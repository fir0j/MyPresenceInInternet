import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import customTheme from "./customTheme";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter, Switch } from "react-router-dom";

import LeftNav from "./components/LeftNav.component";
import Home from "./components/Home.component";
import RightNav from "./components/RightNav.component";

const useStyles = makeStyles((theme) => ({
  outline: {
    border: "1px solid black",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <Switch>
            <Grid container direction="row" className={classes.outline}>
              <LeftNav />
              <Home />
              <RightNav />
            </Grid>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
