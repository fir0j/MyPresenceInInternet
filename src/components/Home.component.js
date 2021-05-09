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
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <React.Fragment>
      <Grid
        item
        container
        justify="center"
        alignItems="flex-start"
        xl={10}
        lg={10}
        md={10}
        sm={10}
        xs={12}
        style={{
          // scroll window
          // border: "3px solid teal",
          minWidth: "320px",
          backgroundColor: theme.palette.common.bg,
          // background: `linear-gradient(to left,${theme.palette.common.color1},${theme.palette.common.color2})`,
          overflowY: "auto",
          height: "auto",
          paddingTop: theme.spacing(2),
          paddingLeft: matchesXL
            ? matchesLG
              ? matchesSM
                ? matchesXS
                  ? theme.spacing(1)
                  : theme.spacing(2)
                : theme.spacing(7)
              : theme.spacing(20)
            : undefined,
          paddingRight: matchesXL
            ? matchesLG
              ? matchesSM
                ? matchesXS
                  ? theme.spacing(1)
                  : theme.spacing(2)
                : theme.spacing(7)
              : theme.spacing(20)
            : undefined,
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
