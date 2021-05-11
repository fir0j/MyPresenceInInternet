import React, { Fragment, useState } from "react";
import * as utils from "../utils";
import { ReactComponent as Demo } from "../assets/demo.svg";
import { ReactComponent as HtmlIcon } from "../assets/html5.svg";
import { ReactComponent as CssIcon } from "../assets/css.svg";
import { ReactComponent as JsIcon } from "../assets/javascript.svg";
import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as MuiIcon } from "../assets/mui.svg";
import { ReactComponent as ReactSpringIcon } from "../assets/spring.svg";
import { ReactComponent as ReduxIcon } from "../assets/redux.svg";
import { ReactComponent as NodeIcon } from "../assets/node.svg";

import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Paper,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  IconButton,
  ButtonGroup,
  Chip,
} from "@material-ui/core";

import { ArrowDropDown, ArrowDropUp, GitHub } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    "&:hover": {
      // backgroundColor: "rgba(74, 228, 184,0.8)",
      color: theme.palette.common.offWhite,
    },
  },

  groupedContainedPrimary: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.offWhite,
  },
  cardRoot: {
    maxWidth: theme.spacing(35),
    backgroundColor: theme.palette.common.filterGrey,
    color: theme.palette.common.offWhite,
    border: `1px solid rgba(255, 255, 255,0.2)`,
  },
  media: {
    height: theme.spacing(15),
  },
  cardSvgIcon: {
    fill: theme.palette.secondary.main,
    width: theme.spacing(2.5),
    height: "auto",
    // backgroundColor: theme.palette.primary.main,
    // fill: "rgba(74, 228, 184,0.6)",
  },
}));

