import React, { Fragment } from "react";
import PageContainer from "../components/PageContainer.component";
import Donut from "../components/Donut.component";
import { HeaderWave, FooterWave } from "../components/ShapeDivider.component";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Paper,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { ReactComponent as Work } from "../assets/work.svg";
import { ReactComponent as LangaugeIcon } from "../assets/language.svg";
import { ReactComponent as ProjectIcon } from "../assets/projectIcon.svg";
import { ReactComponent as Education } from "../assets/education.svg";
import { ReactComponent as StackOverflow } from "../assets/stackOverflow.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: "100%",
    height: "auto",
    backgroundColor: theme.palette.primary.main,

    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(20),
    },
    // marginBottom: theme.spacing(matchesXS ? 20 : 10),
    zIndex: 0,
  },
  smallPaper: {
    // backgroundColor: "rgba(38,38,38,1)",
    backgroundColor: theme.palette.common.paperLayer,

    marginBottom: theme.spacing(1),
    height: theme.spacing(30),
  },
  legends: {
    "& span": {
      color: theme.palette.common.offWhite,
      fontSize: theme.spacing(2.5),
      marginLeft: theme.spacing(1),
    },
    "& div": {
      fontSize: "0.8rem",
      color: theme.palette.secondary.main,
      // border: "1px solid blue",
    },
  },
}));

