import React, { Fragment, useState, useEffect } from "react";
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
import { useSpring, animated, useTransition, config } from "react-spring";
import { Button, ListItemIcon, ClickAwayListener } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fixedContainer: {
    position: "fixed",
    top: theme.spacing(26),
    right: 0,

    [theme.breakpoints.down("lg")]: {
      top: theme.spacing(20),
    },
    [theme.breakpoints.down("md")]: {
      top: theme.spacing(31),
    },
    [theme.breakpoints.down("sm")]: {
      top: 45,
    },
  },

  setting: {
    position: "absolute",
    top: 0,
    right: -191,
    width: "250px",
    height: "50px",
    cursor: "pointer",
  },

  settingWrapper: {
    color: theme.palette.primary.main,
    flexWrap: "nowrap",
    height: "inherit",
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
    backgroundColor: theme.palette.text.primary,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    "input:hover ~ &": {
      backgroundColor: theme.palette.text.primary,
    },
  },
}));

export default function SettingPanel({ setTheme }) {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = useState("cyan");
  const [showSetting, setShowSetting] = useState(false);
  const [right, setRight] = useState(0);

  // Slider component is being rendered by react-spring all the time using useSpring hook
  const slideRight = useSpring({
    position: "fixed",
    right: right,
  });

  const handleSlider = () => {
    setShowSetting((toggle) => !toggle);
    setRight((showSetting) => (!showSetting ? 191 : 0));
  };
  // const AnimatedTypography = animated(Typography);

  const handleColorChange = (event) => {
    setTheme(event.target.value);
    setValue(event.target.value);
    setShowSetting(!showSetting);
    setRight(0);
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

  const Slider = () => {
    return (
      <Grid item container className={classes.setting} onClick={handleSlider}>
        <Grid item container className={classes.settingWrapper}>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            style={{
              backgroundColor: theme.palette.secondary.main,
              height: "50px",
              width: "60px",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "50px",
            }}
          >
            <Settings style={{ width: "60px", paddingRight: "10px" }} />
          </Grid>
          <Grid item container>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              style={{
                // border: "1px dotted blue",
                backgroundColor: theme.palette.secondary.main,
                width: "100%",
                height: "50px",
              }}
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
                backgroundColor: theme.palette.secondary.main,
                height: "150px",
                flexGrow: 1,
                borderBottomLeftRadius: "10px",
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
      </Grid>
    );
  };

  return (
    <Fragment>
      <Grid container className={classes.fixedContainer}>
        <ClickAwayListener
          onClickAway={() => {
            setShowSetting((toggle) => !toggle);
            setRight(0);
          }}
        >
          <animated.span style={slideRight}>
            <Slider />
          </animated.span>
        </ClickAwayListener>
      </Grid>
    </Fragment>
  );
}
