import React, { Fragment, useState } from "react";
import firoj from "../assets/founder3.png";

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
  CardMedia,
  Button,
  IconButton,
  ButtonGroup,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { ArrowDropDown, ArrowDropUp, GitHub } from "@material-ui/icons";
// import Autocomplete from "@material-ui/lab/Autocomplete";

const projectInfo = [
  {
    id: 1,
    name: "Portfolio",
    image: firoj,
    title: "firoj",
    date: Date.now(),
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    type: "frontend",
    live: "url",
    sourceCode: "url",
  },
  {
    id: 2,
    name: "Google-Calender",
    image: firoj,
    title: "google calender",
    type: "frontend",
  },
  {
    id: 3,
    name: "dummy Project",
    image: firoj,
    title: "Shopping Cart",
    type: "backend",
  },
  {
    id: 4,
    name: "Ace-Development",
    image: firoj,
    title: "ace development",
    type: "fullstack",
  },
  {
    id: 5,
    name: "Shopping Cart",
    image: firoj,
    title: "Shopping Cart",
    type: "backend",
  },
  {
    id: 6,
    name: "my Dummy Project",
    image: firoj,
    title: "Shopping Cart",
    type: "frontend",
  },
];

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
    maxWidth: theme.spacing(40),
    backgroundColor: theme.palette.secondary.main,
  },
  media: {
    height: theme.spacing(18),
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
  const [projects, setProjects] = useState(projectInfo);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isNameArrowUp, setIsNameArrowUp] = useState(true);
  const [isDateArrowUp, setIsDateArrowUp] = useState(true);

  const filterProjects = (filterLabel, rawData) => {
    const processedData = rawData.filter((item) => item.type === filterLabel);
    setProjects(processedData);
  };

  const handleFilterClick = (filterLabel, rawData) => {
    setSelectedFilter(filterLabel);
    if (filterLabel !== "all") {
      filterProjects(filterLabel, rawData);
    } else {
      setProjects(rawData);
    }
  };

  const handleArrayOfObjectSortByString = (filteredData, order = "asc") => {
    if (order === "asc") {
      let sortedObjectArray = filteredData.sort((a, b) => {
        const firstElement = a.name.toLowerCase();
        const secondElement = b.name.toLowerCase();
        if (firstElement < secondElement) return -1;
        if (firstElement > secondElement) return 1;
        return 0; // firstElement === seconoElement
      });
      setProjects(sortedObjectArray);
    } else {
      let sortedObjectArray = filteredData.sort((b, a) => {
        const firstElement = a.name.toLowerCase();
        const secondElement = b.name.toLowerCase();
        if (firstElement < secondElement) return -1;
        if (firstElement > secondElement) return 1;
        return 0; // firstElement === seconoElement
      });
      setProjects(sortedObjectArray);
    }
  };

  const handleArrowDirection = (sortLabel, filteredData) => {
    if (sortBy !== sortLabel) {
      setSortBy(sortLabel);
    } else if (sortBy === "date") {
      setIsDateArrowUp(!isDateArrowUp);
    } else if (sortBy === "name") {
      if (isNameArrowUp) {
        handleArrayOfObjectSortByString(filteredData);
        setIsNameArrowUp(!isNameArrowUp);
      } else {
        handleArrayOfObjectSortByString(filteredData, "des");
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
              onClick={() => handleFilterClick("all", projectInfo)}
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
              onClick={() => handleFilterClick("frontend", projectInfo)}
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
              onClick={() => handleFilterClick("backend", projectInfo)}
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
              onClick={() => handleFilterClick("fullstack", projectInfo)}
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
              onClick={() => handleArrowDirection("name", projects)}
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
              onClick={(event) => handleArrowDirection("date")}
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

  const ProjectCard = ({ name, image, title }) => {
    return (
      <Card className={classes.cardRoot}>
        <CardHeader title={name} subheader="September 14, 2016" />
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton aria-label="github-button-link">
            <GitHub />
          </IconButton>
          <IconButton disableRipple aria-label="Live Demo">
            Live Demo
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
        style={{ marginTop: theme.spacing(4) }}
      >
        {projects.map((item, index) => (
          <Grid item style={{ margin: theme.spacing(1) }}>
            <ProjectCard
              key={item.id}
              name={item.name}
              image={item.image}
              title={item.title}
            />
          </Grid>
        ))}
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
            paddingTop: theme.spacing(3),
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            marginBottom: theme.spacing(matchesXS ? 20 : 10),
            // border: "1px solid blue",
          }}
        >
          <SortAndFilterControls />
          <DisplayProjects />
        </Paper>
      </Grid>
    </Fragment>
  );
}
