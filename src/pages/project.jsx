import React, { Fragment, useState, useEffect, useCallback } from "react";
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
import PageContainer from "../components/PageContainer.component";

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
import { animated, useTransition } from "react-spring";

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
    "&:hover": {
      // backgroundColor: theme.palette.secondary.dark,
      // color: theme.palette.primary.main,
    },
  },

  groupedContainedPrimary: {
    backgroundColor: theme.palette.background.filterButtons,
    color: theme.palette.text.secondary,
    // border: `1px solid ${theme.palette.primary.light}`,
    "&:not(:last-child)": {
      borderRight: `1px solid ${theme.palette.primary.light}`,
    },
  },

  cardRoot: {
    maxWidth: theme.spacing(35),
    color: theme.palette.text.secondary,
    boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",
    backgroundColor: theme.palette.background.card,
    borderRadius: theme.spacing(2),
    borderTop: "1px solid rgba(255,255,255,0.5)",
    borderLeft: "1px solid rgba(255,255,255,0.5)",
    backdropFilter: "blur(5px)",
  },
  cardSpacing: {
    margin: theme.spacing(1),
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
    backgroundColor: theme.palette.text.primary,
  },

  // buttonRoot: {
  //   "&$disabled": {
  //     backgroundColor: "transparent",
  //     border: "1px solid rgba(255,255,255,0.25)",
  //     color: theme.palette.text.primary,
  //   },
  // },
  // disabled: {},
}));

