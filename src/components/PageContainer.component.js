import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const PageContainer = (props) => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      item
      container
      justify="center"
      style={{
        overflowY: "scroll",
        padding: theme.spacing(matchesXS ? 1 : 2),
      }}
      xs={matchesXS ? 12 : 10}
      sm={10}
      md={10}
      lg={10}
      xl={10}
    >
      <Grid
        item
        container
        justify="center"
        style={{ maxWidth: theme.spacing(170) }}
      >
        {props.children}
      </Grid>
    </Grid>
  );
};

export default PageContainer;
