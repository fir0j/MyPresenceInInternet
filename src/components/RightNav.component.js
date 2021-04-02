import React from "react";
import Grid from "@material-ui/core/Grid";

export default function RightNav() {
  return (
    <React.Fragment>
      <Grid
        item
        container
        xl={1}
        lg={1}
        md={1}
        xs={1}
        style={{ border: "1px solid grey" }}
      >
        <Grid item>Right Nav</Grid>
      </Grid>
    </React.Fragment>
  );
}