export default function Project() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  // component states
  const [cards, setCards] = useState(utils.cardData);

  // pagination states
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const [paginatedCards, setPaginatedCards] = useState([]);

  //  all these 3 states are for showing limited page numbers instead of all of the pages
  const [pageNumberLimit, setPageNumberLimit] = useState(3); // how many page numbers you want to display
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [fromX, setFromX] = useState("500%");
  const [leaveX, setLeaveX] = useState("-500%");

  const AnimatedGrid = animated(Grid);

  const transitions = useTransition(paginatedCards, {
    from: { opacity: 0, x: fromX },

    enter: {
      opacity: 1,
      x: "0%",
    },

    leave: {
      position: "absolute",
      opacity: 0,
      x: leaveX,
      y: "200%", // hiding leave animation
    },
    trail: 50,
  });

  // smart and proper use of useEffect
  useEffect(() => {
    const lastCardAtCurrentPageNumber = currentPageNumber * itemsPerPage;
    const firstCardAtCurrentPageNumber =
      lastCardAtCurrentPageNumber - itemsPerPage;
    const newPaginatedCards = cards.slice(
      firstCardAtCurrentPageNumber,
      lastCardAtCurrentPageNumber
    );

    setPaginatedCards(newPaginatedCards);

    // currentPageNumber is primitive dependency and cards is referential dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageNumber, cards]);

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
      // whenever filter button is clicked, we need to start at starting page number
      currentPageNumber !== 1 && setCurrentPageNumber(1);
      pageNumberLimit !== 3 && setPageNumberLimit(3);
      maxPageNumberLimit !== 3 && setMaxPageNumberLimit(3);
      minPageNumberLimit !== 0 && setMinPageNumberLimit(0);
    } else {
      setCards(rawData);
      currentPageNumber !== 1 && setCurrentPageNumber(1);
      pageNumberLimit !== 3 && setPageNumberLimit(3);
      maxPageNumberLimit !== 3 && setMaxPageNumberLimit(3);
      minPageNumberLimit !== 0 && setMinPageNumberLimit(0);
    }
  };

  const handleSort = (sortLabel, filteredData) => {
    if (sortLabel !== sortBy) {
      setSortBy(sortLabel);
      if (sortLabel === "name") {
        let result = utils.sortArrayOfObjectByStringValue(filteredData, "des");

        // probably though contents of the array has changed, the refrence of the array is same.
        // Manually changing the reference of the array so that useEffect will execute
        setCards([...result]);
      }
      if (sortLabel === "date") {
        let result = utils.sortArrayOfObjectByDateValue(
          filteredData,
          "newFirst"
        );
        setCards([...result]);
      }
    } else if (sortBy === "date") {
      if (isDateArrowUp) {
        setIsDateArrowUp(!isDateArrowUp);
        let result = utils.sortArrayOfObjectByDateValue(filteredData);
        setCards([...result]);
      } else {
        setIsDateArrowUp(!isDateArrowUp);
        let result = utils.sortArrayOfObjectByDateValue(
          filteredData,
          "newFirst"
        );
        setCards([...result]);
      }
    } else if (sortBy === "name") {
      if (isNameArrowUp) {
        setIsNameArrowUp(!isNameArrowUp);
        let result = utils.sortArrayOfObjectByStringValue(filteredData);
        setCards([...result]);
      } else {
        setIsNameArrowUp(!isNameArrowUp);

        let result = utils.sortArrayOfObjectByStringValue(filteredData, "des");
        setCards([...result]);
      }
    }
  };

  const SortAndFilterControls = () => {
    return (
      <Grid item container justify={matchesMD ? "space-around" : "center"}>
        <Grid
          item
          style={{
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(matchesMD ? 0 : 3),
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
            style={{
              maxWidth: matchesXS ? theme.spacing(40) : null,
            }}
          >
            <Button
              classes={{ root: classes.buttonRoot }}
              onClick={() => handleFilter("all", utils.cardData)}
              style={{
                backgroundColor:
                  selectedFilter === "all"
                    ? theme.palette.secondary.main
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
                    ? theme.palette.secondary.main
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
                    ? theme.palette.secondary.main
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
                    ? theme.palette.secondary.main
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

        {/* SORT BY */}
        <Grid
          item
          style={{
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
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
            style={{
              marginLeft: theme.spacing(1),
              maxWidth: matchesXS ? theme.spacing(39) : null,
            }}
          >
            <Button
              classes={{ root: classes.buttonRoot }}
              variant="outlined"
              disabled
              style={{
                color: theme.palette.secondary.main,
                border: `1px solid ${theme.palette.background.filterButtons}`,
              }}
            >
              Sort by
            </Button>
            <Button
              classes={{ root: classes.buttonRoot }}
              onClick={() => handleSort("name", cards)}
              style={{
                backgroundColor:
                  sortBy === "name" ? theme.palette.secondary.main : undefined,
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
                  sortBy === "date" ? theme.palette.secondary.main : undefined,
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

  const DisplayCards = () => {
    const getIcon = (iconName, props = {}) => {
      if (iconName === "HTML")
        return <HtmlIcon className={classes.cardSvgIcon} />;
      if (iconName === "CSS")
        return <CssIcon className={classes.cardSvgIcon} />;
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

    const ProjectCard = ({
      id,
      name,
      date,
      technologies,
      data,
      sourceCode,
      live,
    }) => {
      return (
        <Card elevation={3} className={classes.cardRoot}>
          <CardHeader
            title={name}
            subheader={date}
            subheaderTypographyProps={{
              style: { color: theme.palette.text.secondary },
            }}
          />
          <CardContent>
            <Typography
              variant="body1"
              component="p"
              style={{
                marginBottom: theme.spacing(1),
                color: theme.palette.text.tertiary,
              }}
            >
              {data}
            </Typography>
            {technologies.map((item) => {
              return (
                <Chip
                  key={item}
                  label={item}
                  variant="outlined"
                  // color="secondary"
                  // icon={getIcon(item)}
                  style={{
                    margin: theme.spacing(0.5),
                    color: theme.palette.text.secondary,
                  }}
                />
              );
            })}
          </CardContent>
          <CardActions>
            <a href={sourceCode} rel="noreferrer" target="_blank">
              <IconButton aria-label="github-button-link">
                <GitHub color="secondary" />
              </IconButton>
            </a>

            {live !== "url" && (
              <a href={live} rel="noreferrer" target="_blank">
                <IconButton aria-label="github-button-link">
                  <Demo
                    color="secondary"
                    className={classes.cardSvgIcon}
                    style={{ width: theme.spacing(4) }}
                  />
                </IconButton>
              </a>
            )}
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
            width: theme.spacing(70),
            height: theme.spacing(70),
            position: "absolute",
            top: theme.spacing(20),
            zIndex: -1,
            opacity: 0.1,
            overflow: "hidden",
            transform: "skew(50deg,1deg)",
            backgroundColor: theme.palette.secondary.main,
          }}
        />
      );
    };

    // // cacheing the result of loop in a variable in order to get performance benefit from re-renderings.
    // const cardList = paginatedCards.map((item, index) => {
    //   return (
    //     <Grid
    //       item
    //       className={`childCard-${index}`}
    //       key={item.id}
    //       style={{ margin: theme.spacing(1) }}
    //     >
    //       <ProjectCard
    //         id={item.id}
    //         name={item.name}
    //         date={item.date}
    //         technologies={item.technologies}
    //       />
    //     </Grid>
    //   );
    // });

    const animatedCardList = transitions(
      (style, item) =>
        item && (
          <AnimatedGrid
            style={style}
            item
            key={item.id}
            className={classes.cardSpacing}
          >
            <ProjectCard
              id={item.id}
              name={item.name}
              date={item.date}
              // image={item.image}
              data={item.data}
              live={item.live}
              sourceCode={item.sourceCode}
              technologies={item.technologies}
            />
          </AnimatedGrid>
        )
    );

    return (
      <Grid
        item
        container
        justify="center"
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: theme.spacing(65),
        }}
        className={classes.cardContainer}
      >
        {animatedCardList}

        {/* {cardList} */}
        <Stars />
      </Grid>
    );
  };

  const Pagination = () => {
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

      if (fromX !== "500%") {
        setFromX("500%");
      }

      if (leaveX !== "-500%") {
        setLeaveX("-500%");
      }
    };

    const handlePrevButtonClick = () => {
      setCurrentPageNumber(currentPageNumber - 1);
      if ((currentPageNumber - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }

      if (fromX !== "-500%") {
        setFromX("-500%");
      }

      if (leaveX !== "500%") {
        setLeaveX("500%");
      }
    };

    const PageIncreamentButton = () => {
      if (pages.length > maxPageNumberLimit) {
        return (
          <Button
            onClick={handleNextButtonClick}
            variant="outlined"
            style={{
              borderRadius: 0,
              backgroundColor: theme.palette.background.filterButtons,
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
            style={{
              borderRadius: 0,
              borderRight: "none",
              backgroundColor: theme.palette.background.filterButtons,
            }}
          >
            ...
          </Button>
        );
      }
      return null;
    };

    const prevButton = (
      <Button
        variant="outlined"
        style={{
          backgroundColor:
            currentPageNumber === pages[0]
              ? theme.palette.action.disabled
              : theme.palette.secondary.main,
          color:
            currentPageNumber === pages[0]
              ? theme.palette.text.disabled
              : theme.palette.primary.main,
        }}
        onClick={handlePrevButtonClick}
        disabled={currentPageNumber === pages[0] ? true : false}
      >
        Prev
      </Button>
    );

    const nextButton = (
      <Button
        variant="outlined"
        style={{
          backgroundColor:
            currentPageNumber === pages[pages.length - 1]
              ? theme.palette.action.disabled
              : theme.palette.secondary.main,
          color:
            currentPageNumber === pages[pages.length - 1]
              ? theme.palette.text.disabled
              : theme.palette.primary.main,
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
                  ? theme.palette.secondary.main
                  : theme.palette.background.filterButtons,
              color:
                pageNumber === currentPageNumber
                  ? theme.palette.primary.main
                  : theme.palette.text.secondary,
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
          style={{
            marginBottom: "10%",
          }}
        >
          <Grid item>
            <ButtonGroup aria-label="large outlined primary button group">
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
    <PageContainer>
      <SortAndFilterControls />
      <DisplayCards />
      <Pagination />
    </PageContainer>
  );
}

// Use multiple effects to separate concerns
// effects don’t block the UI because they run asynchronously.
// the order of your effect definitions matter
//  Another strategy to skip unnecessary effects is to prevent unnecessary re-renders in the first place with, e.g., React.memo
// dependency array must be either state or props or pieces inside of states or props
