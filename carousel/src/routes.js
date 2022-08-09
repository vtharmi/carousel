import React from "react";
import {  Router, Switch, Route } from "react-router-dom";
import history from "./history";

import Home from "./pages/home";
import NotFoundPage from "./pages/not_found_page";
const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;