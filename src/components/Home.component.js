import React from "react";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Resume from "../pages/resume";
import Project from "../pages/project";
import Blog from "../pages/blogs";
import HireMe from "../pages/hireme";
import Profile from "../pages/profile";

export default function HomeNav() {
  return (
    <React.Fragment>
      <Grid item container xl={9} lg={9} md={9} xs={9}>
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
