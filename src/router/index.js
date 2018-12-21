import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import * as Routes from './routes';

const history = createBrowserHistory();

const CustomRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={props => <Routes.Home {...props} />} />
      <Route path="/auth" component={props => <Routes.Auth {...props} />} />
      <Route
        path="/meal-planner"
        component={props => <Routes.MealPlanner {...props} />}
      />
    </Switch>
  </Router>
);

export default CustomRouter;
export { history };
