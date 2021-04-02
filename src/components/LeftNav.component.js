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
  tabs: {
    ...theme.tabs,
  },
  tab: {
    ...theme.tab,
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
        <Grid item style={{ width: "100%;" }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            className={classes.tabs}
          >
            {/* <Grid
              container
              direction="column"
              className={classes.LefNavWrapper}
            >
              <Grid item container xl lg md sm xs>
                <Grid item>
                  <Tab label="Resume" to="/" component={Link} />
                </Grid>
              </Grid>
              <Grid item container xl lg md sm xs>
                <Grid item>
                  <Tab label="Project" to="/project" component={Link} />
                </Grid>
              </Grid>
              <Grid item container xl lg md sm xs>
                <Grid item>
                  <Tab label="Blog" to="/blog" component={Link} />
                </Grid>
              </Grid>
              <Grid item container xl lg md sm xs>
                <Grid item>
                  <Tab label="HireMe" to="/hireme" component={Link} />
                </Grid>
              </Grid>
              <Grid item container xl lg md sm xs>
                <Grid item>
                  <Tab label="Profile" to="/profile" component={Link} />
                </Grid>
              </Grid>
            </Grid> */}

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
