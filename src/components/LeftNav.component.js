import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  LefNavWrapper: {
    maxWidth: "100vh",
    // border: "1px solid black",
    backgroundColor: "lightgrey",
  },
  tabs: {
    // width: "80%",
  },
  tab: {
    // width: "100%",
    maxWidth: "100%",
    margin: 1,
    height: "calc((100vh/5) - 2px)",
    maxHeight: "calc(100vh/5)",
    backgroundColor: theme.palette.primary.main,
  },
  indicator: {
    // backgroundColor: "red",
  },
}));

export default function LefNav() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Grid item container xl={2} lg={2} md={2} xs={2}>
        <Grid
          item
          container
          direction="column"
          className={classes.LefNavWrapper}
        >
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            className={classes.tabs}
            indicator="false"
            classes={{ indicator: classes.indicator }}
          >
            <Tab
              label="Resume"
              to="/"
              component={Link}
              className={classes.tab}
            />
            <Tab
              label="Project"
              to="/project"
              component={Link}
              className={classes.tab}
            />
            <Tab
              label="Blog"
              to="/blog"
              component={Link}
              className={classes.tab}
            />
            <Tab
              label="HireMe"
              to="/hireme"
              component={Link}
              className={classes.tab}
            />
            <Tab
              label="Profile"
              to="/profile"
              component={Link}
              className={classes.tab}
            />
          </Tabs>
        </Grid>
      </Grid>
    </Fragment>
  );
}
