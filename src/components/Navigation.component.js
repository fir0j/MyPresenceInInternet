import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Resume } from "../assets/resume.svg";
import { ReactComponent as Hireme } from "../assets/hireme.svg";
import { ReactComponent as ProjectIcon } from "../assets/projectIcon.svg";
import { ReactComponent as FeedbackIcon } from "../assets/feedbackIcon.svg";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  navigationWrapper: {
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
    minWidth: "100px",
    // minHeight: "100px",
    maxWidth: "100%",
    maxHeight: "100%",
    letterSpacing: "0.1rem",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  iconDimension: {
    width: "96px",
    height: "96px",
    [theme.breakpoints.down("lg")]: {
      width: "64px",
      height: "64px",
    },
    [theme.breakpoints.down("md")]: {
      width: "48px",
      height: "48px",
    },
  },

  // CSS $Rule Name
  tabsFlexContainerVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flexBasis: "100%",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.common.bg,
    // background: `linear-gradient(90deg,${theme.palette.common.color1},${theme.palette.common.color2})`,
    color: theme.palette.accent.main,
  },

  tabsIndicator: {
    backgroundColor: "transparent",
    width: "1px",
  },

  tabRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.black,
    border: `1px solid ${theme.palette.accent.main}`,
    "&$tabSelected": {
      backgroundColor: "transparent",
      border: "none",
    },
    "&$tabDisabled": {
      // backgroundColor: "red",
    },

    "&:hover": {
      // since tab's :hover, :focus Pseudo-class is not controlled by Mui API, we can apply as normal css or SASS
      // backgroundColor: "red",
    },
  },

  tabSelected: {},
  tabDisabled: {},

  tabWrapper: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: "120px",
    borderBottomRightRadius: "120px",
  },

  tabLabelIcon: {
    paddingTop: "0px",
  },
}));

export default function Navigation() {
  const theme = useTheme();
  const classes = useStyles();
  const tabRules = {
    root: classes.tabRoot,
    selected: classes.tabSelected,
    disabled: classes.tabDisabled,
    wrapper: classes.tabWrapper,
    labelIcon: classes.tabLabelIcon,
  };

  const [value, setValue] = useState(1);
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setValue(1);
        break;
      case "/project":
        setValue(2);
        break;
      case "/feedback":
        setValue(3);
        break;
      case "/hireme":
        setValue(4);
        break;
      default:
        setValue(1);
        break;
    }
  }, []);

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
        flexContainerVertical: classes.tabsFlexContainerVertical,
        indicator: classes.tabsIndicator,
      }}
      className={classes.tabsContainer}
    >
      <Tab
        label=""
        disabled
        icon={
          <div>
            <Logo
              fill={theme.palette.accent.main}
              stroke={theme.palette.accent.main}
              className={classes.iconDimension}
            />
          </div>
        }
        className={classes.tab}
        classes={tabRules}
        style={{
          borderBottomRightRadius:
            value - getIndex(0) === 1
              ? matchesMD
                ? "40px"
                : "80px"
              : undefined,
        }}
      />

      <Tab
        label="Resume"
        icon={
          <div>
            <Resume
              fill={theme.palette.accent.main}
              stroke={theme.palette.accent.main}
              className={classes.iconDimension}
            />
          </div>
        }
        undefined
        to="/"
        component={Link}
        className={classes.tab}
        classes={tabRules}
        style={{
          borderBottomRightRadius:
            value - getIndex(1) === 1
              ? matchesMD
                ? "40px"
                : "80px"
              : undefined,
        }}
      />
      <Tab
        label="Project"
        icon={
          <div>
            <ProjectIcon
              fill={theme.palette.accent.main}
              stroke={theme.palette.accent.main}
              className={classes.iconDimension}
            />
          </div>
        }
        to="/project"
        component={Link}
        className={classes.tab}
        classes={tabRules}
        style={{
          borderTopRightRadius:
            value - getIndex(2) === -1
              ? matchesMD
                ? "40px"
                : "80px"
              : undefined,
          borderBottomRightRadius:
            value - getIndex(2) === 1
              ? matchesMD
                ? "40px"
                : "80px"
              : undefined,
        }}
      />
      <Tab
        label="Stats"
        icon={
          <div>
            <FeedbackIcon
              fill={theme.palette.accent.main}
              stroke={theme.palette.accent.main}
              className={classes.iconDimension}
            />
          </div>
        }
        to="/stats"
        component={Link}
        className={classes.tab}
        classes={tabRules}
        style={{
          borderTopRightRadius:
            value + getIndex(3) === 5
              ? matchesMD
                ? "40px"
                : "80px"
              : undefined,
          borderBottomRightRadius:
            value + getIndex(3) === 7
              ? matchesMD
                ? "40px"
                : "80px"
              : undefined,
        }}
      />
      <Tab
        label="HireMe"
        to="/hireme"
        icon={
          <div>
            <Hireme
              fill={theme.palette.accent.main}
              stroke={theme.palette.accent.main}
              className={classes.iconDimension}
            />
          </div>
        }
        component={Link}
        className={classes.tab}
        classes={tabRules}
        style={{
          borderTopRightRadius:
            value + getIndex(4) === 7
              ? matchesMD
                ? "40px"
                : "80px"
              : undefined,
        }}
      />
      <Tab
        label=""
        disabled
        className={classes.tab}
        classes={tabRules}
        style={{
          borderTopRightRadius:
            value + getIndex(5) === 9
              ? matchesMD
                ? "40px"
                : "80px"
              : undefined,
          maxHeight: matchesMD ? "60px" : "100px",
        }}
      />
    </Tabs>
  );

  return (
    <Fragment>
      <Grid item container xl={2} lg={2} md={2} xs={2}>
        <Grid item container className={classes.navigationWrapper}>
          {verticalTabs}
        </Grid>
      </Grid>
    </Fragment>
  );
}
// .MuiTabs-flexContainerVertical
