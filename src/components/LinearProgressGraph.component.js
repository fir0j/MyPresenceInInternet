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
          backgroundColor: theme.palette.primary.light,
          borderRadius: theme.spacing(1),
          marginTop: theme.spacing(1),
        }}
      >
        <Grid
          item
          style={{
            borderRadius: theme.spacing(1),
            width: progressPercentage,
            height: showPercentage === true ? "auto" : height,
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          {showPercentage === true && (
            <Typography variant="body1">{progressPercentage}</Typography>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
}
