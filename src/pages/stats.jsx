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
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  function WebTechnologies() {
    const Circle = ({ color }) => (
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
    const NumberDisplay = ({ name, Icon, count, accentColor }) => {
      return (
        <Grid
          item
          style={{
            height: matchesSM ? theme.spacing(12) : theme.spacing(16),
            width: matchesSM ? theme.spacing(24) : theme.spacing(32),
            borderRadius: theme.spacing(1),
            margin: theme.spacing(2),
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
        {/* Project WorkExperience Degree SpokenLanguage */}
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
          />
        </Grid>
      </React.Fragment>
    );
  }

  function StackOverFlowStatus() {
    return (
      <Paper elevation={3} className={classes.smallPaper}>
        reputation, silver and broze
      </Paper>
    );
  }

  function OnlineCourse() {
    return (
      <Paper elevation={3} className={classes.smallPaper}>
        Online WebDev Courses
      </Paper>
    );
  }

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
