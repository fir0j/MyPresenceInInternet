import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  flexContainer: {
    flexDirection: "row",
  },
});

export default function MobilieNav() {
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
            <Tab icon={<PhoneIcon />} label="RESUME" to="/" component={Link} />
            <Tab
              icon={<PersonPinIcon />}
              label="PROJECT"
              to="/project"
              component={Link}
            />
            <Tab
              icon={<PersonPinIcon />}
              label="BLOG"
              to="/blog"
              component={Link}
            />
            <Tab
              icon={<FavoriteIcon />}
              label="HIREME"
              to="/hireme"
              component={Link}
            />

            <Tab
              icon={<PersonPinIcon />}
              label="PROFILE"
              to="/profile"
              component={Link}
            />
          </Tabs>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
