import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { ReactComponent as Resume } from "../assets/resume.svg";
import { ReactComponent as Hireme } from "../assets/hireme.svg";
import { ReactComponent as ProjectIcon } from "../assets/projectIcon.svg";
import { ReactComponent as FeedbackIcon } from "../assets/feedbackIcon.svg";

const useStyles = makeStyles((theme) => ({
  iconDimension: {
    width: "48px",
    height: "48px",
  },
  tab: {
    color: theme.palette.accent.main,
  },

  root: {
    flexGrow: 1,
  },

  flexContainer: {
    flexDirection: "row",
    backgroundColor: theme.palette.primary.main,
    "&>.MuiTab-root": {
      backgroundColor: theme.palette.common.tab,
      color: theme.palette.accent.main,
      flexGrow: 1,
      border: `1px solid ${theme.palette.accent.main}`,
      borderRight: "none",
      fontWeight: "bold",
    },
    "&>.MuiTab-labelIcon": {
      paddingTop: "0px",
    },

    "&>.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      position: "relative",

      "&>.MuiTab-wrapper": {
        width: "100%",
        height: "100%",
      },
    },
  },
  indicator: {
    backgroundColor: theme.palette.accent.main,
  },
}));

export default function MobilieNav() {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{
          position: "fixed",
          bottom: 0,
        }}
      >
        <Paper square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            aria-label="icon label tabs example"
            classes={{
              flexContainer: classes.flexContainer,
              indicator: classes.indicator,
            }}
          >
            <Tab
              icon={
                <Resume
                  fill={theme.palette.accent.main}
                  stroke={theme.palette.accent.main}
                  className={classes.iconDimension}
                />
              }
              label="RESUME"
              to="/"
              component={Link}
              className={classes.tab}
              style={{
                borderTop: value === 0 ? "none" : undefined,
                borderBottom: value === 0 ? "none" : undefined,
              }}
            />
            <Tab
              icon={
                <ProjectIcon
                  fill={theme.palette.accent.main}
                  stroke={theme.palette.accent.main}
                  className={classes.iconDimension}
                />
              }
              label="PROJECT"
              to="/project"
              component={Link}
              className={classes.tab}
              style={{
                borderTop: value === 1 ? "none" : undefined,
                borderBottom: value === 1 ? "none" : undefined,
              }}
            />
            <Tab
              icon={
                <FeedbackIcon
                  fill={theme.palette.accent.main}
                  stroke={theme.palette.accent.main}
                  className={classes.iconDimension}
                />
              }
              label="STATS"
              to="/stats"
              component={Link}
              className={classes.tab}
              style={{
                borderTop: value === 2 ? "none" : undefined,
                borderBottom: value === 2 ? "none" : undefined,
              }}
            />
            <Tab
              icon={
                <Hireme
                  fill={theme.palette.accent.main}
                  stroke={theme.palette.accent.main}
                  className={classes.iconDimension}
                />
              }
              label="HIREME"
              to="/hireme"
              component={Link}
              className={classes.tab}
              style={{
                borderTop: value === 3 ? "none" : undefined,
                borderBottom: value === 3 ? "none" : undefined,
                borderRight: `1px solid ${theme.palette.accent.main}`,
              }}
            />
          </Tabs>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
