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
  tabsContainer: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  tab: {
    // border: "1px solid red",
    width: "100%",
    // height: "calc(100vh/4)",
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: "lightblue",
    // marginTop: 1,
    // marginBottom: 1,
    // borderTopRightRadius: "20px",
    // borderBottomRightRadius: "20px",
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
    backgroundColor: "teal",
    // overwriting class .flexContainerVertical.MuiTab-root globally without using {withStyle} HOC
    "&>.MuiTab-root": {
      flexGrow: 1,
      // border: "1px solid blue",
    },
    "&>.Mui-selected": {
      backgroundColor: "teal",
      borderTopLeftRadius: "50px",
      borderBottomLeftRadius: "50px",
      position: "relative",
      marginLeft: "20px",
      marginTop: "20px",
      marginBottom: "20px",
      // paddingTop: "30px",
      // paddingBottom: "30px",
      // paddingRight: "30px",
      "&>.MuiTab-wrapper": {
        // position: "absolute",
        backgroundColor: "#009688 ",
        // backgroundColor: "lightpink",
        width: "100%",
        height: "100%",
        borderTopRightRadius: "120px",
        borderBottomRightRadius: "120px",
      },
    },
  },
  indicator: {
    backgroundColor: "teal",
    width: "1px",
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getIndex = (index) => index;

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
      className={classes.tabsContainer}
    >
      <Tab
        label="Resume"
        to="/"
        component={Link}
        className={classes.tab}
        style={{
          borderBottomRightRadius:
            value - getIndex(0) === 1 ? "80px" : undefined,
        }}
      />
      <Tab
        label="Project"
        to="/project"
        component={Link}
        className={classes.tab}
        style={{
          borderBottomRightRadius:
            value - getIndex(1) === 1 ? "80px" : undefined,
        }}
      />
      <Tab
        label="Feedback"
        to="/feedback"
        component={Link}
        className={classes.tab}
        style={{
          borderTopRightRadius: value + getIndex(2) === 3 ? "80px" : undefined,
          borderBottomRightRadius:
            value - getIndex(2) === 1 ? "80px" : undefined,
        }}
      />
      <Tab
        label="HireMe"
        to="/hireme"
        component={Link}
        className={classes.tab}
        style={{
          borderTopRightRadius: value + getIndex(2) === 4 ? "80px" : undefined,
        }}
      />
      <Tab
        label="Sound"
        disabled
        className={classes.tab}
        style={{
          borderTopRightRadius: value + getIndex(3) === 6 ? "80px" : undefined,
          maxHeight: "100px",
        }}
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
