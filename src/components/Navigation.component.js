import React, { Fragment, useState, useEffect } from "react";
import { Grid, Hidden, Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Resume } from "../assets/resume.svg";
import { ReactComponent as Hireme } from "../assets/hireme.svg";
import { ReactComponent as ProjectIcon } from "../assets/projectIcon.svg";
import { ReactComponent as FeedbackIcon } from "../assets/laptop2.svg";

const useStyles = makeStyles((theme) => ({
  tabsContainer: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      height: theme.spacing(11),
    },
    maxWidth: "100%",
    maxHeight: "100%",
    // border: "1px solid red",
  },
  tab: {
    width: "100%",
    minWidth: "85px",
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
    [theme.breakpoints.down("xs")]: {
      width: "40px",
      height: "40px",
    },
  },

  // when tabs are vertical

  // CSS $Rule Name
  tabsFlexContainerVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flexBasis: "100%",
    width: "100%",
    height: "100%",
    color: theme.palette.text.primary,
  },

  tabsIndicator: {
    // backgroundColor: "transparent",
    width: theme.spacing(0.5),
    opacity: 0.75,
  },

  tabRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    borderColor: theme.palette.secondary.main,
    // border: `1px solid ${theme.palette.secondary.main}`,
    "&$tabSelected": {
      border: "none",
      // backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down("sm")]: {
        // backgroundColor: "transparent",
      },
    },
    // "&$tabDisabled": {
    //   // backgroundColor: "red",
    // },

    // "&:hover": {
    //   // since tab's :hover, :focus Pseudo-class is not controlled by Mui API, we can apply as normal css or SASS
    //   // backgroundColor: "red",
    // },
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

  // when are horizontal
  flexContainer: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.messageBox,
    "&>.MuiTab-root": {
      width: "auto",
      flexGrow: 1,
      color: theme.palette.text.primary,
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8rem",
      },
      // border: `1px solid ${theme.palette.primary.light}`,
      borderRight: "none",
      fontWeight: "bold",
    },
    "&>.MuiTab-labelIcon": {
      paddingTop: theme.spacing(0.5),
    },

    "&>.Mui-selected": {
      position: "relative",
      // [theme.breakpoints.down("sm")]: {
      //   color: theme.palette.primary.main,
      // },

      // "&>.MuiTab-wrapper": {
      //   width: "100%",
      //   height: "100%",
      // },
    },
  },
}));

