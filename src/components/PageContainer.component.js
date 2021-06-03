import React from "react";
import { Grid, useMediaQuery, Paper } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { animated, useSpring, config } from "react-spring";
import { HeaderWave, FooterWave } from "./ShapeDivider.component";

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

const PageContainer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
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
        <Paper
          elevation={3}
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            zIndex: 0,
            borderRadius: theme.spacing(1),
            marginTop: theme.spacing(1),
            marginBottom: matchesSM ? theme.spacing(20) : theme.spacing(5),
          }}
        >
          <HeaderWave />
          {props.children}
          <FooterWave />
        </Paper>
      </AnimatedGrid>
    </Grid>
  );
};

export default PageContainer;
