import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { animated, useSpring, config } from "react-spring";

const useStyles = makeStyles((theme) => ({
  PageContainer: {
    position: "relative",
    overflowY: "scroll",
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
  },
  pageWrapper: {
    maxWidth: theme.spacing(170),
    paddingBottom: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(20),
    },
  },
}));

const PageContainer = (props) => {
  const classes = useStyles();
  const AnimatedGrid = animated(Grid);
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
    >
      <AnimatedGrid
        item
        container
        justify="center"
        style={slideUp}
        className={classes.pageWrapper}
      >
        {props.children}
      </AnimatedGrid>
    </Grid>
  );
};

export default PageContainer;
