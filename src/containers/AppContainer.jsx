import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import GlobalStyles from "../components/GlobalStyles";

import GeneralViewContainer from "./GeneralViewContainer";
import PartialViewContainer from "./PartialViewContainer";

const AppContainer = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/grafico-geral" />
          </Route>
          <Route path="/grafico-geral">
            <GeneralViewContainer />
          </Route>
          <Route path="/grafico-por-estados">
            <PartialViewContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default AppContainer;
