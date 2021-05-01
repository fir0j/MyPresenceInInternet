import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({}));

export default function LinearProgressGraph({
  progressPercentage,
  height,
  showPercentage,
}) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Fragment>
      <Grid
        item
        container
        style={{
          backgroundColor: theme.palette.common.black,
          borderRadius: theme.spacing(1),
        }}
      >
        <Grid
          item
          style={{
            borderRadius: theme.spacing(1),
            width: progressPercentage,
            height: showPercentage === true ? "auto" : height,
            backgroundColor: theme.palette.accent.main,
          }}
        >
          {showPercentage === true && (
            <Typography variant="caption1">{progressPercentage}</Typography>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
}
