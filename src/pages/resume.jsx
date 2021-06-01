import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import dp from "../assets/founder3.jpg";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import { ReactComponent as Education } from "../assets/education.svg";
import { ReactComponent as Stock } from "../assets/stock.svg";
import { ReactComponent as Cooking } from "../assets/cooking.svg";
import { ReactComponent as Music } from "../assets/music.svg";
import { ReactComponent as Exercise } from "../assets/exercise.svg";
import { ReactComponent as Work } from "../assets/work.svg";
import { ReactComponent as Telephone } from "../assets/telephone.svg";
import { ReactComponent as Gallery } from "../assets/gallery.svg";
import { ReactComponent as HobbyIcon } from "../assets/hobby.svg";
import { ReactComponent as LangaugeIcon } from "../assets/language.svg";
import { ReactComponent as ProgrammingIcon } from "../assets/programming.svg";
import LinearProgressGraph from "../components/LinearProgressGraph.component";
import CircularProgressWithLabel from "../components/CircularProgressWithLabel.component";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import Hidden from "@material-ui/core/Hidden";
import { HeaderWave, FooterWave } from "../components/ShapeDivider.component";
import ContainerWithGradientBorder from "../components/ContainerWithGradientBorder.component";
import PageContainer from "../components/PageContainer.component";
// import { animated, useSpring } from "react-spring";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: "100%",
    height: "auto",
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    zIndex: 0,
  },

  container: {
    position: "relative",
    flexGrow: 1,
    flexWrap: "nowrap",
    [theme.breakpoints.down("md")]: {
      marginBottom: 0,
    },
  },
  // name: {
  //   border: `3px solid ${theme.palette.accent.main}`,

  //   borderTopRightRadius: "15em",
  //   borderBottomRightRadius: "15em",
  //   flexWrap: "nowrap",
  //   maxHeight: theme.spacing(44),
  // },
  dp: {
    width: "70%",
    height: "auto",
    overflow: "hidden",
    margin: theme.spacing(2),
    minWidth: theme.spacing(21),
    minHeight: theme.spacing(21),

    [theme.breakpoints.down("xs")]: {
      minWidth: theme.spacing(10),
      minHeight: theme.spacing(10),
    },
  },

  contact: {
    // border: `1px solid ${theme.palette.primary.main}`,
    flexWrap: "nowrap",
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  contactItem: {
    // border: "1px solid blue",
    color: theme.palette.secondary.main,
    alignItems: "center",
    "&>*": {
      paddingRight: theme.spacing(1),
    },
  },
  pointerLeft: {
    width: theme.spacing(12),
    height: theme.spacing(5),
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.primary.main,
    clipPath: "polygon(0 40%, 37% 0, 100% 0, 100% 100%, 37% 100%, 0 60%)",
    paddingLeft: theme.spacing(1.5),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
  },
  pointerRight: {
    width: theme.spacing(12),
    height: theme.spacing(5),
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.primary.main,
    clipPath: "polygon(0 0, 63% 0, 100% 40%, 100% 60%, 63% 100%, 0 100%)",
    paddingRight: theme.spacing(1.5),
    marginRight: theme.spacing(2),
  },
  svgIcon: {
    [theme.breakpoints.down("xl")]: {
      width: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(7),
    },
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(6),
    },

    height: "auto",
    backgroundColor: theme.palette.primary.main,
    fill: theme.palette.secondary.main,
    padding: theme.spacing(2),
    // color: theme.palette.accent.main,
    // stroke: theme.palette.secondary.main,
  },

  educationContent: {
    "&>*": {
      paddingTop: theme.spacing(1),
    },
  },
  technologies: {
    "&>*": {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },

  language: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
export default function Resume() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
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
      style={{
        marginBottom: theme.spacing(5),
        height: matchesMD ? 250 : undefined,
      }}
    >
      <ContainerWithGradientBorder
        item
        container
        xl={8}
        lg={8}
        md={8}
        sm={matchesSM ? 12 : 8}
        style={{
          borderTopRightRadius: "15em",
          borderBottomRightRadius: "15em",
          flexWrap: "nowrap",
          maxHeight: theme.spacing(44),
          backgroundColor: theme.palette.primary.main,
        }}
        borderWidth="3px"
      >
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ paddingLeft: theme.spacing(1) }}
        >
          <Grid
            item
            style={{
              alignSelf: "center",
            }}
          >
            <Typography
              variant="h3"
              style={{
                letterSpacing: "0.2rem",
                color: theme.palette.accent.main,
              }}
            >
              FIROJ SIDDIKI
            </Typography>
            <Typography
              variant="h6"
              style={{
                letterSpacing: "0.3rem",
                color: theme.palette.common.offWhite,
              }}
            >
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
      </ContainerWithGradientBorder>

      {/* hello section */}
      <Hidden smDown>
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
            height: "350px",
            maxHeight: "350px",
            flexWrap: "nowrap",
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
                  border: `1px solid ${theme.palette.secondary.main}`,
                  flexGrow: 1,
                  borderBottom: "none",
                  borderLeft: "none",
                  minWidth: "110px",
                }}
              >
                <Gallery
                  style={{
                    position: "absolute",
                    top: "-50px",
                    right: -theme.spacing(3),
                    width: matchesXL
                      ? matchesLG
                        ? matchesSM
                          ? theme.spacing(6)
                          : theme.spacing(7)
                        : theme.spacing(9)
                      : undefined,
                  }}
                  className={classes.svgIcon}
                />
              </Grid>
              {/* bottom rectangle */}
              <Grid
                item
                style={{
                  position: "relative",
                  border: `1px solid ${theme.palette.secondary.main}`,
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
                    backgroundColor: `${theme.palette.primary.main}`,
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
                      color: theme.palette.accent.main,
                    }}
                  >
                    Hello!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );

  const contact = (
    <Grid
      item
      container
      justify="flex-end"
      className={classes.container}
      style={{ marginBottom: matchesMD ? undefined : theme.spacing(5) }}
    >
      <Hidden mdDown>
        <Grid item container justify="center" className={classes.contact}>
          <Grid
            item
            container
            style={{
              position: "relative",
              border: `1px solid ${theme.palette.secondary.main}`,
              borderBottom: "none",
              borderRight: "none",
              maxWidth: theme.spacing(12),
              minWidth: theme.spacing(8),
              maxHeight: theme.spacing(25),
              marginTop: theme.spacing(4),
              marginLeft: theme.spacing(4),
            }}
          >
            <Grid
              item
              style={{
                position: "absolute",
                bottom: -theme.spacing(1),
                left: -theme.spacing(6),
              }}
            >
              <Telephone className={classes.svgIcon} />
            </Grid>
          </Grid>

          <ContainerWithGradientBorder
            item
            xl={8}
            container
            justify="center"
            borderWidth="3px"
            style={{
              backgroundColor: theme.palette.primary.main,
              maxWidth: theme.spacing(36),
              maxHeight: theme.spacing(36),
              padding: theme.spacing(1),
            }}
          >
            <Grid
              item
              container
              style={{
                minWidth: "250px",
                height: "250px",
                flexShrink: 0,
              }}
            >
              <Grid item container justify="center" alignItems="center">
                <Grid item>
                  <Typography
                    variant="h4"
                    style={{ color: theme.palette.accent.main }}
                  >
                    Contact
                  </Typography>
                </Grid>
              </Grid>

              <Grid item container style={{ maxHeight: "200px" }}>
                <Grid item container className={classes.contactItem}>
                  <Grid item>
                    <CallIcon color="secondary" />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="center"
                      style={{ color: theme.palette.secondary.main }}
                    >
                      +977 9847064013
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container className={classes.contactItem}>
                  <Grid item>
                    <EmailIcon color="secondary" />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="center"
                      style={{ color: theme.palette.secondary.main }}
                    >
                      firoj.is.available@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container className={classes.contactItem}>
                  <Grid item>
                    <RoomIcon color="secondary" />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="center"
                      style={{ color: theme.palette.secondary.main }}
                    >
                      Nawalparasi, Nepal
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ContainerWithGradientBorder>
        </Grid>
      </Hidden>
      <Grid
        item
        container
        direction="column"
        justify="space-between"
        style={{
          position: "relative",
          marginLeft: matchesXS ? theme.spacing(4) : theme.spacing(8),
          marginTop: theme.spacing(matchesMD ? 8 : 2),
          maxHeight: matchesLG
            ? matchesSM
              ? theme.spacing(40)
              : theme.spacing(30)
            : theme.spacing(30),
          flexWrap: "nowrap",
        }}
      >
        {/* education icon */}
        <Grid
          item
          style={{
            position: "absolute",
            top: -theme.spacing(matchesMD ? 3 : 0),
            left: matchesXL
              ? matchesMD
                ? matchesXS
                  ? -theme.spacing(5)
                  : -theme.spacing(6)
                : -theme.spacing(7)
              : undefined,
            height: theme.spacing(9),
          }}
        >
          <Education
            style={{ width: matchesMD ? theme.spacing(8) : theme.spacing(10) }}
            className={classes.svgIcon}
          />
        </Grid>
        {/* intro content */}
        <Grid
          item
          style={{
            flexGrow: 1,
            border: `1px solid ${theme.palette.secondary.main}`,
            borderBottom: "none",
            borderRight: "none",
            borderTop: "none",
            paddingBottom: theme.spacing(matchesMD ? 5 : 2),
            marginLeft: matchesXS ? theme.spacing(1) : undefined,
            paddingLeft: matchesMD
              ? matchesXS
                ? theme.spacing(8)
                : theme.spacing(12)
              : theme.spacing(9),
          }}
        >
          <Typography
            variant="body1"
            align="right"
            style={{ color: theme.palette.secondary.main }}
          >
            Looking forward to secure a challenging position in a reputable
            organization which can utilize my learnings, knowledge, and skills
            while contributing for the company's growth and in turn ensuring
            personal growth too
          </Typography>
        </Grid>

        {/* design rectangle */}
        <Grid
          item
          container
          style={{
            height: theme.spacing(5),
            flexWrap: "nowrap",
          }}
        >
          <Grid
            item
            container
            style={{
              border: `1px solid ${theme.palette.secondary.main}`,
              borderBottom: "none",
              borderLeft: "none",
              height: "100%",
              marginLeft: matchesXS ? theme.spacing(1) : undefined,
            }}
          />
          <Grid item container style={{ height: "100%" }} />
        </Grid>
      </Grid>
    </Grid>
  );

  const education = (
    <Grid
      item
      container
      direction={matchesMD ? "column-reverse" : "row"}
      className={classes.container}
      style={{
        marginBottom: theme.spacing(5),
        // border: "1px solid blue",
      }}
    >
      {/* work section */}
      <Grid item container>
        <Grid item container justify="center">
          <Grid item container xl lg md sm xs />
          <Grid
            item
            container
            xl
            lg
            md
            sm
            xs
            style={{
              position: "relative",
              border: `1px solid ${theme.palette.secondary.main}`,
              height: theme.spacing(5),
              borderRight: "none",
              borderBottom: "none",
              backgroundColor: theme.palette.primary.main,
              marginTop: theme.spacing(12),
            }}
          >
            <Work
              className={classes.svgIcon}
              style={{
                position: "absolute",
                top: matchesMD ? -theme.spacing(5.5) : -theme.spacing(7),
                right: 0,
              }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          justify="center"
          alignItems="center"
          style={{ height: theme.spacing(11) }}
        >
          <Grid item>
            <Typography
              variant="h4"
              style={{ color: theme.palette.accent.main }}
            >
              Work Experience
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            container
            justify="space-between"
            style={{ flexWrap: "nowrap", marginTop: theme.spacing(2) }}
          >
            <Grid
              item
              container
              justify="flex-end"
              alignItems="flex-start"
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
                      color: theme.palette.primary.main,
                    }}
                  >
                    09/2020
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography
                  variant="h6"
                  style={{ color: theme.palette.common.offWhite }}
                >
                  As Frontend Intern @Flipr, Bangalore, India
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: theme.spacing(1) }}>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.secondary.main }}
                >
                  It is a startup company. They selected me as intern through
                  thier Practical Web Development Test.
                </Typography>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.secondary.main }}
                >
                  I built 3 Projects before the selection process for me got
                  over.
                </Typography>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.secondary.main }}
                >
                  They qualified me as intern for their company whithin 40 days
                  though the selection process was of 90 days.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justify="space-between"
            style={{
              flexWrap: "nowrap",
              marginTop: theme.spacing(2),
              marginBottom: theme.spacing(6),
            }}
          >
            <Grid
              item
              container
              justify="flex-end"
              alignItems="flex-start"
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
                      color: theme.palette.primary.main,
                    }}
                  >
                    09/2020
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography
                  variant="h6"
                  style={{ color: theme.palette.common.offWhite }}
                >
                  As Frontend Developer @Flipr, Bangalore, India
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: theme.spacing(1) }}>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.secondary.main }}
                >
                  I just built two Real World Projects as their intern before
                  they offered me job position
                </Typography>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.secondary.main }}
                >
                  Unfortunately we worked together for 1 Month only, after that
                  things didn't work out.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* education section */}
      <Grid
        item
        container
        style={{
          position: "relative",
          marginLeft: matchesMD ? 0 : theme.spacing(3),
        }}
      >
        <ContainerWithGradientBorder
          container
          style={{
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(1),
            bottom: -theme.spacing(25),
            position: matchesMD ? "relative" : "absolute",
            top: matchesMD ? 0 : -theme.spacing(9),
            height: matchesLG ? theme.spacing(120) : theme.spacing(110),
          }}
          borderWidth="3px"
        >
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            style={{
              height: theme.spacing(11),
            }}
          >
            <Grid item>
              <Typography
                variant="h4"
                style={{ color: theme.palette.accent.main }}
              >
                Education
              </Typography>
            </Grid>
          </Grid>

          <Grid container style={{ height: "90%" }}>
            <Grid
              item
              container
              justify="space-between"
              style={{ flexWrap: "nowrap" }}
            >
              <Grid
                item
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-end"
                className={classes.educationContent}
              >
                <Grid item>
                  <Typography
                    variant="h6"
                    align="right"
                    style={{ color: theme.palette.common.offWhite }}
                  >
                    CMR Institue Of Technology, Bangalore, India
                  </Typography>
                </Grid>
                <Grid item style={{ maxWidth: "40ch" }}>
                  <Typography
                    variant="body1"
                    align="right"
                    style={{ color: theme.palette.secondary.main }}
                  >
                    It persued my academic career in COMPUTER SCIENCE & ENGINEER
                    at this place.
                  </Typography>
                  <Typography
                    variant="body1"
                    align="right"
                    style={{ color: theme.palette.secondary.main }}
                  >
                    I graduated from this course with 6.4 CGPA out 10 in 2020.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justify="flex-end"
                alignItems="flex-start"
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
                        color: theme.palette.primary.main,
                      }}
                    >
                      09/2020
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              container
              justify="space-between"
              style={{ flexWrap: "nowrap" }}
            >
              <Grid
                item
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-end"
                className={classes.educationContent}
              >
                <Grid item>
                  <Typography
                    variant="h6"
                    align="right"
                    style={{ color: theme.palette.common.offWhite }}
                  >
                    Little Angles' College, Kathmandu, Nepal
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    align="right"
                    style={{ color: theme.palette.secondary.main }}
                  >
                    Here I majored in Physics and Math.
                  </Typography>
                  <Typography
                    variant="body1"
                    align="right"
                    style={{ color: theme.palette.secondary.main }}
                  >
                    I Passed my high school with 59.9%
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justify="flex-end"
                alignItems="flex-start"
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
                        color: theme.palette.primary.main,
                      }}
                    >
                      09/2014
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              container
              justify="space-between"
              style={{ flexWrap: "nowrap" }}
            >
              <Grid
                item
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-end"
                className={classes.educationContent}
              >
                <Grid item>
                  <Typography
                    variant="h6"
                    align="right"
                    style={{ color: theme.palette.common.offWhite }}
                  >
                    Sayapatri English H.S School, Nawalparasi, Nepal
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    align="right"
                    style={{ color: theme.palette.secondary.main }}
                  >
                    I passed SLC with 79.87% from this school.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justify="flex-end"
                alignItems="flex-start"
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
                        color: theme.palette.primary.main,
                      }}
                    >
                      09/2012
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ContainerWithGradientBorder>
      </Grid>
    </Grid>
  );

  const hobbyNlanguage = (
    <Grid
      item
      container
      justify="space-around"
      className={classes.container}
      style={{ marginBottom: theme.spacing(5) }}
    >
      <Grid
        item
        container
        direction={
          matchesMD ? (matchesXS ? "column-reverse" : "row-reverse") : undefined
        }
        style={{
          width: "100%",
          flexWrap: "nowrap",
        }}
      >
        {/* language */}
        <Grid
          item
          container
          style={{
            position: "relative",
            // padding: matchesXS ? undefined : theme.spacing(5),
            paddingLeft: 0,
            marginTop: matchesXS ? theme.spacing(10) : undefined,
            marginBottom: matchesXS ? theme.spacing(5) : undefined,
          }}
        >
          <Grid
            container
            style={{
              height: theme.spacing(50),
            }}
          >
            <Hidden mdDown>
              <Grid
                item
                container
                justify="center"
                style={{
                  height: theme.spacing(15),
                }}
              >
                <Grid item container xl lg md sm xs />
                <Grid
                  item
                  container
                  xl
                  lg
                  md
                  sm
                  xs
                  style={{
                    position: "relative",
                    border: `1px solid ${theme.palette.secondary.main}`,
                    borderRight: "none",
                    borderBottom: "none",
                    backgroundColor: theme.palette.primary.main,
                  }}
                >
                  <LangaugeIcon
                    className={classes.svgIcon}
                    style={{
                      position: "absolute",
                      top: -theme.spacing(7),
                      height: theme.spacing(9),
                      right: -theme.spacing(2),
                    }}
                  />
                </Grid>
              </Grid>
            </Hidden>

            <Grid
              item
              container
              justify="center"
              style={{
                position: "relative",
                padding: theme.spacing(1),
                paddingBottom: theme.spacing(5),
                height: "100%",
                marginLeft: matchesXS ? undefined : theme.spacing(5),
              }}
            >
              <Grid
                item
                container
                justify="center"
                style={{
                  height: theme.spacing(11),
                }}
              >
                <Grid
                  item
                  container
                  xl
                  lg
                  md
                  sm
                  xs
                  style={{
                    position: "relative",
                    border: `1px solid ${theme.palette.secondary.main}`,
                    borderBottom: "none",
                    borderLeft: "none",
                    backgroundColor: theme.palette.primary.main,
                  }}
                >
                  <LangaugeIcon
                    className={classes.svgIcon}
                    style={{
                      position: "absolute",
                      top: -theme.spacing(7),
                      left: -theme.spacing(0),
                      height: theme.spacing(9),
                    }}
                  />
                </Grid>
                <Grid item container md={6} sm={3} xs={6} />
              </Grid>
              <Grid
                item
                container
                direction="column"
                justify="space-around"
                alignItems="center"
                style={{
                  flexWrap: "nowrap",
                  height: matchesXS ? "105%" : "115%",
                }}
              >
                <Grid item container direction="column">
                  <Grid item style={{ alignSelf: "center" }}>
                    <Typography
                      variant="h4"
                      style={{ color: theme.palette.accent.main }}
                    >
                      Language
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container direction="column">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      style={{ color: theme.palette.common.offWhite }}
                    >
                      English
                    </Typography>
                  </Grid>
                  <LinearProgressGraph
                    progressPercentage="85%"
                    height={theme.spacing(1)}
                    showPercentage={false}
                  />
                </Grid>
                <Grid item container direction="column">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      style={{ color: theme.palette.common.offWhite }}
                    >
                      Nepali
                    </Typography>
                  </Grid>
                  <LinearProgressGraph
                    progressPercentage="90%"
                    height={theme.spacing(1)}
                    showPercentage={false}
                  />
                </Grid>
                <Grid item container direction="column">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      style={{ color: theme.palette.common.offWhite }}
                    >
                      Bhojpuri
                    </Typography>
                  </Grid>
                  <LinearProgressGraph
                    progressPercentage="95%"
                    height={theme.spacing(1)}
                    showPercentage={false}
                  />
                </Grid>
                <Grid item container direction="column">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      style={{ color: theme.palette.common.offWhite }}
                    >
                      Hindi
                    </Typography>
                  </Grid>
                  <LinearProgressGraph
                    progressPercentage="90%"
                    height={theme.spacing(1)}
                    showPercentage={false}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* hobby */}
        <Grid item container alignItems="center" justify="center">
          <Grid
            item
            container
            style={{ height: matchesMD ? undefined : "30%" }}
          >
            <Grid
              item
              container
              justify="center"
              style={{
                position: "relative",
              }}
            >
              <ContainerWithGradientBorder
                item
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{
                  backgroundColor: theme.palette.primary.main,
                  flexWrap: "nowrap",
                  // border: `3px solid ${theme.palette.accent.main}`,
                }}
                borderWidth="3px"
              >
                <Grid
                  item
                  container
                  justify="center"
                  alignItems="center"
                  style={{ height: theme.spacing(11) }}
                >
                  <Grid item>
                    <Typography
                      variant="h4"
                      style={{ color: theme.palette.accent.main }}
                    >
                      Hobby
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{
                    flexWrap: "nowrap",
                  }}
                >
                  {/* item 1 */}
                  <Grid
                    item
                    container
                    justify="center"
                    style={{
                      flexWrap: "nowrap",
                      // border: "1px solid green",
                    }}
                  >
                    <Grid item style={{ alignSelf: "center" }}>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          style={{ color: theme.palette.common.offWhite }}
                        >
                          Cooking
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Cooking
                        className={classes.svgIcon}
                        style={{ height: theme.spacing(5) }}
                      />
                    </Grid>
                  </Grid>
                  {/* item 2 */}
                  <Grid
                    item
                    container
                    justify="center"
                    style={{
                      flexWrap: "nowrap",
                      // border: "1px solid green",
                    }}
                  >
                    <Grid item>
                      <Exercise
                        className={classes.svgIcon}
                        style={{ height: theme.spacing(5) }}
                      />
                    </Grid>
                    <Grid item style={{ alignSelf: "center" }}>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          style={{ color: theme.palette.common.offWhite }}
                        >
                          Exercise
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    justify="center"
                    style={{
                      flexWrap: "nowrap",
                      // border: "1px solid green",
                    }}
                  >
                    <Grid item style={{ alignSelf: "center" }}>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          style={{ color: theme.palette.common.offWhite }}
                        >
                          Reading Books
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <MenuBookOutlinedIcon
                        className={classes.svgIcon}
                        style={{ height: theme.spacing(5) }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    container
                    justify="center"
                    style={{
                      flexWrap: "nowrap",
                    }}
                  >
                    <Grid item>
                      <Stock
                        className={classes.svgIcon}
                        style={{ height: theme.spacing(5) }}
                      />
                    </Grid>
                    <Grid item style={{ alignSelf: "center" }}>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          style={{ color: theme.palette.common.offWhite }}
                        >
                          Stock Trading
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    container
                    justify="center"
                    style={{
                      flexWrap: "nowrap",
                    }}
                  >
                    <Grid item style={{ alignSelf: "center" }}>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          style={{ color: theme.palette.common.offWhite }}
                        >
                          Singing
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Music
                        className={classes.svgIcon}
                        style={{ height: theme.spacing(5) }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </ContainerWithGradientBorder>
            </Grid>
          </Grid>
          <Grid item container justify="center">
            <Grid item container xl lg md={6} sm={6} xs={6} />
            <Grid
              item
              container
              md={6}
              sm={6}
              xs={6}
              style={{
                position: "relative",
                border: `1px solid ${theme.palette.secondary.main}`,
                borderTop: "none",
                borderRight: "none",
                backgroundColor: theme.palette.primary.main,
                height: matchesLG ? theme.spacing(12) : theme.spacing(9),
                marginTop: matchesLG
                  ? matchesMD
                    ? theme.spacing(0)
                    : theme.spacing(15)
                  : theme.spacing(9),
              }}
            >
              <HobbyIcon
                className={classes.svgIcon}
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: -theme.spacing(6),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  const skillsOnDesktop = (
    <Grid
      item
      container
      justify="space-around"
      className={classes.container}
      style={{
        paddingBottom: theme.spacing(matchesMD ? 1 : 30),
      }}
    >
      <Grid
        item
        container
        direction={matchesMD ? "column" : undefined}
        style={{
          width: "100%",
          flexWrap: "nowrap",
          position: "relative",
        }}
      >
        {/* language */}
        <Hidden mdDown>
          <Grid
            item
            container
            style={{
              position: "relative",
              padding: theme.spacing(5),
              paddingLeft: 0,
              marginTop: theme.spacing(8),
            }}
          >
            <Grid
              container
              style={{
                position: "absolute",
                top: 0,
                height: theme.spacing(50),
              }}
            >
              <Grid
                item
                container
                justify="center"
                style={{
                  height: theme.spacing(15),
                }}
              >
                <Grid item container xl lg md sm xs />
                <Grid
                  item
                  container
                  xl
                  lg
                  md
                  sm
                  xs
                  style={{
                    position: "relative",
                    border: `1px solid ${theme.palette.secondary.main}`,
                    borderRight: "none",
                    borderBottom: "none",
                    backgroundColor: theme.palette.primary.main,
                  }}
                >
                  <LangaugeIcon
                    className={classes.svgIcon}
                    style={{
                      position: "absolute",
                      top: -theme.spacing(7),
                      height: theme.spacing(9),
                      right: -theme.spacing(2),
                    }}
                  />
                </Grid>
              </Grid>

              <ContainerWithGradientBorder
                item
                container
                justify="center"
                style={{
                  backgroundColor: theme.palette.primary.main,
                  position: "relative",
                  padding: theme.spacing(1),
                  paddingBottom: theme.spacing(5),
                  height: "calc(105% - 72px)",
                  // border: `3px solid ${theme.palette.accent.main}`,
                }}
                borderWidth="3px"
              >
                <Grid
                  item
                  container
                  direction="column"
                  justify="space-around"
                  alignItems="center"
                  style={{
                    flexWrap: "nowrap",
                  }}
                >
                  <Grid item container direction="column">
                    <Grid item style={{ alignSelf: "center" }}>
                      <Typography
                        variant="h4"
                        style={{ color: theme.palette.accent.main }}
                      >
                        Language
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direction="column">
                    <Grid item>
                      <Typography
                        variant="h6"
                        style={{ color: theme.palette.common.offWhite }}
                      >
                        English
                      </Typography>
                    </Grid>
                    <LinearProgressGraph
                      progressPercentage="85%"
                      height={theme.spacing(1)}
                      showPercentage={false}
                    />
                  </Grid>
                  <Grid item container direction="column">
                    <Grid item>
                      <Typography
                        variant="h6"
                        style={{ color: theme.palette.common.offWhite }}
                      >
                        Nepali
                      </Typography>
                    </Grid>
                    <LinearProgressGraph
                      progressPercentage="90%"
                      height={theme.spacing(1)}
                      showPercentage={false}
                    />
                  </Grid>
                  <Grid item container direction="column">
                    <Grid item>
                      <Typography
                        variant="h6"
                        style={{ color: theme.palette.common.offWhite }}
                      >
                        Bhojpuri
                      </Typography>
                    </Grid>
                    <LinearProgressGraph
                      progressPercentage="95%"
                      height={theme.spacing(1)}
                      showPercentage={false}
                    />
                  </Grid>
                  <Grid item container direction="column">
                    <Grid item>
                      <Typography
                        variant="h6"
                        style={{ color: theme.palette.common.offWhite }}
                      >
                        Hindi
                      </Typography>
                    </Grid>
                    <LinearProgressGraph
                      progressPercentage="90%"
                      height={theme.spacing(1)}
                      showPercentage={false}
                    />
                  </Grid>
                </Grid>
              </ContainerWithGradientBorder>
            </Grid>
          </Grid>
        </Hidden>

        {/* technical skills */}
        <Grid
          item
          container
          direction={matchesXS ? "row" : "column"}
          justify={matchesXS ? "center" : "flex-end"}
          style={{
            position: "relative",
            paddingLeft: matchesXL
              ? matchesMD
                ? undefined
                : theme.spacing(0.5)
              : undefined,
            width: matchesXL
              ? matchesLG
                ? matchesMD
                  ? "100%"
                  : theme.spacing(200)
                : theme.spacing(400)
              : undefined,
            marginBottom: matchesMD ? theme.spacing(10) : undefined,
          }}
        >
          <Grid
            item
            container
            style={{
              position: matchesMD ? undefined : "absolute",
              bottom: matchesMD ? undefined : -theme.spacing(15),
            }}
          >
            <Grid
              item
              container
              justify="center"
              style={{
                position: "relative",
                height: matchesMD ? undefined : theme.spacing(55),
              }}
            >
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                style={{
                  height: theme.spacing(11),
                }}
              >
                <Grid item>
                  <Typography
                    variant="h4"
                    style={{ color: theme.palette.accent.main }}
                  >
                    Technical Proficiency
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                className={classes.technologies}
              >
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={85}
                    size={matchesLG ? 100 : 120}
                    label="REACT"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={80}
                    size={matchesLG ? 100 : 120}
                    label="Material-UI"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={65}
                    size={matchesLG ? 100 : 120}
                    label="REDUX"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={65}
                    size={matchesLG ? 100 : 120}
                    label="VISX"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={65}
                    size={matchesLG ? 100 : 120}
                    label="React-Spring"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={80}
                    size={matchesLG ? 100 : 120}
                    label="Node.js"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={80}
                    size={matchesLG ? 100 : 120}
                    label="Express.js"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={80}
                    size={matchesLG ? 100 : 120}
                    label="MongoDB"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={70}
                    size={matchesLG ? 100 : 120}
                    label="REDIS"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="center"
              style={{
                height: theme.spacing(10),
                marginTop: theme.spacing(2),
              }}
            >
              <Grid
                item
                container
                xl
                lg
                md
                sm
                xs
                style={{
                  position: "relative",
                  border: `1px solid ${theme.palette.secondary.main}`,
                  borderTop: "none",
                  borderLeft: "none",
                }}
              >
                <ProgrammingIcon
                  className={classes.svgIcon}
                  style={{
                    position: "absolute",
                    bottom: -theme.spacing(6),
                    left: 0,
                  }}
                />
              </Grid>
              <Grid item container xl lg md sm xs />
            </Grid>
          </Grid>
        </Grid>

        {/* hobby */}
        <Hidden mdDown>
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            // style={{ border: "1px solid yellow" }}
          >
            <Grid item container style={{ height: "30%" }}>
              <Grid item container justify="center">
                <Grid
                  item
                  container
                  xl={9}
                  lg={9}
                  md={9}
                  sm={9}
                  xs
                  style={{
                    position: "relative",
                    border: `1px solid ${theme.palette.secondary.main}`,
                    borderBottom: "none",
                    borderLeft: "none",
                    backgroundColor: theme.palette.primary.main,
                    height: matchesLG ? theme.spacing(12) : theme.spacing(9),
                    marginTop: matchesLG ? theme.spacing(15) : theme.spacing(9),
                  }}
                >
                  <HobbyIcon
                    className={classes.svgIcon}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: -theme.spacing(6),
                    }}
                  />
                </Grid>
                <Grid item container xl lg md sm xs />
              </Grid>
              <Grid
                item
                container
                justify="center"
                style={{
                  position: "relative",
                }}
              >
                <ContainerWithGradientBorder
                  item
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    flexWrap: "nowrap",
                    // border: `3px solid ${theme.palette.accent.main}`,
                    marginBottom: theme.spacing(5),
                  }}
                  borderWidth="3px"
                >
                  {/* <Grid
                  item
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  style={{
                    flexWrap: "nowrap",
                    border: `3px solid ${theme.palette.accent.main}`,
                    marginBottom: theme.spacing(5),
                  }}
                > */}
                  <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    style={{ height: theme.spacing(11) }}
                  >
                    <Grid item>
                      <Typography
                        variant="h4"
                        style={{ color: theme.palette.accent.main }}
                      >
                        Hobby
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{
                      flexWrap: "nowrap",
                    }}
                  >
                    {/* item 1 */}
                    <Grid
                      item
                      container
                      justify="center"
                      style={{
                        flexWrap: "nowrap",
                        // border: "1px solid green",
                      }}
                    >
                      <Grid item style={{ alignSelf: "center" }}>
                        <Grid item>
                          <Typography
                            variant="h6"
                            style={{ color: theme.palette.common.offWhite }}
                          >
                            Cooking
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Cooking
                          className={classes.svgIcon}
                          style={{ height: theme.spacing(5) }}
                        />
                      </Grid>
                    </Grid>
                    {/* item 2 */}
                    <Grid
                      item
                      container
                      justify="center"
                      style={{
                        flexWrap: "nowrap",
                        // border: "1px solid green",
                      }}
                    >
                      <Grid item>
                        <Exercise
                          className={classes.svgIcon}
                          style={{ height: theme.spacing(5) }}
                        />
                      </Grid>
                      <Grid item style={{ alignSelf: "center" }}>
                        <Grid item>
                          <Typography
                            variant="h6"
                            style={{ color: theme.palette.common.offWhite }}
                          >
                            Exercise
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      justify="center"
                      style={{
                        flexWrap: "nowrap",
                        // border: "1px solid green",
                      }}
                    >
                      <Grid item style={{ alignSelf: "center" }}>
                        <Grid item>
                          <Typography
                            variant="h6"
                            style={{ color: theme.palette.common.offWhite }}
                          >
                            Reading Books
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <MenuBookOutlinedIcon
                          className={classes.svgIcon}
                          style={{ height: theme.spacing(5) }}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      container
                      justify="center"
                      style={{
                        flexWrap: "nowrap",
                        // border: "1px solid green",
                      }}
                    >
                      <Grid item>
                        <Stock
                          className={classes.svgIcon}
                          style={{ height: theme.spacing(5) }}
                        />
                      </Grid>
                      <Grid item style={{ alignSelf: "center" }}>
                        <Grid item>
                          <Typography
                            variant="h6"
                            style={{ color: theme.palette.common.offWhite }}
                          >
                            Stock Trading
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      container
                      justify="center"
                      style={{
                        flexWrap: "nowrap",
                        // border: "1px solid green",
                      }}
                    >
                      <Grid item style={{ alignSelf: "center" }}>
                        <Grid item>
                          <Typography
                            variant="h6"
                            style={{ color: theme.palette.common.offWhite }}
                          >
                            Singing
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Music
                          className={classes.svgIcon}
                          style={{ height: theme.spacing(5) }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* </Grid> */}
                </ContainerWithGradientBorder>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        {matchesMD ? hobbyNlanguage : undefined}
      </Grid>
    </Grid>
  );

  return (
    <PageContainer>
      <Paper
        elevation={5}
        className={classes.paper}
        style={{ overflow: "hidden" }}
      >
        <HeaderWave
          marginLeft={-theme.spacing(1)}
          marginRight={-theme.spacing(1)}
        />
        {hello}
        {contact}
        {education}
        {skillsOnDesktop}
        <FooterWave
          marginLeft={-theme.spacing(1)}
          marginRight={-theme.spacing(1)}
        />
      </Paper>
    </PageContainer>
  );
}

// If you're placing an element with respect to absolute position, make sure it is not overflowing the main container
// if you're assigning height and width of a child container in terms of percentage like 100%, then it's IMMEDIATE PARENT CONTAINER must be explicitly assigned width and height either with percentage like 100vw or fixed unit like 2000px or 200em in order for percentage unit in child conatainer to work
