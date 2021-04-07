import React from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Route } from "react-router-dom";

import Resume from "../pages/resume";
import Project from "../pages/project";
import Blog from "../pages/blogs";
import HireMe from "../pages/hireme";

export default function HomeNav() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <React.Fragment>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        xl={matchesXS ? 12 : undefined}
        lg={matchesXS ? 12 : undefined}
        md={matchesXS ? 12 : undefined}
        xs={matchesXS ? 12 : undefined}
        style={{
          border: "1px solid green",
        }}
      >
        <Grid item>
          <Route exact path="/" render={(props) => <Resume />} />
          <Route exact path="/project" render={(props) => <Project />} />
          <Route exact path="/feedback" render={(props) => <Blog />} />
          <Route exact path="/hireme" render={(props) => <HireMe />} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
