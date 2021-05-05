import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Settings from "@material-ui/icons/Settings";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

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
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("cyan");

  const handleChange = (event) => {
    setTheme(event.target.value);
    setValue(event.target.value);
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
            onClick={handleOutsideClick}
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
              onClick={handleOutsideClick}
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
                  onChange={handleChange}
                >
                  <FormControlLabel
                    control={<Radio />}
                    value="cyan"
                    label="Cyan"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    value="gold"
                    label="Gold"
                  />
                </RadioGroup>
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
