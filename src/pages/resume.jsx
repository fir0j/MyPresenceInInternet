import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import dp from "../assets/founder3.png";
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

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    flexGrow: 1,
    flexWrap: "nowrap",
    marginBottom: theme.spacing(5),
  },
  name: {
    border: `3px solid ${theme.palette.accent.main}`,
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
    marginLeft: theme.spacing(1),
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
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.primary.main,
    fill: theme.palette.primary.main,
    stock: theme.palette.primary.main,
    padding: theme.spacing(2),
  },

  education: {
    // border: `1px solid ${theme.palette.accent.main}`,
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
  hobby: {
    // border: `1px solid ${theme.palette.accent.main}`,
    // marginTop: theme.spacing(16),
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
            <Typography variant="h3">FIROJ SIDDIKI</Typography>
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
              <Gallery
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
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
      // style={{ border: "1px solid orange" }}
    >
      <Grid
        item
        container
        justify="center"
        className={classes.contact}
        // style={{ border: "1px solid orange" }}
      >
        <Grid
          item
          container
          style={{
            position: "relative",
            border: "1px solid grey",
            maxWidth: theme.spacing(12),
            minWidth: theme.spacing(8),
            maxHeight: theme.spacing(25),
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
              left: -theme.spacing(6),
            }}
          >
            <Telephone className={classes.svgIcon} />
          </Grid>
        </Grid>

        <Grid
          item
          xl={8}
          container
          justify="center"
          style={{
            border: `3px solid ${theme.palette.accent.main}`,
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
                <Typography variant="h4">Contact</Typography>
              </Grid>
            </Grid>

            <Grid item container style={{ maxHeight: "200px" }}>
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
          marginLeft: theme.spacing(8),
          marginTop: theme.spacing(3),
          maxHeight: matchesLG ? theme.spacing(30) : theme.spacing(30),
        }}
      >
        {/* education icon */}
        <Grid
          item
          style={{
            position: "absolute",
            top: 0,
            left: -theme.spacing(8),
            backgroundColor: theme.palette.common.dark,
          }}
        >
          <Education
            style={{ width: theme.spacing(12) }}
            className={classes.svgIcon}
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
            height: theme.spacing(matchesLG ? 8 : 10),
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
    <Grid item container className={classes.container}>
      <Grid item container>
        <Grid
          item
          container
          justify="center"
          // style={{ border: "1px solid red" }}
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
              border: `1px solid ${theme.palette.primary.main}`,
              height: theme.spacing(5),
              borderRight: "none",
              borderBottom: "none",
              backgroundColor: theme.palette.common.dark,
              marginTop: theme.spacing(8),
            }}
          >
            <Work
              className={classes.svgIcon}
              style={{ position: "absolute", top: -theme.spacing(7), right: 0 }}
            />
          </Grid>
        </Grid>

        {/* work experience 1 */}
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          style={{ height: theme.spacing(11) }}
        >
          <Grid item>
            <Typography variant="h4">Work Experience</Typography>
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
                <Typography variant="h6">
                  As Frontend Intern @Flipr, Bangalore, India
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  It is a startup company. They selected me as intern through
                  thier Practical Web Development Test.
                </Typography>
                <Typography variant="body1">
                  I built 3 Projects before the selection process for me got
                  over.
                </Typography>
                <Typography variant="body1">
                  They qualified me as intern for their company whithin 40 days
                  though the selection process was of 90 days.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* work experience 2 */}
          <Grid
            item
            container
            justify="space-between"
            style={{
              flexWrap: "nowrap",
              marginTop: theme.spacing(2),
              marginBottom: theme.spacing(2),
            }}
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
                <Typography variant="h6">
                  As Frontend Developer @Flipr, Bangalore, India
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  I just built two Real World Projects as their intern before
                  they offered me job position
                </Typography>
                <Typography variant="body1">
                  Unfortunately we worked together for 1 Month only, after that
                  things didn't work out.
                </Typography>
              </Grid>
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
          // border: "1px solid blue",
        }}
      >
        <Grid
          container
          style={{
            position: "absolute",
            border: `3px solid ${theme.palette.accent.main}`,
            padding: theme.spacing(1),
            bottom: -theme.spacing(25),
            top: matchesXL ? -theme.spacing(8) : undefined,
            height: matchesXL
              ? matchesLG
                ? theme.spacing(115)
                : theme.spacing(100)
              : undefined,
          }}
        >
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            style={{ height: theme.spacing(11) }}
          >
            <Grid item>
              <Typography variant="h4">Education</Typography>
            </Grid>
          </Grid>
          {/* engineering education */}
          <Grid container style={{ height: "80%" }}>
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
                justify="center"
                alignItems="flex-end"
              >
                <Grid item>
                  <Typography variant="h6" align="right">
                    CMR Institue Of Technology, Bangalore, India
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" align="right">
                    It persued my academic career in COMPUTER SCIENCE & ENGINEER
                    at this place.
                  </Typography>
                  <Typography variant="body1" align="right">
                    I graduated from this course with 6.4 CGPA out 10 in 2020.
                  </Typography>
                </Grid>
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

            {/* high school */}
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
                justify="center"
                alignItems="flex-end"
              >
                <Grid item>
                  <Typography variant="h6" align="right">
                    Little Angles' College, Kathmandu, Nepal
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" align="right">
                    Here I majored in Physics and Math.
                  </Typography>
                  <Typography variant="body1" align="right">
                    I Passed my high school with 59.9%
                  </Typography>
                </Grid>
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
            {/* Schooling */}
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
                justify="center"
                alignItems="flex-end"
              >
                <Grid item>
                  <Typography variant="h6" align="right">
                    Sayapatri English H.S School, Nawalparasi, Nepal
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" align="right">
                    I passed SLC with 79.87% from this school.
                  </Typography>
                </Grid>
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
  );

  const skills = (
    <Grid item container justify="space-around" className={classes.container}>
      <Grid
        item
        container
        style={{
          width: "100%",
          flexWrap: "nowrap",
          // border: "1px solid yellow",
        }}
      >
        {/* language */}
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
              // border: "1px solid red",
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
                  border: `1px solid ${theme.palette.primary.main}`,
                  borderRight: "none",
                  borderBottom: "none",
                  backgroundColor: theme.palette.common.dark,
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

            <Grid
              item
              container
              justify="center"
              style={{
                position: "relative",
                border: `3px solid ${theme.palette.accent.main}`,
                padding: theme.spacing(1),
                paddingBottom: theme.spacing(5),
                height: "calc(100% - 72px)",
              }}
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
                    <Typography variant="h4">Language</Typography>
                  </Grid>
                </Grid>
                <Grid item container direction="column">
                  <Grid item>
                    <Typography variant="h6">English</Typography>
                  </Grid>
                  <LinearProgressGraph
                    progressPercentage="85%"
                    height={theme.spacing(1)}
                    showPercentage={false}
                  />
                </Grid>
                <Grid item container direction="column">
                  <Grid item>
                    <Typography variant="h6">Nepali</Typography>
                  </Grid>
                  <LinearProgressGraph
                    progressPercentage="90%"
                    height={theme.spacing(1)}
                    showPercentage={false}
                  />
                </Grid>
                <Grid item container direction="column">
                  <Grid item>
                    <Typography variant="h6">Bhojpuri</Typography>
                  </Grid>
                  <LinearProgressGraph
                    progressPercentage="95%"
                    height={theme.spacing(1)}
                    showPercentage={false}
                  />
                </Grid>
                <Grid item container direction="column">
                  <Grid item>
                    <Typography variant="h6">Hindi</Typography>
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

        {/* technical skills */}
        <Grid
          item
          container
          direction="column"
          justify="flex-end"
          style={{
            position: "relative",
            width: matchesXL
              ? matchesLG
                ? theme.spacing(200)
                : theme.spacing(400)
              : undefined,
            // border: `1px solid red`,
          }}
        >
          <Grid
            item
            container
            style={{ position: "absolute", bottom: -theme.spacing(15) }}
          >
            <Grid
              item
              container
              justify="center"
              style={{
                position: "relative",
                height: theme.spacing(55),
                // border: `1px solid yellow`,
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
                  <Typography variant="h4">Technical Proficiency</Typography>
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
                    value={90}
                    color="secondary"
                    size={matchesLG ? 100 : 120}
                    label="HTML"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={85}
                    color="secondary"
                    size={matchesLG ? 100 : 120}
                    label="CSS"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={80}
                    color="secondary"
                    size={matchesLG ? 100 : 120}
                    label="JAVASCRIPT"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={85}
                    color="secondary"
                    size={matchesLG ? 100 : 120}
                    label="REACT"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={80}
                    color="secondary"
                    size={matchesLG ? 100 : 120}
                    label="Material-UI"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={65}
                    color="secondary"
                    size={matchesLG ? 100 : 120}
                    label="REDUX"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={80}
                    color="secondary"
                    size={matchesLG ? 100 : 120}
                    label="NodeJS"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={80}
                    color="secondary"
                    size={matchesLG ? 100 : 120}
                    label="MongoDB"
                  />
                </Grid>
                <Grid item>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={70}
                    color="secondary"
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
                  border: `1px solid ${theme.palette.primary.main}`,
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
                  border: `1px solid ${theme.palette.primary.main}`,
                  borderBottom: "none",
                  borderLeft: "none",
                  backgroundColor: theme.palette.common.dark,
                  height: theme.spacing(9),
                  marginTop: theme.spacing(9),
                }}
              >
                <HobbyIcon
                  className={classes.svgIcon}
                  style={{
                    position: "absolute",
                    left: -theme.spacing(6),
                    top: -theme.spacing(6),
                  }}
                />
              </Grid>
              <Grid item container xl lg md sm xs />
            </Grid>
            <Grid
              item
              container
              justify="flex-end"
              style={{
                position: "relative",
                // border: "1px solid blue",
              }}
            >
              <Grid
                item
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{
                  flexWrap: "nowrap",
                  border: `3px solid ${theme.palette.accent.main}`,
                  maxWidth: theme.spacing(35),
                  marginBottom: theme.spacing(5),
                }}
              >
                <Grid
                  item
                  container
                  justify="center"
                  alignItems="center"
                  style={{ height: theme.spacing(11) }}
                >
                  <Grid item>
                    <Typography variant="h4">Hobby</Typography>
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
                        <Typography variant="h6">Cooking</Typography>
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
                        <Typography variant="h6">Exercise</Typography>
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
                        <Typography variant="h6">Reading Books</Typography>
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
                        <Typography variant="h6">Stock Trading</Typography>
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
                        <Typography variant="h6">Singing</Typography>
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
              </Grid>
            </Grid>
          </Grid>
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
          marginBottom: "600px",
        }}
      >
        {hello}
        {contact}
        {education}
        {skills}
      </Grid>
    </Fragment>
  );
}
