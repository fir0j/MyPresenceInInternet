import React, { Fragment } from "react";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function HeaderWave() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Grid
      item
      style={{
        position: "relative",
        overflow: "hidden",
        lineHeight: 5,
        transform: "rotate(0deg)",
        marginLeft: -theme.spacing(1),
        marginRight: -theme.spacing(1),
        borderTopRightRadius: theme.spacing(1),
        borderTopLeftRadius: theme.spacing(1),
      }}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          position: "relative",
          width: "calc(300% + 1.3px)",
          height: matchesXL ? (matchesMD ? (matchesXS ? 50 : 80) : 100) : 100,
          transform: "rotateY(180deg)",
          background:
            "linear-gradient(135deg, rgba(90,206,97,1) 0%, rgba(74,228,184,1) 100%)",
          // background:
          //   "linear-gradient(135deg, rgba(170,184,110,1) 0%, rgba(180,137,49,1) 100%)",
          opacity: 0.7,
          fill: theme.palette.primary.main,
          // stroke: "#FFF",
        }}
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="shape-fill"
        ></path>
      </svg>
    </Grid>
  );
}

function FooterWave() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Grid
      item
      style={{
        position: "relative",
        overflow: "hidden",
        lineHeight: 0,
        transform: "rotate(180deg)",
        marginLeft: -theme.spacing(1),
        marginRight: -theme.spacing(1),
        borderTopRightRadius: theme.spacing(1),
        borderTopLeftRadius: theme.spacing(1),
        maxWidth: "100vw",
      }}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          position: "relative",
          width: "calc(300% + 1.3px)",
          height: matchesXL ? (matchesMD ? (matchesXS ? 50 : 80) : 100) : 100,
          transform: "rotateY(180deg)",
          background:
            "linear-gradient(135deg, rgba(90,206,97,1) 0%, rgba(74,228,184,1) 100%)",
          // background:
          //   "linear-gradient(135deg, rgba(170,184,110,1) 0%, rgba(180,137,49,1) 100%)",
          opacity: 0.7,
          fill: theme.palette.primary.main,
        }}
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="shape-fill"
        ></path>
      </svg>
    </Grid>
  );
}

export { HeaderWave, FooterWave };
