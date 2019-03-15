import React from "react";

import { Route, Switch } from "react-router-dom";

import Landing from "./Components/Landing/Landing";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  );
};

export default Routes;
