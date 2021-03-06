import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  circleDeterminate: {
    stroke: theme.palette.secondary.main,
  },
}));

export default function CircularProgressWithLabel(props) {
  const classes = useStyles();
  const theme = useTheme();

  function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          classes={{
            circleDeterminate: classes.circleDeterminate,
          }}
          {...props}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="caption"
            style={{ color: theme.palette.text.tertiary }}
            component="div"
          >
            {props.label}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Fragment>
      <CircularProgressWithLabel {...props} />
    </Fragment>
  );
}
