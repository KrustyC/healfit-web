import React from 'react';
import { Switch, Redirect, Route, Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import createBrowserHistory from 'history/createBrowserHistory';
import * as Routes from './routes';
import PrivateRoute from './routes-templates/PrivateRoute';

const history = createBrowserHistory();

if (process.env.APP_ENV !== 'development') {
  history.listen(location => ReactGA.pageview(location.pathname));
}

const CustomRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={props => <Routes.Home {...props} />} />
      <Route path="/auth" render={props => <Routes.Auth {...props} />} />
      <PrivateRoute
        path="/dashboard"
        render={props => <Routes.Dashboard {...props} />}
      />
      <PrivateRoute
        path="/meal-planner"
        render={props => <Routes.MealPlanner {...props} />}
      />
      <Route path="/legal" render={props => <Routes.Legal {...props} />} />
      <Route path="/404" render={props => <Routes.NotFound {...props} />} />
      <Redirect to="/404" />
    </Switch>
  </Router>
);

export default CustomRouter;
export { history };
