import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Settings from "@material-ui/icons/Settings";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  invisibleHandler: {
    position: "absolute",
    inset: 0,
  },
  absoluteContainer: {
    position: "absolute",
    top: theme.spacing(28),
    [theme.breakpoints.down("lg")]: {
      top: theme.spacing(23),
    },
    [theme.breakpoints.down("md")]: {
      top: theme.spacing(17),
    },
    [theme.breakpoints.down("sm")]: {
      top: theme.spacing(15),
    },
    right: 0,
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
    color: theme.palette.accent.main,
    flexWrap: "nowrap",
  },
}));

export default function SettingPanel({ isNightmode, setNightmode }) {
  const theme = useTheme();
  const classes = useStyles();

  const [isActive, setIsActive] = useState(false);

  const handleToolClick = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  const handleOutsideClick = () => {
    setIsActive(false);
  };

  function SettingBoard({ isNightmode, setNightmode }) {
    return (
      <Grid item container className={classes.setting}>
        <Grid item container className={classes.settingWrapper}>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            style={{
              backgroundColor: theme.palette.tabColor,
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
                backgroundColor: theme.palette.tabColor,
                width: "100%",
                height: "50px",
              }}
            >
              <Typography variant="h5">Settings</Typography>
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              style={{
                backgroundColor: theme.palette.tabColor,
                height: "100%",
                flexGrow: 1,
                overflowY: "scroll",
                // border: "1px solid red",
              }}
            >
              <Grid item>Nightmode</Grid>
              <Grid item>
                <Switch
                  checked={isNightmode}
                  onChange={() => setNightmode(!isNightmode)}
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
            backgroundColor: theme.palette.tabColor,
          }}
        >
          {/* hiding setting icon when setting tool is active */}
          {!isActive ? (
            <div style={{ color: theme.palette.accent.main }}>
              <Settings />
            </div>
          ) : (
            ""
          )}
          {isActive ? (
            <SettingBoard
              isNightmode={isNightmode}
              setNightmode={setNightmode}
            />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
}