export default function ShapeDivider() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  function Circle({ color }) {
    return (
      <p
        style={{
          display: "inline-block",
          width: theme.spacing(1),
          height: theme.spacing(1),
          borderRadius: "50%",
          backgroundColor: color,
        }}
      />
    );
  }

  function WebTechnologies() {
    return (
      <Paper
        elevation={3}
        className={classes.smallPaper}
        style={{ height: theme.spacing(45) }}
      >
        <Grid container style={{ flexWrap: "nowrap" }}>
          <Grid item container style={{ width: theme.spacing(50) }}>
            <Donut width={350} height={350} donutThickness={90} />
          </Grid>
          <Grid
            item
            container
            justify="center"
            direction="column"
            style={{ width: "100%" }}
            className={classes.legends}
          >
            <Grid
              item
              container
              alignItems="flex-start"
              justify="center"
              style={{ flexWrap: "nowrap", marginBottom: theme.spacing(2) }}
              classesName={classes.top}
            >
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item>
                  <Circle color={theme.palette.common.coreWeb} />
                  <Typography variant="span">Core Web</Typography>
                </Grid>
                <Grid item>
                  <Typography component="div">HTML</Typography>
                  <Typography component="div">CSS</Typography>
                  <Typography component="div">JAVASCRIPT</Typography>
                </Grid>
              </Grid>

              <Grid
                item
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item>
                  <Circle color={theme.palette.common.library} />
                  <Typography variant="span">Library</Typography>
                </Grid>
                <Grid item style={{ marginLeft: theme.spacing(6) }}>
                  <Typography component="div">REACT</Typography>
                  <Typography component="div">REACT-ROUTER</Typography>
                  <Typography component="div">REACT-REDUX</Typography>
                  <Typography component="div">MATERIAL-UI</Typography>
                  <Typography component="div">REACT-SPRING</Typography>
                  <Typography component="div">VISX</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              container
              alignItems="flex-start"
              justify="center"
              style={{
                flexWrap: "nowrap",
              }}
              className={classes.bottom}
            >
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item>
                  <Circle color={theme.palette.common.runtime} />
                  <Typography variant="span">Runtime</Typography>
                </Grid>
                <Grid item style={{ marginLeft: -theme.spacing(4) }}>
                  <Typography component="div">NODE</Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item>
                  <Circle color={theme.palette.common.database} />
                  <Typography variant="span">Database</Typography>
                </Grid>
                <Grid item>
                  <Typography component="div">MONGODB</Typography>
                  <Typography component="div">PosgreSQL</Typography>
                  <Typography component="div">Redis</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }

  function ProjectExperienceDegree() {
    // #69F0AE
    const NumberDisplay = ({
      name,
      Icon,
      count,
      accentColor,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
    }) => {
      return (
        <Grid
          item
          style={{
            height: matchesSM ? theme.spacing(12) : theme.spacing(16),
            width: matchesSM ? theme.spacing(24) : theme.spacing(32),
            borderRadius: theme.spacing(1),
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            marginBottom: marginBottom,
          }}
        >
          <Paper
            elevation={3}
            className={classes.smallPaper}
            style={{
              height: matchesSM ? theme.spacing(12) : theme.spacing(16),
              width: matchesSM ? theme.spacing(24) : theme.spacing(32),
              borderRadius: theme.spacing(1),
            }}
          >
            <Grid
              container
              justify="space-between"
              style={{
                width: "100%",
                height: "100%",
                flexWrap: "nowrap",
              }}
            >
              {/* content */}

              <Grid
                item
                container
                style={{
                  marginLeft: theme.spacing(2),
                  marginTop: theme.spacing(1),
                }}
              >
                <Grid
                  item
                  style={{
                    fontSize: matchesSM ? "1rem" : "1.4rem",
                    color: theme.palette.common.offWhite,
                    height: theme.spacing(5),
                  }}
                >
                  {name}
                </Grid>
                <Grid item style={{ height: theme.spacing(5) }}>
                  {Icon}
                </Grid>
                <Grid
                  container
                  justify="center"
                  style={{
                    color: accentColor,
                    fontSize: "1.5rem",
                    marginTop: -theme.spacing(3),
                    marginLeft: -theme.spacing(2),
                  }}
                >
                  {count}
                </Grid>
              </Grid>

              {/* green design */}
              <Grid
                item
                style={{
                  backgroundColor: theme.palette.accent.main,
                  width: theme.spacing(8),
                  borderTopRightRadius: theme.spacing(2),
                  borderBottomRightRadius: theme.spacing(2),
                  opacity: 0.8,
                }}
              />
            </Grid>
          </Paper>
        </Grid>
      );
    };
    return (
      <React.Fragment>
        <Grid container justify={matchesSM ? "center" : "space-between"}>
          <NumberDisplay
            name="Project"
            Icon={
              <ProjectIcon
                style={{
                  fill: theme.palette.common.offWhite,
                  marginLeft: theme.spacing(2),
                  width: theme.spacing(4),
                }}
              />
            }
            count="18"
            accentColor={theme.palette.secondary.main}
            marginRight={theme.spacing(2)}
            marginTop={theme.spacing(2)}
            marginBottom={theme.spacing(2)}
          />
          <NumberDisplay
            name="Experience"
            Icon={
              <Work
                style={{
                  fill: theme.palette.common.offWhite,
                  marginLeft: matchesSM ? theme.spacing(1) : theme.spacing(2),
                  width: matchesSM ? theme.spacing(3) : theme.spacing(4),
                }}
              />
            }
            count="1"
            accentColor={theme.palette.secondary.main}
            marginRight={matchesMD ? "" : theme.spacing(2)}
            marginTop={theme.spacing(2)}
            marginBottom={theme.spacing(2)}
          />
          <NumberDisplay
            name="Degree"
            Icon={
              <Education
                style={{
                  fill: theme.palette.common.offWhite,
                  marginLeft: theme.spacing(2),
                  width: theme.spacing(5),
                  marginTop: -theme.spacing(1.8),
                }}
              />
            }
            count="1"
            accentColor={theme.palette.secondary.main}
            marginRight={theme.spacing(2)}
            marginTop={theme.spacing(2)}
            marginBottom={theme.spacing(2)}
          />
          <NumberDisplay
            name="Language"
            Icon={
              <LangaugeIcon
                style={{
                  fill: theme.palette.common.offWhite,
                  marginLeft: theme.spacing(1.5),
                  width: theme.spacing(4),
                }}
              />
            }
            count="4"
            accentColor={theme.palette.secondary.main}
            marginTop={theme.spacing(2)}
            marginBottom={theme.spacing(2)}
          />
        </Grid>
      </React.Fragment>
    );
  }
  // svg:nth-child(1) > path:nth-child(27)
  // <path xmlns="http://www.w3.org/2000/svg" d="M42 31l-2.2-.2c-1.7-.1-2.3-.8-2.3-2 0-1.4 1-2.2 3-2.2 1.3-.1 2.6.3 3.6 1.1l1.3-1.3a7.5 7.5 0 00-4.8-1.4c-2.9 0-4.9 1.5-4.9 3.9 0 2.2 1.4 3.4 4 3.6l2.2.2c1.6.1 2.2.8 2.2 2 0 1.6-1.4 2.4-3.6 2.4-1.6.1-3.1-.5-4.2-1.6L35 36.8c1.5 1.4 3.5 2 5.5 1.9 3.2 0 5.5-1.5 5.5-4.1 0-2.6-1.6-3.4-4-3.6zm15.8-6.1c-2.2 0-3.5.4-4.7 1.9l1.3 1.3a3.6 3.6 0 013.4-1.5c2.5 0 3.4 1 3.4 2.9v1.3h-4c-3 0-4.6 1.5-4.6 3.9 0 1 .3 2 1 2.7.8.9 1.9 1.2 3.8 1.2 1.4.1 2.9-.4 3.9-1.4v1.3h2v-9.1c-.1-2.9-1.9-4.5-5.5-4.5zm3.4 8.9c.1.8-.1 1.7-.7 2.3a4 4 0 01-3 .9c-2.1 0-3.1-.7-3.1-2.3 0-1.6 1-2.4 3-2.4h3.8v1.5zm9.7-7.1c1.2 0 2.4.5 3.1 1.5l1.3-1.3a5.4 5.4 0 00-4.4-2c-3.4 0-5.9 2.3-5.9 6.9 0 4.6 2.6 6.9 5.9 6.9 1.7.1 3.3-.7 4.4-2L74 35.4c-.7 1-1.9 1.5-3.1 1.5-1.2.1-2.4-.5-3.1-1.5-.7-1.1-1-2.3-.9-3.6-.1-1.3.2-2.5.9-3.6.7-1 1.9-1.6 3.1-1.5zm16.8-1.6h-2.4L79.2 31V19.1h-2v19.4h2v-4.9l2.4-2.4 4.5 7.3h2.4l-5.6-8.6 4.8-4.8zm9.2-.2c-1.6 0-3.2.5-4.3 1.7-1.3 1.3-1.6 3-1.6 5.4 0 2.5.3 4.1 1.6 5.4a6.1 6.1 0 004.3 1.7c1.6.1 3.2-.5 4.3-1.7 1.3-1.3 1.6-2.9 1.6-5.4 0-2.5-.3-4-1.6-5.4a5.4 5.4 0 00-4.3-1.7zm1.7 10.5c-.9.8-2.3.8-3.2 0-.7-.7-.8-2-.8-3.4s.1-2.7.8-3.4c.9-.8 2.3-.8 3.2 0 .7.7.8 2 .8 3.4 0 1.5-.1 2.7-.8 3.4zM112.2 25l-2.8 8.6-2.8-8.6h-3.7l5.2 14h2.7l5.1-14h-3.7zm9.6 0c-3.6 0-6.1 2.5-6.1 7 0 5.7 3.2 7.2 6.5 7.2 2 .1 4-.7 5.3-2.2l-2.1-2c-.8.8-2 1.3-3.2 1.2a3 3 0 01-3.1-2.7v-.4h8.7v-1.6c.1-3.8-2.1-6.6-6-6.6zm-2.7 5.7l.3-1.5c.4-.9 1.3-1.4 2.3-1.4 1 0 1.9.5 2.3 1.4l.3 1.5h-5.2zm13.3-4.3v-1.3H129v14h3.5v-8.4c0-1.3.8-2.4 2.1-2.6h.2c.7 0 1.4.3 1.8.8l2.6-2.6A4.1 4.1 0 00136 25c-1.3 0-2.6.4-3.5 1.4zm7.6-2.8V39h3.5V28h2.6v-2.7h-2.6v-1.5c0-.6.3-1.2 1-1.3h1.5v-3h-2a3.9 3.9 0 00-4 3.8v.3zm20.3 1.3c-1.6 0-3.2.5-4.3 1.7-1.3 1.3-1.6 3-1.6 5.4 0 2.5.3 4.1 1.6 5.4a6.1 6.1 0 004.3 1.7c1.6.1 3.2-.5 4.3-1.7 1.3-1.3 1.6-2.9 1.6-5.4 0-2.5-.3-4-1.6-5.4a5.4 5.4 0 00-4.3-1.7zm1.7 10.5c-.9.8-2.3.8-3.2 0-.7-.7-.8-2-.8-3.4s.1-2.7.8-3.4c.9-.8 2.3-.8 3.2 0 .7.7.8 2 .8 3.4 0 1.5-.1 2.7-.8 3.4zM182.7 25l-2.3 8.6-2.9-8.6H175l-2.8 8.7-2.3-8.6h-3.7l4.3 14h2.9l2.9-8.8 2.9 8.8h3l4.3-14h-3.8zm-31.2 9.8V19.6H148V35a3.8 3.8 0 003.6 4h2.5v-3h-1.3c-.6.1-1.1-.2-1.3-.8v-.4zm-98.8-9.4H49V21h-2v13.9c0 2 1.1 3.6 3.4 3.6h1.4v-1.7h-1c-1.3 0-1.8-.7-1.8-2v-7.7h1.9l1.8-1.7z" fill="#222426"/>
  // <path xmlns="http://www.w3.org/2000/svg" d="M26 41v-9h4v13H0V32h4v9h22z" fill="#BCBBBB"/>
  // <path xmlns="http://www.w3.org/2000/svg" d="M23 34l.8-3-16.1-3.3L7 31l16 3zM9.2 23.2l15 7 1.4-3-15-7-1.4 3zm4.2-7.4L26 26.4l2.1-2.5-12.7-10.6-2.1 2.5zM21.5 8l-2.7 2 9.9 13.3 2.7-2L21.5 8zM7 38h16v-3H7v3z" fill="#F48024"/>
  function StackOverFlowStatus() {
    return (
      // <Grid container justify={matchesSM ? "center" : "space-between"}>
      <Grid item>
        <Paper
          elevation={3}
          className={classes.smallPaper}
          style={{
            height: "auto",
            paddingBottom: theme.spacing(4.5),
            paddingTop: theme.spacing(1),
          }}
        >
          <Grid container justify="center">
            <Grid item>
              <StackOverflow />
            </Grid>
            <Grid item container justify="space-around">
              <Grid item style={{ color: "#4e6f8a" }}>
                <Typography
                  component="span"
                  style={{
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                    color: theme.palette.common.offWhite,
                  }}
                >
                  Reputation
                </Typography>
                <Circle color="#4e6f8a" />
                <Typography
                  component="span"
                  style={{
                    marginLeft: theme.spacing(0.5),
                    marginRight: theme.spacing(1),
                    fontSize: "1.4rem",
                  }}
                >
                  131
                </Typography>
              </Grid>
              <Grid item style={{ color: "rgba(239, 240, 241,0.85)" }}>
                <Typography
                  component="span"
                  style={{
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                    color: theme.palette.common.offWhite,
                  }}
                >
                  Silver
                </Typography>
                <Circle color="rgba(239, 240, 241,0.85)" />
                <Typography
                  component="span"
                  style={{
                    marginLeft: theme.spacing(0.5),
                    marginRight: theme.spacing(1),
                    fontSize: "1.4rem",
                  }}
                >
                  1
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  color: "rgb(171, 130, 95)",
                }}
              >
                <Typography
                  component="span"
                  style={{
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                    color: theme.palette.common.offWhite,
                  }}
                >
                  Bronze
                </Typography>
                <Circle color="rgb(171, 130, 95)" />
                <Typography
                  component="span"
                  style={{
                    marginLeft: theme.spacing(0.5),
                    marginRight: theme.spacing(1),
                    fontSize: "1.4rem",
                  }}
                >
                  5
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      // </Grid>
    );
  }

  function OnlineCourse() {
    return (
      <Paper elevation={3} className={classes.smallPaper}>
        Online WebDev Courses
      </Paper>
    );
  }
  // Next Skillsets in my wishlish: 2 Typescript and reactNative

  return (
    <PageContainer>
      <Paper elevation={5} className={classes.paper}>
        <HeaderWave />
        <WebTechnologies />
        <ProjectExperienceDegree />
        <StackOverFlowStatus />
        <OnlineCourse />
        <FooterWave />
      </Paper>
    </PageContainer>
  );
}
