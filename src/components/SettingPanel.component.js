import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Settings from "@material-ui/icons/Settings";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  invisibleHandler: {
    position: "absolute",
    inset: 0,
  },
  absoluteContainer: {
    position: "absolute",
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
  },

  setting: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "300px",
    height: "300px",
    cursor: "pointer",
    // overflowY: "scroll",
  },
  settingWrapper: {
    color: theme.palette.primary.main,
    flexWrap: "nowrap",
  },
}));

export default function SettingPanel({ setTheme }) {
  const theme = useTheme();
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  const [isActive, setIsActive] = useState(false);
  const handleChange = (hue, event) => {
    setChecked(event.target.checked);
    setTheme(hue);
  };

  const handleToolClick = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  const handleOutsideClick = () => {
    setIsActive(false);
  };

  function SettingBoard({ setTheme }) {
    return (
      <Grid item container className={classes.setting}>
        <Grid item container className={classes.settingWrapper}>
          <Grid
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
            >
              <Typography variant="h6">Settings</Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
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
                {/* <Checkbox
                  checked={checked}
                  onChange={() => handleChange("dark")}
                  inputProps={{ "aria-label": "primary checkbox" }}
                /> */}
                <Checkbox
                  checked={checked}
                  onChange={(event) => handleChange("light", event)}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <Fragment>
      {isActive && (
        <Grid
          item
          onClick={handleOutsideClick}
          className={classes.invisibleHandler}
        />
      )}
      <Grid item className={classes.absoluteContainer}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          onClick={() => handleToolClick("setting")}
          className={classes.settingContainer}
          style={{
            backgroundColor: theme.palette.accent.main,
          }}
        >
          {/* hiding setting icon when setting tool is active */}
          {!isActive ? (
            <div style={{ color: theme.palette.primary.main }}>
              <Settings />
            </div>
          ) : (
            ""
          )}
          {isActive ? <SettingBoard setTheme={setTheme} /> : ""}
        </Grid>
      </Grid>
    </Fragment>
  );
}
