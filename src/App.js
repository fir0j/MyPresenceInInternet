import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import theme from "./theme";
import LeftNav from "./components/LeftNav.component";
import Home from "./components/Home.component";
import RightNav from "./components/RightNav.component";

const useStyles = makeStyles((theme) => ({
  outline: {
    border: "1px solid grey",
    padding: "1px",
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Grid container direction="row" className={classes.outline}>
        <Grid
          item
          container
          className={classes.outline}
          xl={2}
          lg={2}
          md={2}
          xs={2}
        >
          <Grid item>
            <LeftNav />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.outline}
          xl={9}
          lg={9}
          md={9}
          xs={9}
        >
          <Grid item>
            <Home />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.outline}
          xl={1}
          lg={1}
          md={1}
          xs={1}
        >
          <Grid item>
            <RightNav />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
