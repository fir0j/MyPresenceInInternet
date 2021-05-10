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
  {
    id: 4,
    name: "Shopping Cart",
    image: firoj,
    title: "Shopping Cart",
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

  const handleSortByOrder = (sortLabel, event) => {
    if (sortBy !== sortLabel) {
      setSortBy(sortLabel);
    } else if (sortBy === "date") {
      setIsDateArrowUp(!isDateArrowUp);
    } else if (sortBy === "name") {
      setIsNameArrowUp(!isNameArrowUp);
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
              onClick={() => setSelectedFilter("all")}
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
              onClick={() => setSelectedFilter("frontend")}
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
              onClick={() => setSelectedFilter("backend")}
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
              onClick={() => setSelectedFilter("fullstack")}
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
              onClick={(event) => handleSortByOrder("name", event)}
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
              onClick={(event) => handleSortByOrder("date", event)}
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

// const MenuItemForSorting = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const handleClickListItem = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuItemClick = (event, index) => {
//     setSelectedIndex(index);
//     setAnchorEl(null);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const options = ["Date", "Name"];

//   return (
//     <Grid
//       item
//       container
//       justify="space-around"
//       style={{
//         marginTop: theme.spacing(0.5),
//         marginBottom: theme.spacing(0.5),
//       }}
//     >
//       <List
//         component="nav"
//         aria-label="Device settings"
//         style={{
//           border: `1px solid ${theme.palette.accent.main}`,
//           borderRadius: theme.spacing(1),
//           backgroundColor: theme.palette.common.black,
//           color: theme.palette.common.offWhite,
//         }}
//       >
//         <ListItem
//           button
//           aria-haspopup="true"
//           aria-controls="project-gallery-menu"
//           aria-label="sort by"
//           onClick={handleClickListItem}
//         >
//           <ListItemText
//             primary="Sort By"
//             secondary={options[selectedIndex]}
//             secondaryTypographyProps={{
//               style: { color: theme.palette.common.offWhite },
//             }}
//           />
//         </ListItem>
//       </List>
//       <Menu
//         id="project-gallery-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         {options.map((option, index) => (
//           <MenuItem
//             key={option}
//             selected={index === selectedIndex}
//             onClick={(event) => handleMenuItemClick(event, index)}
//           >
//             {option}
//           </MenuItem>
//         ))}
//       </Menu>
//     </Grid>
//   );
// };
