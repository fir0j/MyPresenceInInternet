import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import dp from "../assets/founder3.png";

const useStyles = makeStyles((theme) => ({
  container: {
    // flexGrow: 1,
    // flexBasis: "25%",
    // border: "1px solid lightcyan",
    position: "relative",
    flexGrow: 1,
    flexWrap: "nowrap",
  },
  name: {
    border: `5px solid ${theme.palette.accent.main}`,
    borderTopRightRadius: "15em",
    borderBottomRightRadius: "15em",
    flexWrap: "nowrap",
    maxHeight: "350px",
  },
  dp: {
    width: "70%",
    minWidth: "170px",
    height: "auto",
    overflow: "hidden",
    margin: "15px",
  },

  contact: {
    border: `1px solid ${theme.palette.accent.main}`,
  },
  education: {
    border: `1px solid ${theme.palette.accent.main}`,
  },
  language: {
    border: `1px solid ${theme.palette.accent.main}`,
  },
  skills: {
    border: `1px solid ${theme.palette.accent.main}`,
  },
  passion: {
    border: `1px solid ${theme.palette.accent.main}`,
  },
}));
export default function Resume() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
  return (
    <Fragment>
      <Grid
        item
        container
        direction="column"
        justify="space-around"
        style={{
          height: "100%",
          paddingTop: "1em",
          paddingBottom: "10px",
          paddingLeft: "1em",
        }}
      >
        <Grid
          item
          container
          justify="space-between"
          alignItems="center"
          className={classes.container}
          style={{ width: "auto", height: "auto" }}
        >
          <Grid
            item
            container
            xl={8}
            lg={8}
            md={8}
            sm={8}
            className={classes.name}
          >
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="flex-between"
            >
              <Grid
                item
                style={{
                  alignSelf: "center",
                }}
              >
                <Typography variant="h4">NAME SURNAME</Typography>
                <Typography variant="h6">GRAPHIC DESIGNER</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="flex-end"
              alignItems="center"
              xl={6}
              lg={6}
              md={6}
              sm={6}
              // style={{ border: "1px solid white" }}
            >
              <Avatar
                alt="Firoj Siddiki Picture"
                src={dp}
                className={classes.dp}
              />
            </Grid>
          </Grid>
          {/* hello section */}
          <Grid
            item
            container
            xl={4}
            lg={4}
            md={4}
            sm={4}
            direction="column"
            justify="center"
            style={{
              height: "100%",
              maxHeight: "350px",
              flexWrap: "nowrap",
              // border: `1px solid ${theme.palette.accent.main}`,
            }}
          >
            <Grid
              item
              container
              direction="column"
              justify="flex-end"
              style={{
                flexBasis: matchesLG ? (matchesMD ? "65%" : "75%") : "90%",
                flexWrap: "nowrap",
                // border: `1px solid red`,
              }}
            >
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={4}
                container
                style={{
                  // border: `1px solid ${theme.palette.accent.main}`,
                  flexGrow: 1,
                }}
              />
              <Grid
                item
                xl={8}
                lg={8}
                md={8}
                sm={8}
                container
                direction="column"
                justify="flex-end"
                style={{
                  flexGrow: 1,
                  flexWrap: "nowrap",
                  // border: `1px solid ${theme.palette.accent.main}`,
                }}
              >
                <Grid
                  item
                  container
                  style={{
                    position: "relative",
                    border: "1px solid grey",
                    flexGrow: 1,
                    // width: matchesXL ? "300px" : "200px",
                    borderBottom: "none",
                    borderLeft: "none",
                    minWidth: "120px",
                  }}
                >
                  <WallpaperIcon
                    style={{
                      width: matchesLG ? (matchesMD ? "60px" : "75px") : "85px",
                      height: "auto",
                      color: "grey",
                      backgroundColor: `${theme.palette.primary.main}`,
                      position: "absolute",
                      top: "-40px",
                      right: "-40px",
                    }}
                  />
                </Grid>

                <Grid
                  item
                  style={{
                    position: "relative",
                    border: "1px solid grey",
                    borderRight: "none",
                    flexGrow: 1,
                    minWidth: "80px",
                    marginLeft: matchesSM ? "30px" : "50px",
                  }}
                >
                  <Grid
                    item
                    style={{
                      position: "absolute",
                      bottom: "calc(-3em / 2)",
                      right: "-35px",
                      color: "lightblue",
                      backgroundColor: `${theme.palette.primary.main}`,
                      // border: "1px solid red",
                    }}
                  >
                    <Typography
                      align="center"
                      style={{
                        marginLeft: "1%",
                        maxHeight: "70px",
                        fontSize: "2em",
                        margin: 0,
                        paddingLeft: "0.1em",
                      }}
                    >
                      Hello!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* end of name container */}
            </Grid>
          </Grid>
        </Grid>
        {/* contact section */}
        <Grid item container className={classes.container}>
          <Grid item container className={classes.contact}>
            contact
          </Grid>
          <Grid item container>
            col 2
          </Grid>
        </Grid>
        <Grid item container className={classes.container}>
          <Grid item container>
            col 1
          </Grid>
          <Grid item container className={classes.education}>
            Education
          </Grid>
        </Grid>
        <Grid item container className={classes.container}>
          <Grid
            container
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              flexWrap: "nowrap",
              marginTop: "-50px",
            }}
          >
            <Grid item container className={classes.language}>
              Language
            </Grid>
            <Grid
              item
              container
              className={classes.skills}
              style={{ marginTop: "2em" }}
            >
              col 2
            </Grid>
            <Grid
              item
              container
              className={classes.passion}
              style={{ marginTop: "4em" }}
            >
              Passion
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
