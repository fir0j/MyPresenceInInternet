import React, { Fragment } from "react";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function ShapeDivider() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Fragment>
      <Grid item container>
        <Paper
          elevation={5}
          style={{
            position: "relative",
            width: "100%",
            height: "auto",
            backgroundColor: theme.palette.primary.main,
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            marginBottom: theme.spacing(matchesXS ? 20 : 10),
          }}
        >
          work in progress
        </Paper>
      </Grid>
    </Fragment>
  );
}
