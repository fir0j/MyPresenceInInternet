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
import { ReactComponent as Work } from "../assets/work.svg";
import { ReactComponent as LangaugeIcon } from "../assets/language.svg";
import { ReactComponent as ProjectIcon } from "../assets/projectSvgIcon.svg";
import { ReactComponent as Education } from "../assets/education.svg";
import { ReactComponent as StackOverflow } from "../assets/stackOverflow.svg";
import { ReactComponent as ExternalLink } from "../assets/external-link.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: "100%",
    height: "auto",
    backgroundColor: theme.palette.primary.main,

    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
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
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  function Circle({ color, marginRight }) {
    return (
      <p
        style={{
          display: "inline-block",
          width: theme.spacing(1),
          height: theme.spacing(1),
          borderRadius: "50%",
          backgroundColor: color,
          marginRight: marginRight ? marginRight : undefined,
        }}
      />
    );
  }

  function WebTechnologies() {
    return (
      <Paper
        elevation={3}
        className={classes.smallPaper}
        style={{
          height: matchesSM ? "auto" : theme.spacing(45),
          paddingBottom: matchesSM ? theme.spacing(1) : "",
        }}
      >
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          style={{ flexWrap: "nowrap" }}
        >
          <Grid
            item
            container
            justify="center"
            style={{ width: matchesSM ? "auto" : theme.spacing(50) }}
          >
            <Donut
              width={matchesMD ? 300 : 350}
              height={matchesMD ? 300 : 350}
              donutThickness={matchesMD ? 80 : 90}
            />
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
            height: matchesSM
              ? matchesXS
                ? theme.spacing(16)
                : theme.spacing(12)
              : theme.spacing(16),
            width: matchesSM
              ? matchesXS
                ? theme.spacing(32)
                : theme.spacing(24)
              : theme.spacing(32),
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
              height: matchesSM
                ? matchesXS
                  ? theme.spacing(16)
                  : theme.spacing(12)
                : theme.spacing(16),
              width: matchesSM
                ? matchesXS
                  ? theme.spacing(32)
                  : theme.spacing(24)
                : theme.spacing(32),
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
                    color: theme.palette.secondary.main,
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
                  fill: theme.palette.secondary.main,
                  marginLeft: theme.spacing(1),
                  width: theme.spacing(4),
                }}
              />
            }
            count="18"
            accentColor={theme.palette.common.offWhite}
            marginRight={theme.spacing(2)}
            marginTop={theme.spacing(2)}
            marginBottom={theme.spacing(2)}
          />
          <NumberDisplay
            name="Experience"
            Icon={
              <Work
                style={{
                  fill: theme.palette.secondary.main,
                  marginLeft: matchesSM ? theme.spacing(1) : theme.spacing(2),
                  width: matchesSM ? theme.spacing(3) : theme.spacing(4),
                }}
              />
            }
            count="1"
            accentColor={theme.palette.common.offWhite}
            marginRight={matchesMD ? theme.spacing(2) : ""}
            marginTop={theme.spacing(2)}
            marginBottom={theme.spacing(2)}
          />
          <NumberDisplay
            name="Degree"
            Icon={
              <Education
                style={{
                  fill: theme.palette.secondary.main,
                  marginLeft: theme.spacing(2),
                  width: theme.spacing(5),
                  marginTop: -theme.spacing(1.8),
                }}
              />
            }
            count="1"
            accentColor={theme.palette.common.offWhite}
            marginRight={theme.spacing(2)}
            marginLeft={matchesMD ? "" : theme.spacing(2)}
            marginTop={theme.spacing(2)}
            marginBottom={theme.spacing(2)}
          />
          <NumberDisplay
            name="Language"
            Icon={
              <LangaugeIcon
                style={{
                  fill: theme.palette.secondary.main,
                  marginLeft: theme.spacing(1.5),
                  width: theme.spacing(4),
                }}
              />
            }
            count="4"
            accentColor={theme.palette.common.offWhite}
            marginTop={theme.spacing(2)}
            marginBottom={theme.spacing(2)}
            marginLeft={matchesXS ? -theme.spacing(2) : ""}
          />
        </Grid>
      </React.Fragment>
    );
  }

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
              <StackOverflow style={{ fill: theme.palette.accent.main }} />
            </Grid>
            <Grid item container justify="space-around">
              <Grid item style={{ color: "#4e6f8a" }}>
                <Typography
                  component="span"
                  style={{
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                    color: theme.palette.secondary.main,
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
                    color: theme.palette.secondary.main,
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
                    color: theme.palette.secondary.main,
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
    );
  }

  function CourseAndWishlist() {
    return (
      <Grid
        item
        style={{ marginTop: theme.spacing(2) }}
        container
        justify="space-between"
      >
        <Grid
          item
          xl
          lg
          md={12}
          sm={12}
          xs={12}
          style={{ marginRight: theme.spacing(1) }}
        >
          <Paper
            elevation={3}
            className={classes.smallPaper}
            style={{
              height: "auto",
              paddingBottom: theme.spacing(4.5),
              paddingTop: theme.spacing(1),
            }}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "1.2rem",
                    color: theme.palette.common.offWhite,
                    paddingLeft: matchesSM ? theme.spacing(1) : "",
                  }}
                >
                  Web Development Courses Online
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1.5rem",
                    color: theme.palette.common.offWhite,
                    marginBottom: theme.spacing(2),
                    marginTop: theme.spacing(2),
                  }}
                >
                  4
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.secondary.main,
                    marginBottom: theme.spacing(1.5),
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                  }}
                >
                  <Circle
                    color={theme.palette.secondary.main}
                    marginRight={theme.spacing(1)}
                  />
                  The Complete Web Developer in 2021: Zero to Mastery
                  <a
                    href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ExternalLink
                      style={{
                        width: theme.spacing(2),
                        marginLeft: theme.spacing(1),
                        fill: theme.palette.secondary.main,
                      }}
                    />
                  </a>
                </Typography>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.secondary.main,
                    marginBottom: theme.spacing(1.5),
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                  }}
                >
                  <Circle
                    color={theme.palette.secondary.main}
                    marginRight={theme.spacing(1)}
                  />
                  Implement High Fidelity Designs with Material-UI and ReactJS
                  <a
                    href="https://www.udemy.com/course/implement-high-fidelity-designs-with-material-ui-and-reactjs/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ExternalLink
                      style={{
                        width: theme.spacing(2),
                        marginLeft: theme.spacing(1),
                        fill: theme.palette.secondary.main,
                      }}
                    />
                  </a>
                </Typography>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.secondary.main,
                    marginBottom: theme.spacing(1.5),
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                  }}
                >
                  <Circle
                    color={theme.palette.secondary.main}
                    marginRight={theme.spacing(1)}
                  />
                  The Complete Junior to Senior Web Developer Roadmap (2021)
                  <a
                    href="https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ExternalLink
                      style={{
                        width: theme.spacing(2),
                        marginLeft: theme.spacing(1),
                        fill: theme.palette.secondary.main,
                      }}
                    />
                  </a>
                </Typography>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.secondary.main,
                    marginBottom: theme.spacing(1.5),
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                  }}
                >
                  <Circle
                    color={theme.palette.secondary.main}
                    marginRight={theme.spacing(1)}
                  />
                  MERN Stack React Node Ecommerce from Scratch to Deployment
                  <a
                    href="https://www.udemy.com/course/react-node-ecommerce/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ExternalLink
                      style={{
                        width: theme.spacing(2),
                        marginLeft: theme.spacing(1),
                        fill: theme.palette.secondary.main,
                      }}
                    />
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid
          item
          xl={5}
          lg={5}
          md={12}
          sm={12}
          xs={12}
          style={{
            marginLeft: matchesMD ? "" : theme.spacing(1),
          }}
        >
          <Paper
            elevation={3}
            className={classes.smallPaper}
            style={{
              height: "98%",
              paddingBottom: theme.spacing(4.5),
              paddingTop: theme.spacing(1),
            }}
          >
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "1.2rem",
                    color: theme.palette.common.offWhite,
                    paddingLeft: matchesSM ? theme.spacing(1) : "",
                  }}
                >
                  Upcoming Technology into my Skillset
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1.5rem",
                    color: theme.palette.common.offWhite,
                    marginBottom: theme.spacing(2),
                    marginTop: theme.spacing(2),
                  }}
                >
                  2
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.secondary.main,
                  }}
                >
                  <Circle
                    color={theme.palette.secondary.main}
                    marginRight={theme.spacing(1)}
                  />
                  Typescript
                </Typography>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.secondary.main,
                  }}
                >
                  <Circle
                    color={theme.palette.secondary.main}
                    marginRight={theme.spacing(1)}
                  />
                  React Native
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }

  return (
    <PageContainer>
      <Paper elevation={5} className={classes.paper}>
        <HeaderWave
          marginLeft={-theme.spacing(2)}
          marginRight={-theme.spacing(2)}
        />
        <WebTechnologies />
        <ProjectExperienceDegree />
        <StackOverFlowStatus />
        <CourseAndWishlist />
        <FooterWave
          marginLeft={-theme.spacing(2)}
          marginRight={-theme.spacing(2)}
        />
      </Paper>
    </PageContainer>
  );
}
