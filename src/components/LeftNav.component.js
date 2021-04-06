import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiTabs-scroller": {
      display: "flex",
      flexDirection: "column",
    },
    ".MuiTabs-flexContainer": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flexBasis: "100%",
    },
    ".MuiTab-root": {
      flexGrow: 1,
    },
  },
})(() => null);

const useStyles = makeStyles((theme) => ({
  LefNavWrapper: {
    // backgroundColor: "lightgrey",
    // border: "1px solid black",
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
    maxHeight: "100vh",
  },
  tabs: {
    // border: "1px solid blue",
    height: "100vh",
    maxHeight: "100vh",
    flexBasis: "100%",
  },

  tab: {
    // removing default min-width and max-width , also should come after width declaration
    width: "100%",
    minWidth: "0px",
    maxWidth: "100%",
    // removing default max-height , and max-height should come after width declaration
    // height: "calc((100vh/5) - 2px)",
    maxHeight: "calc(100vh/5)",
    // minHeight: "0px",
    backgroundColor: theme.palette.primary.main,
    margin: 1,
  },
  indicator: {
    // backgroundColor: "red",
  },
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
}));

export default function LefNav() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const verticalTabs = (
    <Tabs
      orientation="vertical"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs"
      className={classes.tabs}
      indicator="false"
      classes={{ indicator: classes.indicator }}
    >
      <Tab label="Resume" to="/" component={Link} className={classes.tab} />
      <Tab
        label="Project"
        to="/project"
        component={Link}
        className={classes.tab}
      />
      <Tab label="Blog" to="/blog" component={Link} className={classes.tab} />
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
  );

  return (
    <Fragment>
      <GlobalCss />
      <Grid item container xl={2} lg={2} md={2} xs={2}>
        <Grid
          item
          container
          direction="column"
          className={classes.LefNavWrapper}
        >
          {verticalTabs}
        </Grid>
      </Grid>
    </Fragment>
  );
}
// .MuiTabs-flexContainerVertical
