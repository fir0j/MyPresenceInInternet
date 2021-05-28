import React from "react";
import { useMediaQuery, Paper, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

function HeaderWave({ marginLeft, marginRight }) {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Grid
      item
      style={{
        // position: "absolute",
        // top: 0,
        // width: "100%",
        position: "relative",
        overflow: "hidden",
        lineHeight: 5,
        transform: "rotate(0deg)",
        marginLeft: marginLeft,
        marginRight: marginRight,
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
          background: theme.palette.common.myGradient,
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

function FooterWave({ marginLeft, marginRight }) {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Grid
      item
      style={{
        // position: "absolute",
        // bottom: 0,
        // width: "100%",
        position: "relative",
        lineHeight: 0,
        transform: "rotateZ(180deg)",
        marginLeft: marginLeft,
        marginRight: marginRight,
        borderTopRightRadius: theme.spacing(1),
        borderTopLeftRadius: theme.spacing(1),
        maxWidth: "100vw",
        overflow: "hidden",
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
          background: theme.palette.common.myGradient,
          opacity: 0.7,
          fill: theme.palette.primary.main,
          transform: "rotateY(180deg)",
          borderTopRightRadius: theme.spacing(1),
          borderTopLeftRadius: theme.spacing(1),
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
