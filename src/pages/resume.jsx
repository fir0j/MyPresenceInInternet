import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import dp from "../assets/founder3.png";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import { ReactComponent as Education } from "../assets/education.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    flexGrow: 1,
    flexWrap: "nowrap",
  },
  name: {
    border: `5px solid ${theme.palette.accent.main}`,
    borderTopRightRadius: "15em",
    borderBottomRightRadius: "15em",
    flexWrap: "nowrap",
    maxHeight: theme.spacing(44),
  },
  dp: {
    width: "70%",
    minWidth: theme.spacing(21),
    height: "auto",
    overflow: "hidden",
    margin: theme.spacing(2),
  },

  contact: {
    // border: `1px solid ${theme.palette.accent.main}`,
    flexWrap: "nowrap",
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  contactItem: {
    // border: "1px solid blue",
    alignItems: "center",
    "&>*": {
      paddingRight: theme.spacing(1),
    },
  },
  education: {
    // border: `1px solid ${theme.palette.accent.main}`,
  },
  language: {
    // border: `1px solid ${theme.palette.accent.main}`,
  },
  skills: {
    // border: `1px solid ${theme.palette.accent.main}`,
  },
  passion: {
    // border: `1px solid ${theme.palette.accent.main}`,
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
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
          paddingLeft: matchesMD ? theme.spacing(2) : theme.spacing(8),
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
                <Typography variant="h3">NAME SURNAME</Typography>
                <Typography variant="h6" style={{ letterSpacing: "0.3rem" }}>
                  WEB ENGINEER
                </Typography>
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
                  width: "100%",
                  maxWidth: "100%",
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
                  width: "100%",
                  maxWidth: "calc(100% - 100px)",
                }}
              >
                {/* top recatangle */}
                <Grid
                  item
                  container
                  style={{
                    position: "relative",
                    border: "1px solid grey",
                    flexGrow: 1,
                    borderBottom: "none",
                    borderLeft: "none",
                    minWidth: "110px",
                  }}
                >
                  <WallpaperIcon
                    style={{
                      width: matchesLG ? (matchesMD ? "60px" : "75px") : "85px",
                      height: "auto",
                      color: "grey",
                      backgroundColor: `${theme.palette.common.dark}`,
                      position: "absolute",
                      top: "-40px",
                      right: "-40px",
                    }}
                  />
                </Grid>
                {/* bottom rectangle */}
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
                      backgroundColor: `${theme.palette.common.dark}`,
                      // border: "1px solid red",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      align="center"
                      style={{
                        marginLeft: "1%",
                        maxHeight: "70px",
                        fontSize: "2rem",
                        fontStyle: "bold",
                        letterSpacing: "0.1rem",
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
        <Grid item container justify="flex-end" className={classes.container}>
          <Grid item container justify="center" className={classes.contact}>
            <Grid
              item
              container
              style={{
                position: "relative",
                border: "1px solid grey",
                maxWidth: "100px",
                minWidth: theme.spacing(8),
                maxHeight: "200px",
                marginTop: theme.spacing(4),
                marginLeft: theme.spacing(4),
                borderBottom: "none",
                borderRight: "none",
              }}
            >
              <Grid
                item
                style={{
                  position: "absolute",
                  bottom: -theme.spacing(1),
                  left: -theme.spacing(4),
                }}
              >
                <PhoneInTalkOutlinedIcon
                  color="primary"
                  style={{
                    width: theme.spacing(9),
                    height: "auto",
                    backgroundColor: theme.palette.common.dark,
                  }}
                />
              </Grid>
            </Grid>

            <Grid
              item
              xl={8}
              container
              justify="center"
              style={{
                border: `5px solid ${theme.palette.accent.main}`,
                maxWidth: theme.spacing(36),
                maxHeight: theme.spacing(26),
                padding: theme.spacing(1),
              }}
            >
              <Grid
                item
                container
                style={{
                  // border: "1px solid red",
                  minWidth: "250px",
                  height: "180px",
                  flexShrink: 0,
                }}
              >
                <Grid item container>
                  <Typography variant="h4">Contact</Typography>
                </Grid>

                <Grid item container style={{ maxHeight: "170px" }}>
                  <Grid item container className={classes.contactItem}>
                    <Grid item>
                      <CallIcon color="primary" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" align="center">
                        9847021971
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container className={classes.contactItem}>
                    <Grid item>
                      <EmailIcon color="primary" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" align="center">
                        firoj.is.available@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container className={classes.contactItem}>
                    <Grid item>
                      <RoomIcon color="primary" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" align="center">
                        Nawalparasi, Nepal
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            alignItems="center"
            container
            direction="row"
            style={{
              paddingRight: matchesSM ? theme.spacing(2) : theme.spacing(8),

              border: `1px solid ${theme.palette.accent.main}`,
              position: "relative",
              marginLeft: theme.spacing(2),
            }}
          >
            <Grid
              style={{
                position: "absolute",
                top: 0,
                left: -theme.spacing(3),
                backgroundColor: theme.palette.common.dark,
              }}
            >
              <Education
                fill={theme.palette.primary.main}
                stroke={theme.palette.primary.main}
              />
            </Grid>
            <Grid
              item
              style={{
                paddingLeft: matchesSM ? theme.spacing(2) : theme.spacing(8),
              }}
            >
              <Typography variant="body1" align="right">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </Typography>
              <Typography variant="body1" align="right">
                lipsum as it is sometimes known, is dummy text used in laying
                out print, graphic or web designs. The passage is attributed to
                an unknown typesetter in the 15th century.
              </Typography>
            </Grid>
            <Grid item container style={{ border: "1px solid grey" }} />
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
