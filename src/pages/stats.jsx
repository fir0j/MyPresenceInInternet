import React, { useState } from "react";
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
} from "@material-ui/core";
import { ReactComponent as Work } from "../assets/work.svg";
import { ReactComponent as LangaugeIcon } from "../assets/language.svg";
import { ReactComponent as ProjectIcon } from "../assets/projectSvgIcon.svg";
import { ReactComponent as Education } from "../assets/education.svg";
import { ReactComponent as StackOverflow } from "../assets/stackOverflow.svg";
import { ReactComponent as ExternalLink } from "../assets/external-link.svg";
import { animated, useSpring, config } from "react-spring";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: "100%",
    height: "auto",
    borderRadius: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
    zIndex: 0,
  },

  smallPaper: {
    backgroundColor: theme.palette.background.microPaper,
    height: theme.spacing(30),
  },

  legends: {
    "& span": {
      color: theme.palette.text.secondary,
      fontSize: theme.spacing(2.5),
      marginLeft: theme.spacing(1),
    },
    "& div": {
      fontSize: "0.8rem",
      color: theme.palette.text.tertiary,
    },
  },
}));

export default function ShapeDivider({ style }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const AnimatedTypography = animated(Typography);
  // const [count, setCount] = useState(0);
  // const { number } = useSpring({
  //   from: { number: 0 },
  //   number: Number(count),
  //   delay: 200,
  //   config: config.molasses,
  // });

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
              className={classes.top}
            >
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item>
                  <Circle color={theme.palette.background.library} />
                  <Typography component="span">Core Web</Typography>
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
                  <Circle color={theme.palette.background.coreWeb} />
                  <Typography component="span">Library</Typography>
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
                  <Circle color={theme.palette.background.runtime} />
                  <Typography component="span">Runtime</Typography>
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
                  <Circle color={theme.palette.background.database} />
                  <Typography component="span">Database</Typography>
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
      const { number } = useSpring({
        from: { number: 0 },
        number: Number(count),
        delay: 200,
        config: config.molasses,
      });

      return (
        <Grid
          container
          justify="space-between"
          item
          style={{
            width: theme.spacing(32),
            height: theme.spacing(16),
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
              width: "inherit",
              height: "inherit",
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
                    color: theme.palette.text.tertiary,
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
                  <animated.span>
                    {number.to((n) => n.toFixed(0))}
                  </animated.span>
                </Grid>
              </Grid>

              {/* green design */}
              <Grid
                item
                style={{
                  backgroundColor: theme.palette.secondary.main,
                  width: theme.spacing(8),
                  borderTopRightRadius: theme.spacing(1),
                  borderBottomRightRadius: theme.spacing(1),
                  opacity: 0.95,
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
                  fill: theme.palette.text.tertiary,
                  marginLeft: theme.spacing(1),
                  width: theme.spacing(4),
                }}
              />
            }
            count="18"
            accentColor={theme.palette.common.white}
            marginTop={theme.spacing(2)}
            marginBottom={theme.spacing(2)}
            marginRight={theme.spacing(2)}
            marginLeft={matchesXS ? theme.spacing(2) : undefined}
          />
          <NumberDisplay
            name="Experience"
            Icon={
              <Work
                style={{
                  fill: theme.palette.text.tertiary,
                  marginLeft: matchesSM ? theme.spacing(1) : theme.spacing(2),
                  width: matchesSM ? theme.spacing(3) : theme.spacing(4),
                }}
              />
            }
            count="1"
            accentColor={theme.palette.common.white}
            marginTop={matchesXS ? undefined : theme.spacing(2)}
            marginBottom={theme.spacing(2)}
            marginRight={theme.spacing(2)}
            marginLeft={matchesXS ? theme.spacing(2) : undefined}
          />
          <NumberDisplay
            name="Degree"
            Icon={
              <Education
                style={{
                  fill: theme.palette.text.tertiary,
                  marginLeft: theme.spacing(2),
                  width: theme.spacing(5),
                  marginTop: -theme.spacing(1.8),
                }}
              />
            }
            count="1"
            accentColor={theme.palette.common.white}
            marginTop={matchesXS ? undefined : theme.spacing(2)}
            marginBottom={theme.spacing(2)}
            marginRight={theme.spacing(2)}
            marginLeft={matchesXS ? theme.spacing(2) : undefined}
          />
          <NumberDisplay
            name="Language"
            Icon={
              <LangaugeIcon
                style={{
                  fill: theme.palette.text.tertiary,
                  marginLeft: theme.spacing(1.5),
                  width: theme.spacing(4),
                }}
              />
            }
            count="4"
            accentColor={theme.palette.common.white}
            marginTop={matchesXS ? undefined : theme.spacing(2)}
            marginBottom={theme.spacing(2)}
            marginRight={matchesMD ? theme.spacing(2) : undefined}
            marginLeft={matchesXS ? theme.spacing(2) : undefined}
          />
        </Grid>
      </React.Fragment>
    );
  }

  function StackOverFlowStatus() {
    const { reputation } = useSpring({
      from: { reputation: 0 },
      reputation: 131,
      delay: 200,
      config: config.molasses,
    });

    const { bronze } = useSpring({
      from: { bronze: 0 },
      bronze: 5,
      delay: 200,
      config: config.molasses,
    });

    return (
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
              <StackOverflow style={{ fill: theme.palette.secondary.main }} />
            </Grid>
            <Grid item container justify="space-around">
              <Grid item style={{ color: "#4e6f8a" }}>
                <Typography
                  component="span"
                  style={{
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                    color: theme.palette.text.secondary,
                  }}
                >
                  Reputation
                </Typography>
                <Circle color="#4e6f8a" />
                <AnimatedTypography
                  component="span"
                  style={{
                    marginLeft: theme.spacing(0.5),
                    marginRight: theme.spacing(1),
                    fontSize: "1.4rem",
                  }}
                >
                  {reputation.to((n) => n.toFixed(0))}
                </AnimatedTypography>
              </Grid>
              <Grid item style={{ color: "rgba(239, 240, 241,0.85)" }}>
                <Typography
                  component="span"
                  style={{
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                    color: theme.palette.text.secondary,
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
                    color: theme.palette.text.secondary,
                  }}
                >
                  Bronze
                </Typography>
                <Circle color="rgb(171, 130, 95)" />
                <AnimatedTypography
                  component="span"
                  style={{
                    marginLeft: theme.spacing(0.5),
                    marginRight: theme.spacing(1),
                    fontSize: "1.4rem",
                  }}
                >
                  {bronze.to((n) => n.toFixed(0))}
                </AnimatedTypography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }

  function CourseAndWishlist() {
    const { courses } = useSpring({
      from: { courses: 0 },
      courses: 4,
      delay: 200,
      config: config.molasses,
    });

    const { skills } = useSpring({
      from: { skills: 0 },
      skills: 2,
      delay: 200,
      config: config.molasses,
    });

    return (
      <Grid
        item
        style={{
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(4),
        }}
        container
        justify="space-between"
      >
        <Grid item xl lg md={12} sm={12} xs={12}>
          <Paper
            elevation={3}
            className={classes.smallPaper}
            style={{
              height: "auto",
              paddingBottom: theme.spacing(4.5),
              paddingTop: theme.spacing(1),
              marginBottom: matchesMD ? theme.spacing(2) : undefined,
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
                    color: theme.palette.text.tertiary,
                    paddingLeft: matchesSM ? theme.spacing(1) : undefined,
                  }}
                >
                  Web Development Courses Online
                </Typography>
              </Grid>

              <Grid item>
                <AnimatedTypography
                  component="div"
                  style={{
                    fontSize: "1.5rem",
                    color: theme.palette.text.secondary,
                    marginBottom: theme.spacing(2),
                    marginTop: theme.spacing(2),
                  }}
                >
                  {courses.to((n) => n.toFixed(0))}
                </AnimatedTypography>
              </Grid>
              <Grid item>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.text.tertiary,
                    marginBottom: theme.spacing(1.5),
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                  }}
                >
                  <Circle
                    color={theme.palette.text.tertiary}
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
                        fill: theme.palette.text.tertiary,
                      }}
                    />
                  </a>
                </Typography>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.text.tertiary,
                    marginBottom: theme.spacing(1.5),
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                  }}
                >
                  <Circle
                    color={theme.palette.text.tertiary}
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
                        fill: theme.palette.text.tertiary,
                      }}
                    />
                  </a>
                </Typography>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.text.tertiary,
                    marginBottom: theme.spacing(1.5),
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                  }}
                >
                  <Circle
                    color={theme.palette.text.tertiary}
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
                        fill: theme.palette.text.tertiary,
                      }}
                    />
                  </a>
                </Typography>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.text.tertiary,
                    marginBottom: theme.spacing(1.5),
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                  }}
                >
                  <Circle
                    color={theme.palette.text.tertiary}
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
                        fill: theme.palette.text.tertiary,
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
              height: "100%",
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
                    color: theme.palette.text.tertiary,
                    paddingLeft: matchesSM ? theme.spacing(1) : "",
                  }}
                >
                  Upcoming Technology into my Skillset
                </Typography>
              </Grid>

              <Grid item>
                <AnimatedTypography
                  component="div"
                  style={{
                    fontSize: "1.5rem",
                    color: theme.palette.text.secondary,
                    marginBottom: theme.spacing(2),
                    marginTop: theme.spacing(2),
                  }}
                >
                  {skills.to((n) => n.toFixed(0))}
                </AnimatedTypography>
              </Grid>
              <Grid item>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.text.tertiary,
                  }}
                >
                  <Circle
                    color={theme.palette.text.tertiary}
                    marginRight={theme.spacing(1)}
                  />
                  Typescript
                </Typography>
                <Typography
                  component="div"
                  style={{
                    fontSize: "1rem",
                    color: theme.palette.text.tertiary,
                  }}
                >
                  <Circle
                    color={theme.palette.text.tertiary}
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
    <animated.div
      style={{
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        ...style,
      }}
    >
      <WebTechnologies />
      <ProjectExperienceDegree />
      <StackOverFlowStatus />
      <CourseAndWishlist />
    </animated.div>
  );
}
