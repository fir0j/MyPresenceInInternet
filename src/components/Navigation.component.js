import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import resume from "../assets/resume.svg";
import hireme from "../assets/hireme.svg";
import projectIcon from "../assets/projectIcon.svg";
import feedbackIcon from "../assets/feedbackIcon.svg";

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
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    // backgroundColor: "#69F0AE",
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
    backgroundColor: "#2C2C2C",
    // overwriting class .flexContainerVertical.MuiTab-root globally without using {withStyle} HOC
    "&>.MuiTab-root": {
      flexGrow: 1,
      backgroundColor: "black",
      // border: "1px solid blue",
    },

    "&>.Mui-selected": {
      backgroundColor: "#2C2C2C",
      borderTopLeftRadius: "50px",
      borderBottomLeftRadius: "50px",
      position: "relative",
      margin: "50px",

      "&>.MuiTab-wrapper": {
        // backgroundColor: "#009688 ",
        width: "100%",
        height: "100%",
        borderTopRightRadius: "120px",
        borderBottomRightRadius: "120px",
      },
    },
    "&>.Mui-disabled": {
      // backgroundColor: "transparent",
      backgroundColor: "black",
    },
  },
  indicator: {
    // backgroundColor: "#009688",
    backgroundColor: "transparent",
    width: "2px",
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = useState(1);

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
      classes={{
        flexContainerVertical: classes.flexContainerVertical,
        indicator: classes.indicator,
      }}
      className={classes.tabsContainer}
    >
      <Tab
        label="LOGO"
        icon={
          <img
            alt="resume icon"
            style={{ width: "140px", height: "140px" }}
            src={logo}
          ></img>
        }
        disabled
        className={classes.tab}
        style={{
          borderBottomRightRadius:
            value - getIndex(0) === 1 ? "80px" : undefined,
          height: "150px",
        }}
      />

      <Tab
        label="Resume"
        icon={
          <img
            alt="resume icon"
            style={{ width: "150px", height: "150px" }}
            src={resume}
          ></img>
        }
        to="/"
        component={Link}
        className={classes.tab}
        style={{
          borderBottomRightRadius:
            value - getIndex(1) === 1 ? "80px" : undefined,
        }}
      />
      <Tab
        label="Project"
        icon={
          <img
            alt="resume icon"
            style={{ width: "96px", height: "96px" }}
            src={projectIcon}
          ></img>
        }
        to="/project"
        component={Link}
        className={classes.tab}
        style={{
          borderTopRightRadius: value - getIndex(2) === -1 ? "80px" : undefined,
          borderBottomRightRadius:
            value - getIndex(2) === 1 ? "80px" : undefined,
        }}
      />
      <Tab
        label="Feedback"
        icon={
          <img
            alt="resume icon"
            style={{ width: "96px", height: "96px" }}
            src={feedbackIcon}
          ></img>
        }
        to="/feedback"
        component={Link}
        className={classes.tab}
        style={{
          borderTopRightRadius: value + getIndex(3) === 5 ? "80px" : undefined,
          borderBottomRightRadius:
            value + getIndex(3) === 7 ? "80px" : undefined,
        }}
      />
      <Tab
        label="HireMe"
        to="/hireme"
        icon={
          <img
            alt="resume icon"
            style={{ width: "96px", height: "96px" }}
            src={hireme}
          ></img>
        }
        component={Link}
        className={classes.tab}
        style={{
          borderTopRightRadius: value + getIndex(4) === 7 ? "80px" : undefined,
        }}
      />
      <Tab
        label="Sound"
        disabled
        className={classes.tab}
        style={{
          borderTopRightRadius: value + getIndex(5) === 9 ? "80px" : undefined,
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
