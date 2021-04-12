import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { ReactComponent as Resume } from "../assets/resume.svg";
import { ReactComponent as Hireme } from "../assets/hireme.svg";
import { ReactComponent as ProjectIcon } from "../assets/projectIcon.svg";
import { ReactComponent as FeedbackIcon } from "../assets/feedbackIcon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  flexContainer: {
    flexDirection: "row",
    "&>.MuiTab-root": {
      flexGrow: 1,
      backgroundColor: theme.palette.tabColor,
      border: `1px solid ${theme.palette.accent.main}`,
    },
    "&>.MuiTab-labelIcon": {
      paddingTop: "0px",
    },

    "&>.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      position: "relative",

      "&>.MuiTab-wrapper": {
        width: "100%",
        height: "100%",
      },
    },
    "&>.Mui-disabled": {
      backgroundColor: theme.palette.tabColor,
    },
  },
  iconDimension: { ...theme.iconDimension },
}));

export default function MobilieNav() {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Grid item container direction="row" justify="center">
        <Paper square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
            classes={{ flexContainer: classes.flexContainer }}
          >
            <Tab
              icon={
                <Resume
                  fill={theme.palette.accent.main}
                  stroke={theme.palette.accent.main}
                  className={classes.iconDimension}
                />
              }
              label="RESUME"
              to="/"
              component={Link}
              style={{
                backgroundColor: theme.tabColor,
                color: theme.palette.accent.main,
              }}
            />
            <Tab
              icon={
                <ProjectIcon
                  fill={theme.palette.accent.main}
                  stroke={theme.palette.accent.main}
                  className={classes.iconDimension}
                />
              }
              label="PROJECT"
              to="/project"
              component={Link}
              style={{
                backgroundColor: theme.tabColor,
                color: theme.palette.accent.main,
              }}
            />
            <Tab
              icon={
                <FeedbackIcon
                  fill={theme.palette.accent.main}
                  stroke={theme.palette.accent.main}
                  className={classes.iconDimension}
                />
              }
              label="FEEDBACK"
              to="/feedback"
              component={Link}
              style={{
                backgroundColor: theme.tabColor,
                color: theme.palette.accent.main,
              }}
            />
            <Tab
              icon={
                <Hireme
                  fill={theme.palette.accent.main}
                  stroke={theme.palette.accent.main}
                  className={classes.iconDimension}
                />
              }
              label="HIREME"
              to="/hireme"
              component={Link}
              style={{
                backgroundColor: theme.tabColor,
                color: theme.palette.accent.main,
              }}
            />
          </Tabs>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
