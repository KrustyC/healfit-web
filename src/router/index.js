import React from 'react';
import { Switch, Redirect, Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import * as Routes from './routes';
import PrivateRoute from './routes-templates/PrivateRoute';

const history = createBrowserHistory();

const CustomRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={props => <Routes.Home {...props} />} />
      <Route path="/auth" component={props => <Routes.Auth {...props} />} />
      <PrivateRoute
        path="/meal-planner"
        component={props => <Routes.MealPlanner {...props} />}
      />
      <Route path="/404" component={props => <Routes.NotFound {...props} />} />
      <Redirect to="/404" />
    </Switch>
  </Router>
);

export default CustomRouter;
export { history };
