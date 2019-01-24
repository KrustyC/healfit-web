import React from 'react';
import { Switch, Redirect, Route, Router } from 'react-router-dom';
import ReactGA from 'react-ga';

import * as Routes from './routes';
import PrivateRoute from './routes-templates/PrivateRoute';
import history from './history';

if (process.env.APP_ENV !== 'development') {
  history.listen(location => ReactGA.pageview(location.pathname));
}

console.log(Routes);
const CustomRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Routes.Home} />
      <Route path="/auth" component={Routes.Auth} />
      <PrivateRoute path="/dashboard" component={Routes.Dashboard} />
      <Route path="/recipes" component={Routes.Recipes} />
      {/* <PrivateRoute path="/recipes" component={Routes.Recipes} /> */}
      <PrivateRoute path="/meal-planner" component={Routes.MealPlanner} />
      <Route path="/legal" component={Routes.Legal} />
      <Route path="/404" component={Routes.NotFound} />
      <Redirect to="/404" />
    </Switch>
  </Router>
);

export default CustomRouter;
