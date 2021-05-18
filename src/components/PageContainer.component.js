import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { animated, useSpring } from "react-spring";

const useStyles = makeStyles((theme) => ({
  PageContainer: {
    overflowY: "scroll",
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
  },
  pageWrapper: {
    maxWidth: theme.spacing(170),
  },
}));

const PageContainer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const AnimatedGrid = animated(Grid);
  const slideLeft = useSpring({
    from: {
      // added extra css: position:"fixed" in order to prevent scrollbar overflow
      // position: "fixed",
      transform: "translateY(15%)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0)",
      opacity: 1,
    },
    delay: 250,
  });

  return (
    <Grid
      item
      container
      justify="center"
      className={classes.PageContainer}
      xs={matchesXS ? 12 : 10}
      sm={10}
      md={10}
      lg={10}
      xl={10}
    >
      <AnimatedGrid
        item
        container
        justify="center"
        style={slideLeft}
        className={classes.pageWrapper}
      >
        {props.children}
      </AnimatedGrid>
    </Grid>
  );
};

export default PageContainer;
