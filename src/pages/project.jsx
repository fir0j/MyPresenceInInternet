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
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
} from "@material-ui/core";

const projectInfo = [
  {
    id: 1,
    name: "Portfolio",
    image: firoj,
    title: "firoj",
    date: Date.now(),
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    type: ["frontend", "backend", "fullStack"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 2,
    name: "Google-Calender",
    image: firoj,
    title: "google calender",
  },
  {
    id: 3,
    name: "Ace-Development",
    image: firoj,
    title: "ace development",
  },
];

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    "&:hover": {
      color: theme.palette.common.offWhite,
    },
  },

  groupedContainedPrimary: {
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.primary.main,
  },
  cardRoot: {
    maxWidth: 200,
  },
  media: {
    height: theme.spacing(20),
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ProjectCard = ({ name, image, title }) => {
    return (
      <Card className={classes.cardRoot}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  };

  const ProjectGallery = () => {
    return (
      <Grid item container justify="space-around">
        <Grid item container justify="center">
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
              onClick={() => setSelectedFilter("all")}
              style={{
                backgroundColor:
                  selectedFilter === "all"
                    ? theme.palette.common.black
                    : undefined,
                color:
                  selectedFilter === "all"
                    ? theme.palette.common.offWhite
                    : undefined,
              }}
            >
              ALL
            </Button>
            <Button
              classes={{ root: classes.buttonRoot }}
              onClick={() => setSelectedFilter("frontend")}
              style={{
                backgroundColor:
                  selectedFilter === "frontend"
                    ? theme.palette.common.black
                    : undefined,
                color:
                  selectedFilter === "frontend"
                    ? theme.palette.common.offWhite
                    : undefined,
              }}
            >
              Frontend
            </Button>
            <Button
              classes={{ root: classes.buttonRoot }}
              onClick={() => setSelectedFilter("backend")}
              style={{
                backgroundColor:
                  selectedFilter === "backend"
                    ? theme.palette.common.black
                    : undefined,
                color:
                  selectedFilter === "backend"
                    ? theme.palette.common.offWhite
                    : undefined,
              }}
            >
              Backend
            </Button>
            <Button
              classes={{ root: classes.buttonRoot }}
              onClick={() => setSelectedFilter("fullstack")}
              style={{
                backgroundColor:
                  selectedFilter === "fullstack"
                    ? theme.palette.common.black
                    : undefined,
                color:
                  selectedFilter === "fullstack"
                    ? theme.palette.common.offWhite
                    : undefined,
              }}
            >
              FullStack
            </Button>
          </ButtonGroup>
          <Grid
            item
            container
            justify="center"
            style={{
              marginTop: theme.spacing(0.5),
              marginBottom: theme.spacing(0.5),
            }}
          >
            <Button
              onClick={handleClick}
              aria-controls="simple-menu"
              aria-haspopup="true"
            >
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Grid>
        {/* {projects.map((item, index) => (
          <Grid item>
            <ProjectCard
              key={item.id}
              name={item.name}
              image={item.image}
              title={item.title}
            />
          </Grid>
        ))} */}
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
          <ProjectGallery />
        </Paper>
      </Grid>
    </Fragment>
  );
}
