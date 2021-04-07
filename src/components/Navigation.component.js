import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
// import { withStyles } from "@material-ui/core/styles";

// const GlobalCss = withStyles({
//   // @global is handled by jss-plugin-global.
//   "@global": {
//     // You should target [class*="MuiButton-root"] instead if you nest themes.
//     ".MuiTabs-scroller": {
//       display: "flex",
//       flexDirection: "column",
//     },
//     ".MuiTabs-flexContainer": {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       flexBasis: "100%",
//     },
//     ".MuiTab-root": {
//       flexGrow: 1,
//     },
//   },
// })(() => null);

const useStyles = makeStyles((theme) => ({
  navigationWrapper: {
    // border: "5px solid black",
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
    maxHeight: "100vh",
  },
  tabs: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  tab: {
    backgroundColor: "lightblue",
    // border: "1px solid red",
    width: "100%",
    // height: "calc(100vh/4)",
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: 1,
    marginBottom: 1,
  },

  // CSS RULE NAME
  flexContainerVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "100%",
    width: "100%",
    height: "100%",
    // overwriting class .flexContainerVertical.MuiTab-root globally without using {withStyle} HOC
    "&>.MuiTab-root": {
      flexGrow: 1,
    },
  },
  indicator: {
    backgroundColor: "orange",
  },
}));

export default function Navigation() {
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
      indicator
      classes={{
        flexContainerVertical: classes.flexContainerVertical,
        indicator: classes.indicator,
      }}
      className={classes.tabs}
    >
      <Tab label="Resume" to="/" component={Link} className={classes.tab} />
      <Tab
        label="Project"
        to="/project"
        component={Link}
        className={classes.tab}
      />
      <Tab
        label="Feedback"
        to="/feedback"
        component={Link}
        className={classes.tab}
      />
      <Tab
        label="HireMe"
        to="/hireme"
        component={Link}
        className={classes.tab}
      />
    </Tabs>
  );

  return (
    <Fragment>
      {/* <GlobalCss /> */}
      <Grid item container xl={2} lg={2} md={2} xs={2}>
        <Grid item container className={classes.navigationWrapper}>
          {verticalTabs}
        </Grid>
      </Grid>
    </Fragment>
  );
}
// .MuiTabs-flexContainerVertical
