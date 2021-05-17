import React, { Fragment, useState } from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Settings from "@material-ui/icons/Settings";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Slide from "@material-ui/core/Slide";
import { useSpring, animated, useTransition } from "react-spring";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  invisibleHandler: {
    position: "fixed",
    inset: 0,
  },
  fixedContainer: {
    position: "fixed",
    right: 0,
    top: theme.spacing(26),
    [theme.breakpoints.down("lg")]: {
      top: theme.spacing(20),
    },
    [theme.breakpoints.down("md")]: {
      top: theme.spacing(18),
    },
    [theme.breakpoints.down("md")]: {
      top: theme.spacing(31),
    },
    [theme.breakpoints.down("xs")]: {
      top: 1,
    },
    width: theme.spacing(8),
    height: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(6),
      height: theme.spacing(5),
    },
  },

  settingContainer: {
    position: "relative",
    height: "100%",
    cursor: "pointer",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "50px",
    backgroundColor: theme.palette.accent.main,
  },

  setting: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "250px",
    height: "250px",
    cursor: "pointer",
    // overflowY: "scroll",
  },
  settingWrapper: {
    color: theme.palette.primary.main,
    flexWrap: "nowrap",
  },

  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    width: 32,
    height: 32,
    backgroundColor: "green",
    borderRadius: 5,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",

    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: theme.palette.accent.main,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    "input:hover ~ &": {
      backgroundColor: theme.palette.accent.main,
    },
  },
}));

export default function SettingPanel({ setTheme }) {
  const theme = useTheme();
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("cyan");
  const transition = useTransition(isActive, {
    from: { x: 500, y: -100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 500, y: 0, opacity: 0 },
    delay: 1000,
  });

  // const AnimatedTypography = animated(Typography);
  const AnimatedGrid = animated(Grid);

  const handleColorChange = (event) => {
    setTheme(event.target.value);
    setValue(event.target.value);
    setIsActive(false);
  };

  // Inspired by blueprintjs
  function StyledRadio(props) {
    const classes = useStyles();

    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        // icon={<span className={classes.icon} />}
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        {...props}
      />
    );
  }

  const SettingBoard = () => {
    // const slideLeft = useSpring({
    //   from: {
    //     transform: "TranslateX(186px)",
    //   },
    //   to: {
    //     transform: "TranslateX(0)",
    //   },
    // });

    return (
      <AnimatedGrid
        item
        container
        // style={slideLeft}
        className={classes.setting}
      >
        <Grid item container className={classes.settingWrapper}>
          <Grid
            onClick={() => setIsActive(false)}
            item
            container
            justify="center"
            alignItems="center"
            style={{
              backgroundColor: theme.palette.accent.main,
              maxHeight: "50px",
              maxWidth: "50px",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "50px",
            }}
          >
            <Settings style={{ width: "70px" }} />
          </Grid>
          <Grid item container style={{ flexBasis: "100%" }}>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              style={{
                // border: "1px dotted blue",
                backgroundColor: theme.palette.accent.main,
                width: "100%",
                height: "50px",
              }}
              onClick={() => setIsActive(false)}
            >
              <Typography variant="h6">Settings</Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
              style={{
                backgroundColor: theme.palette.accent.main,
                height: "100%",
                flexGrow: 1,
              }}
            >
              <Grid item>
                <Typography variant="h6">Accent Color</Typography>
              </Grid>
              <Grid item>
                <RadioGroup
                  row
                  aria-label="palette"
                  name="palette"
                  value={value}
                  onChange={handleColorChange}
                >
                  <FormControlLabel
                    control={
                      <StyledRadio
                        icon={
                          <span
                            className={classes.icon}
                            style={{ backgroundColor: "#4ae4b8" }}
                          />
                        }
                      />
                    }
                    value="cyan"
                    label=""
                  />
                  <FormControlLabel
                    control={
                      <StyledRadio
                        icon={
                          <span
                            className={classes.icon}
                            style={{ backgroundColor: "#B29155" }}
                          />
                        }
                      />
                    }
                    value="gold"
                    label=""
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AnimatedGrid>
    );
  };

  return (
    <Fragment>
      {isActive && (
        <Grid
          item
          onClick={() => setIsActive(false)}
          className={classes.invisibleHandler}
          // style={{ backgroundColor: "lightsteelblue" }}
        />
      )}

      <Grid item className={classes.fixedContainer}>
        {/* <Slide
          direction="left"
          in={!isActive}
          timeout={700}
          mountOnEnter
          unmountOnExit
        > */}
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          onClick={() => setIsActive(true)}
          className={classes.settingContainer}
        >
          <Settings style={{ color: theme.palette.primary.main }} />
        </Grid>
        {/* </Slide> */}

        {/* {isActive && <SettingBoard />} */}
        {transition((style, item) => {
          console.log("item is", item);
          if (item) {
            return (
              <animated.span style={style}>
                <SettingBoard />
              </animated.span>
            );
          } else {
            return "";
          }
        })}
      </Grid>
    </Fragment>
  );
}