export default function Project() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
  const [projects, setProjects] = useState(utils.cardData);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState(null);
  const [isNameArrowUp, setIsNameArrowUp] = useState(true);
  const [isDateArrowUp, setIsDateArrowUp] = useState(true);

  const filterProjects = (filterLabel, rawData) => {
    const processedData = rawData.filter((item) => item.type === filterLabel);
    setProjects(processedData);
  };

  const handleFilter = (filterLabel, rawData) => {
    setSelectedFilter(filterLabel);
    if (filterLabel !== "all") {
      filterProjects(filterLabel, rawData);
    } else {
      setProjects(rawData);
    }
  };

  const handleSort = (sortLabel, filteredData) => {
    if (sortLabel !== sortBy) {
      setSortBy(sortLabel);
      if (sortLabel === "name")
        utils.sortArrayOfObjectByStringValue(filteredData, "des");
      if (sortLabel === "date")
        utils.sortArrayOfObjectByDateValue(filteredData, "newFirst");
    } else if (sortBy === "date") {
      if (isDateArrowUp) {
        utils.sortArrayOfObjectByDateValue(filteredData);
        setIsDateArrowUp(!isDateArrowUp);
      } else {
        utils.sortArrayOfObjectByDateValue(filteredData, "newFirst");
        setIsDateArrowUp(!isDateArrowUp);
      }
    } else if (sortBy === "name") {
      if (isNameArrowUp) {
        utils.sortArrayOfObjectByStringValue(filteredData);
        setIsNameArrowUp(!isNameArrowUp);
      } else {
        utils.sortArrayOfObjectByStringValue(filteredData, "des");
        setIsNameArrowUp(!isNameArrowUp);
      }
    }
  };

  const SortAndFilterControls = () => {
    return (
      <Grid item container justify="center">
        <Grid item style={{ marginTop: theme.spacing(1) }}>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
            size="large"
            classes={{
              groupedContainedPrimary: classes.groupedContainedPrimary,
            }}
          >
            <Button
              classes={{ root: classes.buttonRoot }}
              onClick={() => handleFilter("all", utils.cardData)}
              style={{
                backgroundColor:
                  selectedFilter === "all"
                    ? theme.palette.accent.main
                    : undefined,
                color:
                  selectedFilter === "all"
                    ? theme.palette.primary.main
                    : undefined,
              }}
            >
              ALL
            </Button>
            <Button
              classes={{ root: classes.buttonRoot }}
              onClick={() => handleFilter("frontend", utils.cardData)}
              style={{
                backgroundColor:
                  selectedFilter === "frontend"
                    ? theme.palette.accent.main
                    : undefined,
                color:
                  selectedFilter === "frontend"
                    ? theme.palette.primary.main
                    : undefined,
              }}
            >
              Frontend
            </Button>
            <Button
              classes={{ root: classes.buttonRoot }}
              onClick={() => handleFilter("backend", utils.cardData)}
              style={{
                backgroundColor:
                  selectedFilter === "backend"
                    ? theme.palette.accent.main
                    : undefined,
                color:
                  selectedFilter === "backend"
                    ? theme.palette.primary.main
                    : undefined,
              }}
            >
              Backend
            </Button>
            <Button
              classes={{ root: classes.buttonRoot }}
              onClick={() => handleFilter("fullstack", utils.cardData)}
              style={{
                backgroundColor:
                  selectedFilter === "fullstack"
                    ? theme.palette.accent.main
                    : undefined,
                color:
                  selectedFilter === "fullstack"
                    ? theme.palette.primary.main
                    : undefined,
              }}
            >
              FullStack
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item style={{ marginTop: theme.spacing(1) }}>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
            size="large"
            classes={{
              groupedContainedPrimary: classes.groupedContainedPrimary,
            }}
            style={{
              marginLeft: theme.spacing(1),
            }}
          >
            <Button
              classes={{ root: classes.buttonRoot }}
              variant="outlined"
              disabled
              style={{
                backgroundColor: theme.palette.common.myGrey,
                color: theme.palette.accent.main,
              }}
            >
              Sort by
            </Button>
            <Button
              classes={{ root: classes.buttonRoot }}
              onClick={() => handleSort("name", projects)}
              style={{
                backgroundColor:
                  sortBy === "name" ? theme.palette.accent.main : undefined,
                color:
                  sortBy === "name" ? theme.palette.primary.main : undefined,
              }}
              endIcon={isNameArrowUp ? <ArrowDropUp /> : <ArrowDropDown />}
            >
              Name
            </Button>
            <Button
              classes={{ root: classes.buttonRoot }}
              onClick={(event) => handleSort("date", projects)}
              style={{
                backgroundColor:
                  sortBy === "date" ? theme.palette.accent.main : undefined,
                color:
                  sortBy === "date" ? theme.palette.primary.main : undefined,
              }}
              endIcon={isDateArrowUp ? <ArrowDropUp /> : <ArrowDropDown />}
            >
              Date
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  };

  const getIcon = (iconName, props = {}) => {
    if (iconName === "HTML")
      return <HtmlIcon className={classes.cardSvgIcon} />;
    if (iconName === "CSS") return <CssIcon className={classes.cardSvgIcon} />;
    if (iconName === "Javascript")
      return <JsIcon className={classes.cardSvgIcon} />;
    if (iconName === "React")
      return <ReactIcon className={classes.cardSvgIcon} />;
    if (iconName === "Redux")
      return <ReduxIcon className={classes.cardSvgIcon} />;
    if (iconName === "Material-UI")
      return <MuiIcon className={classes.cardSvgIcon} />;
    if (iconName === "React-Spring")
      return <ReactSpringIcon className={classes.cardSvgIcon} />;
    if (iconName === "Node")
      return <NodeIcon className={classes.cardSvgIcon} />;
  };

  const ProjectCard = ({ name, date, image, technologies }) => {
    return (
      <Card elevation={3} className={classes.cardRoot}>
        <CardHeader
          title={name}
          subheader={date}
          subheaderTypographyProps={{
            style: { color: theme.palette.secondary.main },
          }}
        />
        <CardActionArea>
          <CardContent>
            <Typography
              color="secondary"
              variant="body1"
              component="p"
              style={{ marginBottom: theme.spacing(1) }}
            >
              Lizards are a widespread group of squamate reptiles. Lizards are a
              widespread group of squamate reptiles.
            </Typography>
            {technologies.map((item) => {
              return (
                <Chip
                  key={item}
                  label={item}
                  variant="outlined"
                  color="secondary"
                  icon={getIcon(item)}
                  style={{ margin: theme.spacing(0.25) }}
                />
              );
            })}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton aria-label="github-button-link">
            <GitHub color="secondary" />
          </IconButton>
          <IconButton aria-label="github-button-link">
            <Demo
              color="secondary"
              className={classes.cardSvgIcon}
              style={{ width: theme.spacing(4) }}
            />
          </IconButton>
        </CardActions>
      </Card>
    );
  };

  const DisplayProjects = () => {
    return (
      <Grid
        item
        container
        justify="center"
        style={{
          marginTop: theme.spacing(1),
          // border: `3px solid ${theme.palette.accent.main}`,
          overflowY: "scroll",
          maxHeight: theme.spacing(96),
          minHeight: theme.spacing(96),
          // backgroundColor: theme.palette.common.filterGrey,
        }}
      >
        {projects.map((item, index) => (
          <Grid item style={{ margin: theme.spacing(1) }}>
            <ProjectCard
              key={item.id}
              name={item.name}
              date={item.date}
              image={item.image}
              technologies={item.technologies}
            />
          </Grid>
        ))}
      </Grid>
    );
  };

  const Pagination = () => {
    return (
      <Grid
        item
        container
        justify="center"
        style={{
          marginTop: theme.spacing(1),
          height: theme.spacing(10),
          backgroundColor: theme.palette.common.filterGrey,
        }}
      >
        Pagination
      </Grid>
    );
  };
  // Talk is Cheap. Show me the code.
  return (
    <Fragment>
      <Grid item container>
        <Paper
          elevation={5}
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: theme.palette.primary.main,
            paddingTop: theme.spacing(1),
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            marginBottom: theme.spacing(matchesXS ? 20 : 10),
            // border: "1px solid blue",
          }}
        >
          <SortAndFilterControls />
          <DisplayProjects />
          <Pagination />
        </Paper>
      </Grid>
    </Fragment>
  );
}
