import React, { Fragment, useState, useEffect } from "react";
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
import { HeaderWave, FooterWave } from "../components/ShapeDivider.component";

import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Paper,
  Grid,
  Typography,
  Card,
  CardHeader,
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
    color: theme.palette.common.offWhite,
    boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",
    background: "rgba(255,255,255,0.1)",
    borderRadius: theme.spacing(2),
    borderTop: "1px solid rgba(255,255,255,0.5)",
    borderLeft: "1px solid rgba(255,255,255,0.5)",
    backdropFilter: "blur(5px)",
  },

  media: {
    height: theme.spacing(15),
  },

  cardContainer: {
    // // generating class esp. for selecting last child
    // "& .childCard-8": {
    //   paddingBottom: theme.spacing(10),
    // },
    "& > :last-child": {
      paddingBottom: theme.spacing(10),
    },
  },

  cardSvgIcon: {
    fill: theme.palette.secondary.main,
    width: theme.spacing(2.5),
    height: "auto",
    // backgroundColor: theme.palette.primary.main,
    // fill: "rgba(74, 228, 184,0.6)",
  },

  star: {
    clipPath:
      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    backgroundColor: theme.palette.accent.main,
  },

  // buttonRoot: {
  //   "&$disabled": {
  //     backgroundColor: "transparent",
  //     border: "1px solid rgba(255,255,255,0.25)",
  //     color: theme.palette.accent.main,
  //   },
  // },
  // disabled: {},
}));

