import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  LefNavWrapper: {
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
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
      <Grid
        item
        container
        style={{ border: "1px solid grey" }}
        xl={2}
        lg={2}
        md={2}
        xs={2}
      >
        <Grid item style={{ width: "100%" }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            className={classes.tabs}
          >
            <Tab label="Resume" to="/" component={Link} />
            <Tab label="Project" to="/project" component={Link} />
            <Tab label="Blog" to="/blog" component={Link} />
            <Tab label="HireMe" to="/hireme" component={Link} />
            <Tab label="Profile" to="/profile" component={Link} />
          </Tabs>
        </Grid>
      </Grid>
    </Fragment>
  );
}