export default function Navigation() {
  const theme = useTheme();
  const classes = useStyles();

  const [value, setValue] = useState(1);
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        matchesSM ? setValue(0) : setValue(1);
        break;
      case "/project":
        matchesSM ? setValue(1) : setValue(2);
        break;
      case "/stats":
        matchesSM ? setValue(2) : setValue(3);
        break;
      case "/hireme":
        matchesSM ? setValue(3) : setValue(4);
        break;
      default:
        setValue(0);
        break;
    }
  }, [matchesSM]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getIndex = (index) => index;

  const tabRules = {
    root: classes.tabRoot,
    selected: classes.tabSelected,
    disabled: classes.tabDisabled,
    wrapper: classes.tabWrapper,
    labelIcon: classes.tabLabelIcon,
  };

  const verticalTabs = (
    <Tabs
      orientation={matchesSM ? "horizontal" : "vertical"}
      value={value}
      onChange={handleChange}
      aria-label={matchesSM ? "horizontal tabs" : "Vertical tabs"}
      classes={{
        flexContainer: matchesSM && classes.flexContainer,
        flexContainerVertical: !matchesSM && classes.tabsFlexContainerVertical,
        indicator: classes.tabsIndicator,
      }}
      className={classes.tabsContainer}
    >
      {!matchesSM && (
        <Tab
          label=""
          disabled
          icon={
            <div>
              <Logo
                fill={theme.palette.secondary.main}
                stroke={theme.palette.secondary.main}
                className={classes.iconDimension}
              />
            </div>
          }
          className={classes.tab}
          classes={tabRules}
          // style={{
          //   borderBottomRightRadius:
          //     value - getIndex(0) === 1
          //       ? matchesMD
          //         ? "40px"
          //         : "80px"
          //       : undefined,
          // }}
        />
      )}

      <Tab
        label="Resume"
        icon={
          <div>
            <Resume
              fill={theme.palette.secondary.main}
              stroke={theme.palette.secondary.main}
              className={classes.iconDimension}
            />
          </div>
        }
        to="/"
        component={Link}
        className={classes.tab}
        classes={tabRules}
        // style={{
        //   borderBottomRightRadius:
        //     value - getIndex(1) === 1
        //       ? matchesMD
        //         ? matchesSM
        //           ? undefined
        //           : "40px"
        //         : "80px"
        //       : undefined,
        // }}
      />
      <Tab
        label="Project"
        icon={
          <div>
            <ProjectIcon
              fill={theme.palette.secondary.main}
              stroke={theme.palette.secondary.main}
              className={classes.iconDimension}
            />
          </div>
        }
        to="/project"
        component={Link}
        className={classes.tab}
        classes={tabRules}
        // style={{
        //   borderTopRightRadius:
        //     value - getIndex(2) === -1
        //       ? matchesMD
        //         ? matchesSM
        //           ? undefined
        //           : "40px"
        //         : "80px"
        //       : undefined,
        //   borderBottomRightRadius:
        //     value - getIndex(2) === 1
        //       ? matchesMD
        //         ? matchesSM
        //           ? undefined
        //           : "40px"
        //         : "80px"
        //       : undefined,
        // }}
      />
      <Tab
        label="Stats"
        icon={
          <div>
            <FeedbackIcon
              fill={theme.palette.secondary.main}
              stroke={theme.palette.secondary.main}
              className={classes.iconDimension}
            />
          </div>
        }
        to="/stats"
        component={Link}
        className={classes.tab}
        classes={tabRules}
        // style={{
        //   borderTopRightRadius:
        //     value + getIndex(3) === 5
        //       ? matchesMD
        //         ? matchesSM
        //           ? undefined
        //           : "40px"
        //         : "80px"
        //       : "",
        //   borderBottomRightRadius:
        //     value + getIndex(3) === 7
        //       ? matchesMD
        //         ? matchesSM
        //           ? ""
        //           : "40px"
        //         : "80px"
        //       : undefined,
        // }}
      />
      <Tab
        label="HireMe"
        to="/hireme"
        icon={
          <div>
            <Hireme
              fill={theme.palette.secondary.main}
              stroke={theme.palette.secondary.main}
              className={classes.iconDimension}
            />
          </div>
        }
        component={Link}
        className={classes.tab}
        classes={tabRules}
        // style={{
        //   borderTopRightRadius:
        //     value + getIndex(4) === 7
        //       ? matchesMD
        //         ? matchesSM
        //           ? undefined
        //           : "40px"
        //         : "80px"
        //       : undefined,
        // }}
      />

      {!matchesSM && (
        <Tab
          label=""
          disabled
          className={classes.tab}
          classes={tabRules}
          // style={{
          //   borderTopRightRadius:
          //     value + getIndex(5) === 9
          //       ? matchesMD
          //         ? matchesXS
          //           ? undefined
          //           : "40px"
          //         : "80px"
          //       : undefined,
          //   maxHeight: matchesMD ? "60px" : "100px",
          // }}
        />
      )}
    </Tabs>
  );

  return (
    <Fragment>
      <Grid
        item
        container
        xs={2}
        sm={2}
        md={2}
        lg={2}
        xl={2}
        style={{
          position: matchesSM ? "fixed" : "relative",
          bottom: matchesSM ? 0 : "",
          maxWidth: matchesSM ? "100%" : "310px",
          height: matchesSM
            ? matchesXS
              ? theme.spacing(10.7)
              : theme.spacing(12.5)
            : undefined,
          zIndex: matchesSM ? 1 : "",
          // border: "1px solid red",
        }}
      >
        <Paper
          elevation={1}
          style={{
            width: "100%",
            height: matchesSM ? "inherit" : "100vh",
            maxHeight: matchesSM
              ? matchesXS
                ? theme.spacing(10.8)
                : theme.spacing(12.6)
              : "100vh",
            backgroundColor: "transparent",
          }}
        >
          {verticalTabs}
        </Paper>
      </Grid>
    </Fragment>
  );
}
