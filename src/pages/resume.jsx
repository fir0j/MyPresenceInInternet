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
  pointerLeft: {
    width: theme.spacing(12),
    height: theme.spacing(5),
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.common.dark,
    clipPath: "polygon(0 40%, 37% 0, 100% 0, 100% 100%, 37% 100%, 0 60%)",
    paddingLeft: theme.spacing(1.5),
  },
  pointerRight: {
    width: theme.spacing(12),
    height: theme.spacing(5),
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.common.dark,
    clipPath: "polygon(0 0, 63% 0, 100% 40%, 100% 60%, 63% 100%, 0 100%)",
    paddingRight: theme.spacing(1.5),
    marginRight: theme.spacing(1),
  },

  education: {
    // border: `1px solid ${theme.palette.accent.main}`,
  },
  language: {
    border: `5px solid ${theme.palette.accent.main}`,
  },
  skills: {
    border: `1px solid ${theme.palette.accent.main}`,
    marginTop: "2em",
  },
  passion: {
    border: `1px solid ${theme.palette.accent.main}`,
    marginTop: "4em",
  },
}));
export default function Resume() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));

  const hello = (
    <Grid
      item
      container
      justify="space-between"
      alignItems="center"
      className={classes.container}
      // style={{ border: "1px solid red" }}
    >
      <Grid item container xl={8} lg={8} md={8} sm={8} className={classes.name}>
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
          <Avatar alt="Firoj Siddiki Picture" src={dp} className={classes.dp} />
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
              width: "100%",
              maxWidth: "calc(100% - 37.5px)",
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
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: matchesLG ? (matchesMD ? "60px" : "75px") : "85px",
                  height: "auto",
                  color: "grey",
                  backgroundColor: `${theme.palette.common.dark}`,
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
                  variant="h4"
                  align="center"
                  style={{
                    marginLeft: "1%",
                    maxHeight: "70px",
                    fontSize: "2.5rem",
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
        </Grid>
      </Grid>
    </Grid>
  );

  const contact = (
    <Grid
      item
      container
      justify="flex-end"
      className={classes.container}
      // style={{ border: "1px solid blue" }}
    >
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
        container
        direction="column"
        justify="space-between"
        style={{
          position: "relative",
          marginLeft: theme.spacing(3),
          marginTop: theme.spacing(3),
          maxHeight: matchesLG ? theme.spacing(35) : theme.spacing(25),
        }}
      >
        {/* icon */}
        <Grid
          style={{
            position: "absolute",
            top: 0,
            left: -theme.spacing(4),
            backgroundColor: theme.palette.common.dark,
          }}
        >
          <Education
            fill={theme.palette.primary.main}
            stroke={theme.palette.primary.main}
            style={{ width: theme.spacing(9), height: "auto" }}
          />
        </Grid>
        {/* intro content */}
        <Grid
          item
          style={{
            flexGrow: 1,
            border: `1px solid ${theme.palette.primary.main}`,
            borderBottom: "none",
            borderRight: "none",
            borderTop: "none",
            paddingLeft: matchesSM ? theme.spacing(2) : theme.spacing(8),
          }}
        >
          <Typography variant="body1" align="right">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </Typography>
          <Typography variant="body1" align="right">
            lipsum as it is sometimes known, is dummy text used in laying out
            print, graphic or web designs. The passage is attributed to an
            unknown typesetter in the 15th century.
          </Typography>
        </Grid>

        {/* design rectangle */}
        <Grid
          item
          container
          style={{
            height: theme.spacing(4),
            flexWrap: "nowrap",
            // border: "1px solid blue",
          }}
        >
          <Grid
            item
            container
            style={{
              border: `1px solid ${theme.palette.primary.main}`,
              borderBottom: "none",
              borderLeft: "none",
            }}
          />
          <Grid item container />
        </Grid>
      </Grid>
    </Grid>
  );

  const education = (
    <Grid
      item
      container
      className={classes.container}
      style={{ border: "1px solid lightgreen" }}
    >
      <Grid item container style={{ border: "1px solid lightblue" }}>
        <Grid item container justify="center">
          <Grid item>
            <Typography variant="h4">Work Experience</Typography>
          </Grid>
        </Grid>
        {/* work experience 1 */}
        <Grid container>
          <Grid item container style={{ flexWrap: "nowrap" }}>
            <Grid
              item
              container
              justify="space-between"
              style={{ flexWrap: "nowrap" }}
            >
              <Grid
                item
                container
                justify="flex-end"
                alignItems="center"
                style={{
                  width: "auto",
                }}
              >
                <Grid
                  item
                  container
                  justify="center"
                  alignItems="center"
                  className={classes.pointerRight}
                >
                  <Grid item>
                    <Typography
                      variant="h6"
                      style={{
                        color: theme.palette.common.dark,
                      }}
                    >
                      2020
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container justify="flex-start" alignItems="center">
                <Grid item>
                  <Typography variant="body1">INTERNSHIP</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item>
                <Typography variant="body1">
                  It was a nice experience
                </Typography>
              </Grid>
              <Grid item />
            </Grid>
          </Grid>
          {/* work experience 2 */}
          <Grid item container style={{ flexWrap: "nowrap" }}>
            <Grid
              item
              container
              justify="space-between"
              style={{ flexWrap: "nowrap" }}
            >
              <Grid
                item
                container
                justify="flex-end"
                alignItems="center"
                style={{
                  width: "auto",
                }}
              >
                <Grid
                  item
                  container
                  justify="center"
                  alignItems="center"
                  className={classes.pointerRight}
                >
                  <Grid item>
                    <Typography
                      variant="h6"
                      style={{
                        color: theme.palette.common.dark,
                      }}
                    >
                      2020
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container justify="flex-start" alignItems="center">
                <Grid item>
                  <Typography variant="body1">INTERNSHIP</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item>
                <Typography variant="body1">
                  It was a nice experience
                </Typography>
              </Grid>
              <Grid item />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.education}
        style={{
          position: "relative",
          marginLeft: theme.spacing(3),
        }}
      >
        <Grid
          container
          style={{
            // position: "absolute",
            // top: matchesLG ? undefined : -theme.spacing(2),
            border: `3px solid ${theme.palette.accent.main}`,
          }}
        >
          <Grid item container justify="center">
            <Grid item>
              <Typography variant="h4">Education</Typography>
            </Grid>
          </Grid>
          {/* engineering education */}
          <Grid container>
            <Grid item container style={{ flexWrap: "nowrap" }}>
              <Grid item container>
                <Grid item container justify="flex-start" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">
                      It was a nice experience
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item />
              </Grid>
              <Grid
                item
                container
                justify="space-between"
                style={{ flexWrap: "nowrap" }}
              >
                <Grid item>
                  <Typography variant="body1">
                    CMR Institue Of Technology, Bangalore, India
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  justify="flex-end"
                  alignItems="center"
                  style={{
                    width: "auto",
                  }}
                >
                  <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.pointerLeft}
                  >
                    <Grid item>
                      <Typography
                        variant="h6"
                        style={{
                          color: theme.palette.common.dark,
                        }}
                      >
                        09/2020
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* high school */}
            <Grid item container style={{ flexWrap: "nowrap" }}>
              <Grid item container>
                <Grid item container justify="flex-start" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">
                      It was a nice experience
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item />
              </Grid>
              <Grid
                item
                container
                justify="space-between"
                style={{ flexWrap: "nowrap" }}
              >
                <Grid item>
                  <Typography variant="body1">
                    Little Angles' College, Kathmandu, Nepal
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  justify="flex-end"
                  alignItems="center"
                  style={{
                    width: "auto",
                  }}
                >
                  <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.pointerLeft}
                  >
                    <Grid item>
                      <Typography
                        variant="h6"
                        style={{
                          color: theme.palette.common.dark,
                        }}
                      >
                        09/2014
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* Schooling */}
            <Grid item container style={{ flexWrap: "nowrap" }}>
              <Grid item container>
                <Grid item container justify="flex-start" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">
                      It was a nice experience
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item />
              </Grid>
              <Grid
                item
                container
                justify="space-between"
                style={{ flexWrap: "nowrap" }}
              >
                <Grid item>
                  <Typography variant="body1">
                    Sayapatri English H.S. School, Nawalparasi, Nepal
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  justify="flex-end"
                  alignItems="center"
                  style={{
                    width: "auto",
                  }}
                >
                  <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.pointerLeft}
                  >
                    <Grid item>
                      <Typography
                        variant="h6"
                        style={{
                          color: theme.palette.common.dark,
                        }}
                      >
                        09/2012
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  const language = (
    <Grid item container className={classes.container}>
      <Grid
        container
        style={{
          width: "100%",
          height: "100%",
          flexWrap: "nowrap",
        }}
      >
        {/* language */}
        <Grid
          item
          container
          style={{
            position: "relative",
            border: "1px solid red",
            height: "200px",
          }}
        >
          <Grid
            item
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            style={{
              // position: "absolute",
              // top: -theme.spacing(8),
              flexWrap: "nowrap",
              border: "1px solid blue",
              height: "200px",
            }}
          >
            <Grid item container justify="center" alignItems="center">
              <Grid item>
                <Typography variant="h4">Language</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{
                paddingLeft: theme.spacing(4),
                flexWrap: "nowrap",
              }}
            >
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="body2">English</Typography>
                </Grid>
                <Grid item>85%</Grid>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="body2">Nepali</Typography>
                </Grid>
                <Grid item>85%</Grid>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="body2">Bhojpuri</Typography>
                </Grid>
                <Grid item>85%</Grid>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="body2">Hindi</Typography>
                </Grid>
                <Grid item>85%</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* skills */}
        <Grid item container className={classes.skills}>
          skills
        </Grid>
        {/* passion */}
        <Grid item container className={classes.passion}>
          Passion
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Fragment>
      <Grid
        item
        container
        style={{
          // border: "1px solid teal",
          height: "auto",
        }}
      >
        {hello}
        {contact}
        {education}
        {language}
      </Grid>
    </Fragment>
  );
}
