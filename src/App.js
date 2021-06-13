import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery, useTheme, Grid } from "@material-ui/core";
import {
  ThemeProvider,
  createMuiTheme,
  withStyles,
} from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { cyanTheme, goldTheme } from "./customTheme";

import Navigation from "./components/Navigation.component";
import SettingPanel from "./components/SettingPanel.component";
import PageContainer from "./components/PageContainer.component";

function App() {
  const [myTheme, setMyTheme] = useState(goldTheme);
  const overflowRef = useRef();
  // const [myTheme, setMyTheme] = useLocalStorageState("myTheme", goldTheme);

  const setTheme = (themeName) => {
    switch (themeName) {
      case "cyan":
        setMyTheme(cyanTheme);
        break;

      case "gold":
        setMyTheme(goldTheme);
        break;

      default:
        setMyTheme(goldTheme);
    }
  };

  const setOverflowRef = (el) => {
    overflowRef.current = el;
  };
  useEffect(() => console.log(overflowRef.current));

  // function useLocalStorageState(key, defaultState = "") {
  //   const [state, setState] = useState(
  //     () => JSON.parse(window.localStorage.getItem("myTheme")) || defaultState
  //   );
  //   useEffect(() => {
  //     window.localStorage.setItem(key, JSON.stringify(state));
  //   }, [key, state]);

  //   return [state, setState];
  // }

  return (
    <React.Fragment>
      {/* <GlobalCss /> */}
      <ThemeProvider theme={createMuiTheme(myTheme)}>
        <Grid
          container
          style={{
            width: "100vw",
            maxWidth: "100vw",
            height: "auto",
            maxHeight: "100vh",
            flexWrap: "nowrap",
            background: myTheme.palette.background.floor,
          }}
        >
          <Navigation ref={overflowRef} />
          <PageContainer setOverflowRef={setOverflowRef} />
        </Grid>
        <SettingPanel setTheme={setTheme} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
