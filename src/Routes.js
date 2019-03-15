import React from "react";

import { Route, Switch } from "react-router-dom";

import Landing from "./Components/Landing/Landing";

import List from "./Components/BusinessList/List";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/:query/:zip" component={List} />
    </Switch>
  );
};

export default Routes;