export default function Project() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));

  // component states
  const [cards, setCards] = useState(utils.cardData);

  // pagination states
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const [paginatedItems, setPaginatedItems] = useState([]);
  const [paginatedCards, setPaginatedCards] = useState(paginatedItems);

  //  all these 3 states are for showing limited page numbers instead of all of the pages
  const [pageNumberLimit, setPageNumberLimit] = useState(3); // how many page numbers you want to display
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // smart and proper use of useEffect
  useEffect(() => {
    const lastCardAtCurrentPageNumber = currentPageNumber * itemsPerPage;
    const firstCardAtCurrentPageNumber =
      lastCardAtCurrentPageNumber - itemsPerPage;
    setPaginatedItems(
      cards.slice(firstCardAtCurrentPageNumber, lastCardAtCurrentPageNumber)
    );
    setPaginatedCards(paginatedItems);

    // here dependencies like [cards] create problem.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageNumber]);

  // only run this code when [cards, paginatedItems] state is changed.
  useEffect(() => {
    setPaginatedCards(paginatedItems);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, paginatedItems]);

  // sorting and filtering states
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState(null);
  const [isNameArrowUp, setIsNameArrowUp] = useState(true);
  const [isDateArrowUp, setIsDateArrowUp] = useState(true);

  const filterProjects = (filterLabel, rawData) => {
    const processedData = rawData.filter((item) => item.type === filterLabel);
    setCards(processedData);
  };

  const handleFilter = (filterLabel, rawData) => {
    setSelectedFilter(filterLabel);
    if (filterLabel !== "all") {
      filterProjects(filterLabel, rawData);
    } else {
      setCards(rawData);
    }
  };

  const handleSort = (sortLabel, filteredData) => {
    if (sortLabel !== sortBy) {
      setSortBy(sortLabel);
      if (sortLabel === "name") setPaginatedCards(paginatedItems);
      utils.sortArrayOfObjectByStringValue(filteredData, "des");
      if (sortLabel === "date") setPaginatedCards(paginatedItems);
      utils.sortArrayOfObjectByDateValue(filteredData, "newFirst");
    } else if (sortBy === "date") {
      if (isDateArrowUp) {
        setIsDateArrowUp(!isDateArrowUp);
        setPaginatedCards(paginatedItems);
        utils.sortArrayOfObjectByDateValue(filteredData);
      } else {
        setIsDateArrowUp(!isDateArrowUp);
        setPaginatedCards(paginatedItems);
        utils.sortArrayOfObjectByDateValue(filteredData, "newFirst");
      }
    } else if (sortBy === "name") {
      if (isNameArrowUp) {
        setIsNameArrowUp(!isNameArrowUp);
        setPaginatedCards(paginatedItems);
        utils.sortArrayOfObjectByStringValue(filteredData);
      } else {
        setIsNameArrowUp(!isNameArrowUp);
        setPaginatedCards(paginatedItems);
        utils.sortArrayOfObjectByStringValue(filteredData, "des");
      }
    }
  };

  const SortAndFilterControls = () => {
    return (
      <Grid
        item
        container
        justify="center"
        // style={{ marginTop: -theme.spacing(5) }}
      >
        <Grid
          item
          style={{
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(7),
          }}
        >
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
              onClick={() => handleSort("name", cards)}
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
              onClick={(event) => handleSort("date", cards)}
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
                style={{ margin: theme.spacing(0.5) }}
              />
            );
          })}
        </CardContent>
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

  const Stars = () => {
    return (
      <Grid
        item
        className={classes.star}
        style={{
          width: theme.spacing(170),
          height: theme.spacing(170),
          position: "absolute",
          top: "30%",
          left: "-55%",
          zIndex: -1,
          opacity: 0.25,
          overflow: "hidden",
          backgroundColor: theme.palette.accent.main,
        }}
      />
    );
  };

  const DisplayCards = () => {
    return (
      <Grid
        item
        container
        justify="center"
        style={{
          position: "relative",
          overflow: "hidden",
          height: theme.spacing(96),
        }}
      >
        <Grid
          item
          container
          justify="center"
          style={{
            height: theme.spacing(96),
            overflowY: "scroll",
            paddingTop: theme.spacing(2),
            backgroundColor: "rgba(0,0,0,0)",
          }}
          className={classes.cardContainer}
        >
          {paginatedCards.map((item, index) => (
            <Grid
              className={`childCard-${index}`}
              item
              key={item.id}
              style={{ margin: theme.spacing(1) }}
            >
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
        <Stars />
      </Grid>
    );
  };

  const Pagination = () => {
    // currentPageNumbers and displayed cards are not in sync.
    // adding no.of pages into the pages []
    const pages = [];
    for (let i = 1; i <= Math.ceil(cards.length / itemsPerPage); i++) {
      pages.push(i);
    }

    const handleNextButtonClick = () => {
      setCurrentPageNumber(currentPageNumber + 1);
      if (currentPageNumber + 1 > maxPageNumberLimit) {
        //then increase the maxPageNumberLimit and minPageNumberLimit by equal value
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
      setPaginatedCards(paginatedItems);
    };

    const handlePrevButtonClick = () => {
      setCurrentPageNumber(currentPageNumber - 1);
      if ((currentPageNumber - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
      setPaginatedCards(paginatedItems);
    };

    const PageIncreamentButton = () => {
      if (pages.length > maxPageNumberLimit) {
        return (
          <Button
            onClick={handleNextButtonClick}
            color="secondary"
            variant="outlined"
            style={{
              borderRadius: 0,
            }}
          >
            ...
          </Button>
        );
      }
      return null;
    };

    const PageDecreamentButton = () => {
      if (minPageNumberLimit >= 1) {
        return (
          <Button
            onClick={handlePrevButtonClick}
            variant="outlined"
            color="secondary"
            style={{ borderRadius: 0, borderRight: "none" }}
          >
            ...
          </Button>
        );
      }
      return null;
    };

    const prevButton = (
      <Button
        variant="contained"
        style={{
          backgroundColor:
            currentPageNumber === pages[0]
              ? theme.palette.secondary.main
              : theme.palette.accent.main,
          color: theme.palette.primary.main,
        }}
        onClick={handlePrevButtonClick}
        disabled={currentPageNumber === pages[0] ? true : false}
      >
        Prev
      </Button>
    );

    const nextButton = (
      <Button
        variant="contained"
        style={{
          backgroundColor:
            currentPageNumber === pages[pages.length - 1]
              ? theme.palette.secondary.main
              : theme.palette.accent.main,
          color: theme.palette.primary.main,
        }}
        onClick={handleNextButtonClick}
        disabled={currentPageNumber === pages[pages.length - 1] ? true : false}
      >
        Next
      </Button>
    );

    const pageNumbers = pages.map((pageNumber) => {
      if (
        pageNumber < maxPageNumberLimit + 1 &&
        pageNumber > minPageNumberLimit
      ) {
        return (
          <Button
            key={pageNumber}
            id={pageNumber}
            onClick={() => {
              setCurrentPageNumber(pageNumber);
            }}
            style={{
              backgroundColor:
                pageNumber === currentPageNumber
                  ? theme.palette.accent.main
                  : "",
              color:
                pageNumber === currentPageNumber
                  ? theme.palette.primary.main
                  : theme.palette.accent.main,
            }}
          >
            {pageNumber}
          </Button>
        );
      } else {
        return null;
      }
    });

    // const handleLoadMoreItemsPerPage = () => {
    //   setItemsPerPage((itemsPerPage) => itemsPerPage + 3);
    // };

    return (
      <Fragment>
        <Grid
          item
          container
          justify="center"
          style={{ paddingTop: theme.spacing(1) }}
        >
          <Grid item>
            <ButtonGroup
              size="large"
              color="secondary"
              aria-label="large outlined primary button group"
            >
              {prevButton}
              <PageDecreamentButton />
              {pageNumbers}
              <PageIncreamentButton />
              {nextButton}
            </ButtonGroup>
          </Grid>
        </Grid>
      </Fragment>
    );
  };

  // Talk is Cheap. Show me the code.
  return (
    <Fragment>
      <Grid item container>
        <Paper
          elevation={5}
          style={{
            position: "relative",
            width: "100%",
            height: "auto",
            backgroundColor: theme.palette.primary.main,
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            marginBottom: theme.spacing(matchesXS ? 20 : 10),
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <HeaderWave />
          <SortAndFilterControls />
          <DisplayCards />
          <Pagination />
          <FooterWave />
        </Paper>
      </Grid>
    </Fragment>
  );
}
