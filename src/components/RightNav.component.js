import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  RightNavWrapper: {
    // border: "1px solid black",
    flexBasis: "100%",
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

  widget: {
    position: "absolute",
    top: "0",
    left: "0",
    marginLeft: "-5em",
    width: "5em",
    height: "100%",
    cursor: "pointer",
    backgroundColor: "green",
  },
}));

export default function RightNav() {
  const classes = useStyles();
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
      <Grid item className={classes.widget}>
        Night Mode
      </Grid>
    );
  }
  function Theme() {
    return (
      <Grid item className={classes.widget}>
        Theme Mode
      </Grid>
    );
  }

  function Music() {
    return (
      <Grid item className={classes.widget}>
        Music Mode
      </Grid>
    );
  }

  function Review() {
    return (
      <Grid item className={classes.widget}>
        Review
      </Grid>
    );
  }
  function SocialLink() {
    return (
      <Grid item className={classes.widget}>
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
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        xl={1}
        lg={1}
        md={1}
        xs={1}
        className={classes.RightNavWrapper}
      >
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
