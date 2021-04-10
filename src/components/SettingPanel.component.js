import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Settings from "@material-ui/icons/Settings";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  invisibleHandler: {
    position: "absolute",
    inset: 0,
  },
  absoluteContainer: {
    position: "absolute",
    top: "12em",
    right: 0,
    width: "70px",
    height: "50px",
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
    flexWrap: "nowrap",
  },
}));

export default function SettingPanel() {
  const theme = useTheme();
  const classes = useStyles();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [activeTool, setActiveTool] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleToolClick = (toolname) => {
    if (!isActive) {
      setIsActive(true);
      setActiveTool(toolname);
      return;
    }
    setActiveTool(toolname);
  };
  const handleOutsideClick = () => {
    setIsActive(false);
    setActiveTool("");
  };

  function Setting() {
    return (
      <Grid item container className={classes.setting}>
        <Grid item container className={classes.settingWrapper}>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            style={{
              backgroundColor: "#69F0AE",
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
                backgroundColor: "#69F0AE",
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
                backgroundColor: "#69F0AE",
                height: "100%",
                flexGrow: 1,
                overflowY: "scroll",
                // border: "1px solid red",
              }}
            >
              <Grid item>
                <Typography align="center" variant="body1">
                  Nightmode, Theme and Sound Nightmode, Theme and Sound
                  Nightmode, Theme and Sound Nightmode,Sound
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  const displayTool = (action) => {
    switch (action) {
      case "setting":
        return Setting();

      default:
        return "";
    }
  };

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
            backgroundColor: activeTool === "setting" ? null : "#69F0AE",
          }}
        >
          {activeTool === "setting" ? null : <Settings />}
          {activeTool === "setting" ? displayTool(activeTool) : ""}
        </Grid>
      </Grid>
    </Fragment>
  );
}
