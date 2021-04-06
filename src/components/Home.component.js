import React from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Route } from "react-router-dom";

import Resume from "../pages/resume";
import Project from "../pages/project";
import Blog from "../pages/blogs";
import HireMe from "../pages/hireme";
import Profile from "../pages/profile";
import RightNav from "./RightNav.component";

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
        xl={matchesXS ? 12 : 9}
        lg={matchesXS ? 12 : 9}
        md={matchesXS ? 12 : 9}
        xs={matchesXS ? 12 : 9}
        style={{
          border: "1px solid green",
        }}
      >
        <Grid item>
          <Route exact path="/" render={(props) => <Resume />} />
          <Route exact path="/project" render={(props) => <Project />} />
          <Route exact path="/blog" render={(props) => <Blog />} />
          <Route exact path="/hireme" render={(props) => <HireMe />} />
          <Route exact path="/profile" render={(props) => <Profile />} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
