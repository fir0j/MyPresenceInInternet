import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Grid, useMediaQuery, Paper } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { animated, useSpring, config } from "react-spring";
import { useLocation } from "react-router-dom";
import { HeaderWave, FooterWave } from "./ShapeDivider.component";
import Resume from "../pages/resume";
import Project from "../pages/project";
import Stats from "../pages/stats";
import HireMe from "../pages/hireme";

const useStyles = makeStyles((theme) => ({
  PageContainer: {
    position: "relative",
    overflowY: "scroll",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  pageWrapper: {
    maxWidth: theme.spacing(170),
  },
}));

const PageContainer = ({ setOverflowRef }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const AnimatedGrid = animated(Grid);
  const { pathname } = useLocation();

  const slideUp = useSpring({
    from: {
      position: "relative",
      transform: "translateY(15%)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0)",
      opacity: 1,
    },
    config: config.gentle,
    delay: 100,
  });

  // SOLUTION 2: using react synthetic onScroll EVENT LISTENER
  // storing in ref because we don't want to trigger re-render if value changes.
  // const curPos = useRef(null);
  // const prevPos = useRef(null);
  // let throttleTimeout = null;

  // function handleScroll(ref, wait) {
  //   // if you don't want to throttle, pass wait = false
  //   // <div onScroll={(event) => handleScroll(elementRef,300,event)} />
  //   // <div onScroll={(event) => handleScroll(elementRef,false,event)} />
  //   const onScrollCallback = () => {
  //     throttleTimeout = null;
  //     const scrollPosition = ref.current.scrollTop;
  //     prevPos.current = curPos.current;
  //     curPos.current = scrollPosition;
  //     const scrolledUp = curPos.current > prevPos.current;
  //     setScrolledUp(scrolledUp);
  //   };

  //   if (wait) {
  //     if (throttleTimeout === null) {
  //       throttleTimeout = setTimeout(onScrollCallback, wait);
  //     }
  //   } else {
  //     onScrollCallback();
  //   }
  // }

  const slideUpResume = useSpring({
    from: {
      opacity: 0,
      y: 0,
    },
    opacity: pathname === "/" ? 1 : 0,
    y: pathname === "/" ? 0 : 300,
    delay: 150,
  });

  const slideUpProject = useSpring({
    from: {
      opacity: 0,
      y: 0,
    },
    opacity: pathname === "/project" ? 1 : 0,
    y: pathname === "/project" ? 0 : 300,
    delay: 150,
  });

  const slideUpStats = useSpring({
    from: {
      opacity: 0,
      y: 0,
    },
    opacity: pathname === "/stats" ? 1 : 0,
    y: pathname === "/stats" ? 0 : 300,
    delay: 150,
  });

  const slideUpHireme = useSpring({
    from: {
      opacity: 0,
      y: 0,
    },
    opacity: pathname === "/hireme" ? 1 : 0,
    y: pathname === "/hireme" ? 0 : 300,
    delay: 150,
  });

  return (
    <Grid
      item
      container
      justify="center"
      className={classes.PageContainer}
      sm={12}
      md={10}
      lg={10}
      xl={10}
      ref={setOverflowRef}
      // onScroll={() => handleScroll(overflowRef, 300)}
    >
      <Grid item container justify="center" className={classes.pageWrapper}>
        <Paper
          elevation={3}
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            zIndex: 0,
            borderRadius: theme.spacing(1),
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(5),
          }}
        >
          <HeaderWave />

          {pathname === "/" && (
            <Resume
              style={{
                ...slideUpResume,
              }}
            />
          )}

          {pathname === "/project" && (
            <Project
              style={{
                ...slideUpProject,
              }}
            />
          )}

          {pathname === "/stats" && (
            <Stats
              style={{
                ...slideUpStats,
              }}
            />
          )}

          {pathname === "/hireme" && (
            <HireMe
              style={{
                ...slideUpHireme,
              }}
            />
          )}

          {/* <Resume
            style={{
              ...slideUpResume,
              display: pathname === "/" ? "block" : "none",
            }}
          />
          <Project
            style={{
              ...slideUpProject,
              display: pathname === "/project" ? "block" : "none",
            }}
          />
          <Stats
            style={{
              ...slideUpStats,
              display: pathname === "/stats" ? "block" : "none",
            }}
          />
          <HireMe
            style={{
              ...slideUpHireme,
              display: pathname === "/hireme" ? "block" : "none",
            }}
          /> */}
          <FooterWave />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PageContainer;
