import React from "react";

import { Route, Switch } from "react-router-dom";

import Landing from "./Components/Landing/Landing";

import List from "./Components/BusinessList/List";
import Business from "./Components/SingleBusiness/Business";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/:query/:zip" component={List} />
      <Route exact path="/:id" component={Business} />
    </Switch>
  );
};

export default Routes;
