import React from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Route } from "react-router-dom";

import Resume from "../pages/resume";
import Project from "../pages/project";
import Stats from "../pages/stats";
import HireMe from "../pages/hireme";

export default function HomeNav() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <React.Fragment>
      <Route exact path="/" render={(props) => <Resume />} />
      <Route exact path="/project" render={(props) => <Project />} />
      <Route exact path="/stats" render={(props) => <Stats />} />
      <Route exact path="/hireme" render={(props) => <HireMe />} />
    </React.Fragment>
  );
}
