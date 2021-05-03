import React from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Route } from "react-router-dom";

import Resume from "../pages/resume";
import Project from "../pages/project";
import Feedback from "../pages/feedback";
import HireMe from "../pages/hireme";

export default function HomeNav() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
  return (
    <React.Fragment>
      <Grid
        item
        container
        justify="center"
        alignItems="flex-start"
        xl={matchesXS ? 12 : undefined}
        lg={matchesXS ? 12 : undefined}
        md={matchesXS ? 12 : undefined}
        xs={matchesXS ? 12 : undefined}
        style={{
          // border: "3px solid blue",
          paddingLeft: matchesXL
            ? matchesLG
              ? matchesSM
                ? theme.spacing(2)
                : theme.spacing(7)
              : theme.spacing(20)
            : undefined,
          paddingRight: matchesXL
            ? matchesLG
              ? matchesSM
                ? theme.spacing(2)
                : theme.spacing(7)
              : theme.spacing(20)
            : undefined,
          backgroundColor: theme.palette.common.dark,
          height: matchesXS ? "calc(100vh - 85px)" : "100vh",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        <Route exact path="/" render={(props) => <Resume />} />
        <Route exact path="/project" render={(props) => <Project />} />
        <Route exact path="/feedback" render={(props) => <Feedback />} />
        <Route exact path="/hireme" render={(props) => <HireMe />} />
      </Grid>
    </React.Fragment>
  );
}
