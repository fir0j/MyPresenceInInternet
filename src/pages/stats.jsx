import React, { Fragment } from "react";
import PageContainer from "../components/PageContainer.component";
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

  return <PageContainer>work in progress</PageContainer>;
}
