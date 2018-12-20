import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Routes from './routes';

const CustomRouter = () => (
  <Switch>
    <Route exact path="/" component={props => <Routes.Home {...props} />} />
    <Route path="/auth" component={props => <Routes.Auth {...props} />} />
    <Route
      path="/meal-planner"
      component={props => <Routes.MealPlanner {...props} />}
    />
  </Switch>
);

export default CustomRouter;
