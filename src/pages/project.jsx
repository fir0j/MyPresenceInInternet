import React, { Fragment, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import firoj from "./founder3.png";

import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Paper,
  Grid,
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
  root: {
    maxWidth: 345,
  },
  media: {
    height: theme.spacing(30),
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

  const ProjectCard = ({ name, image, title }) => {
    return (
      <Card className={classes.root}>
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
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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
        {projects.map((item, index) => (
          <Grid item>
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
            border: "1px solid blue",
          }}
        >
          <ProjectGallery />
        </Paper>
      </Grid>
    </Fragment>
  );
}
