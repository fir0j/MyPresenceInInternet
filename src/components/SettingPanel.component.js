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
import { useSpring, animated, useTransition, config } from "react-spring";

const useStyles = makeStyles((theme) => ({
  fixedContainer: {
    position: "fixed",
    top: theme.spacing(26),
    right: 0,
    maxWidth: 250,

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
  const [value, setValue] = useState("gold");
  const [openListener, setOpenListener] = useState(false);
  const AnimatedGrid = animated(Grid);

  // using Up-front interpolation
  const styles = useSpring({
    right: openListener ? 191 : 0,
  });

  // using Interoplation
  // SYNTAX IS animatedPropertyValue: condition ? after state : before state
  // const { right } = useSpring({
  //   right: openListener ? 191 : 0,
  // });

  const CustomClickAwayListner = () =>
    openListener && (
      <div
        onClick={handleClickAway}
        style={{
          position: "fixed",
          // inset: 0, // is not compatible with ios mobile browser
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "transparent",
        }}
      />
    );

  const handleClickAway = () => {
    if (openListener !== false) setOpenListener(false);
  };

  const handleColorChange = (event) => {
    setTheme(event.target.value);
    setValue(event.target.value);
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
      <AnimatedGrid item container className={classes.setting}>
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
      </AnimatedGrid>
    );
  };

  return (
    <Fragment>
      <Grid container className={classes.fixedContainer}>
        <CustomClickAwayListner />

        {/* USING style PROP */}
        <animated.span
          style={{ position: "fixed", ...styles }}
          onClick={() => setOpenListener((jpt) => !jpt)}
        >
          <Slider />
        </animated.span>
        {/* USING VIEW INTERPOLATION */}
        {/* <animated.span
          style={{ position: "fixed", right: right.to((v) => v) }}
          onClick={() => setOpenListener((jpt) => !jpt)}
        >
          <Slider />
        </animated.span> */}
      </Grid>
    </Fragment>
  );
}
