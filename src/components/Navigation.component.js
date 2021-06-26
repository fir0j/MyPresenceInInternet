import React, {
  Fragment,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  forwardRef,
} from "react";
import { Grid, Paper } from "@material-ui/core";
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
import { animated, useSpring } from "react-spring";

const useStyles = makeStyles((theme) => ({
  tabsContainer: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  tab: {
    width: "100%",
    minWidth: "85px",
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
    // width: theme.spacing(0.5),
    opacity: 0.9,
  },

  tabRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    borderColor: theme.palette.secondary.main,
    "&$tabSelected": {
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
      borderRight: "none",
      fontWeight: "bold",
    },
    "&>.MuiTab-labelIcon": {
      paddingTop: theme.spacing(0.5),
    },

    "&>.Mui-selected": {
      position: "relative",

      // "&>.MuiTab-wrapper": {
      //   width: "100%",
      //   height: "100%",
      // },
    },
  },
}));

const Navigation = forwardRef((props, overflowRef) => {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [scrolledUp, setScrolledUp] = useState(false);
  const fadeStyles = useSpring({
    from: { opacity: 1 },
    opacity: matchesSM && scrolledUp ? 0 : 1,
    display: matchesSM && scrolledUp ? "none" : "block",
    // visibility: matchesSM && scrolledUp ? "hidden" : "visible",
  });

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

  // SOLUTION 1: without using react synthetic onScroll EVENT LISTENER
  // Syntax: useScrollPosition(effect,deps, element, wait)
  function useRelativeScrollPosition(effect, deps = null, ref, wait = null) {
    // the function will pass previous-scroll-Positon and current-scroll-position with respect to
    // an overflowed div instead of window or document.body like useScrollPostion package.
    // storing in ref because we don't want to trigger re-render if value changes.
    const curPos = useRef(null);
    const prevPos = useRef(null);
    const throttleTimeout = useRef(null);

    const getScrollPositionCB = () => {
      const scrollPosition = ref.current.scrollTop;
      prevPos.current = curPos.current;
      curPos.current = scrollPosition;

      effect(prevPos.current, curPos.current);
      throttleTimeout.current = null;
    };

    useEffect(() => {
      function handleScroll() {
        if (wait) {
          if (throttleTimeout.current === null) {
            throttleTimeout.current = setTimeout(getScrollPositionCB, wait);
          }
        } else {
          getScrollPositionCB();
        }
      }

      // Improving scrolling performance with passive listeners
      // setting {passive:true} if support else false which is default.
      let passiveIfSupported = false;
      try {
        window.addEventListener(
          "test",
          null,
          Object.defineProperty({}, "passive", {
            get: function () {
              passiveIfSupported = { passive: true };
            },
          })
        );
      } catch (err) {
        console.log(
          "info: passive listener is not supported by this browser. Scroll performance could not be optimum."
        );
      }

      if (ref.current) {
        ref.current.addEventListener(
          "scroll",
          handleScroll,
          passiveIfSupported
        );
      }

      return () => {
        // console.log("cleaning up", ref.current);
        ref.current.removeEventListener("scroll", handleScroll);
        clearTimeout(throttleTimeout.current);
      };
    }, deps);
  }

  useRelativeScrollPosition(
    // adding event listener whenvever scrolledUp changes to get updated value of scrolledUp
    (prevPos, curPos) => {
      const scrollbarIsDown = curPos > prevPos;
      if (scrollbarIsDown !== scrolledUp) {
        // console.log("scrolling direction has reversed");
        setScrolledUp(scrollbarIsDown);
      }
    },
    [scrolledUp],
    overflowRef
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabRules = {
    root: classes.tabRoot,
    selected: classes.tabSelected,
    disabled: classes.tabDisabled,
    wrapper: classes.tabWrapper,
    labelIcon: classes.tabLabelIcon,
  };

  const tabs = (
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
      />

      {!matchesSM && (
        <Tab label="" disabled className={classes.tab} classes={tabRules} />
      )}
    </Tabs>
  );

  const AnimatedGrid = animated(Grid);
  return (
    <Fragment>
      {matchesSM && scrolledUp ? null : (
        <AnimatedGrid
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
            zIndex: matchesSM ? 1 : "",
            ...fadeStyles,
            // backgroundColor: "blue", // it changes tabs original color and provides beautiful transparency
            // backgroundColor: "grey",
          }}
        >
          <Paper
            elevation={1}
            style={{
              // backgroundColor: "transparent", // it changes tabs original color and provides beautiful transparency
              backgroundColor: theme.palette.background.microPaper,
              width: "100%",
              height: matchesSM ? "inherit" : "100vh",
            }}
          >
            {tabs}
          </Paper>
        </AnimatedGrid>
      )}
    </Fragment>
  );
});

export default Navigation;
