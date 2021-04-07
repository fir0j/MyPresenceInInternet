import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  RightNavWrapper: {
    border: "1px solid black",
    flexBasis: "100%",
    flexWrap: "nowrap",
  },

  widgetContainer: {
    flexGrow: 1,
    position: "relative",
    backgroundColor: "lightblue",
    cursor: "pointer",
    marginTop: "1px",
    marginBottom: "1px",
  },

  invisibleHandler: {
    position: "absolute",
    inset: 0,
  },

  // adjust this settings for desktop view aswell
  mobileWidget: {
    position: "absolute",
    top: "0",
    bottom: "0",
    marginTop: "-5em",
    height: "5em",
    cursor: "pointer",
    width: "100%",
    backgroundColor: "green",
    border: "1px solid red",
  },
  desktopWidget: {
    position: "absolute",
    top: "0",
    left: "0",
    marginLeft: "-5em",
    width: "5em",
    height: "100%",
    cursor: "pointer",
    backgroundColor: "green",
    border: "1px solid red",
  },
}));

export default function RightNav() {
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

  function NightMode() {
    return (
      <Grid
        item
        className={matchesXS ? classes.mobileWidget : classes.desktopWidget}
      >
        Night Mode
      </Grid>
    );
  }
  function Theme() {
    return (
      <Grid
        item
        className={matchesXS ? classes.mobileWidget : classes.desktopWidget}
      >
        Theme Mode
      </Grid>
    );
  }

  function Music() {
    return (
      <Grid
        item
        className={matchesXS ? classes.mobileWidget : classes.desktopWidget}
      >
        Music Mode
      </Grid>
    );
  }

  function Review() {
    return (
      <Grid
        item
        className={matchesXS ? classes.mobileWidget : classes.desktopWidget}
      >
        Review
      </Grid>
    );
  }
  function SocialLink() {
    return (
      <Grid
        item
        className={matchesXS ? classes.mobileWidget : classes.desktopWidget}
      >
        Social Link
      </Grid>
    );
  }

  const displayTool = (action) => {
    switch (action) {
      case "nightmode":
        return NightMode();
      case "theme":
        return Theme();
      case "music":
        return Music();
      case "review":
        return Review();
      case "sociallink":
        return SocialLink();
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
      <Grid
        item
        container
        direction={matchesXS ? "row" : "column"}
        alignItems="center"
        xl={matchesXS ? undefined : 1}
        lg={matchesXS ? undefined : 1}
        md={matchesXS ? undefined : 1}
        xs={matchesXS ? undefined : 1}
        className={classes.RightNavWrapper}
      >
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          onClick={() => handleToolClick("nightmode")}
          className={classes.widgetContainer}
        >
          Night Mode
          {activeTool === "nightmode" ? displayTool(activeTool) : ""}
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          onClick={() => handleToolClick("theme")}
          className={classes.widgetContainer}
        >
          Theme
          {activeTool === "theme" ? displayTool(activeTool) : ""}
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          onClick={() => handleToolClick("music")}
          className={classes.widgetContainer}
        >
          Music
          {activeTool === "music" ? displayTool(activeTool) : ""}
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          onClick={() => handleToolClick("review")}
          className={classes.widgetContainer}
        >
          Review
          {activeTool === "review" ? displayTool(activeTool) : ""}
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          onClick={() => handleToolClick("sociallink")}
          className={classes.widgetContainer}
        >
          Social Link
          {activeTool === "sociallink" ? displayTool(activeTool) : ""}
        </Grid>
      </Grid>
    </Fragment>
  );
}
