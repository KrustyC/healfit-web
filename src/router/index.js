import React, { useContext, useEffect } from 'react';
import { Switch, Redirect, Route, Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import { DrawerContext } from 'app/contexts/DrawerContext';

import * as Routes from './routes';
import AdminRoute from './routes-templates/AdminRoute';
import PrivateRoute from './routes-templates/PrivateRoute';
import history from './history';

const CustomRouter = () => {
  const { onCloseMenu } = useContext(DrawerContext);

  useEffect(() => {
    history.listen(location => {
      onCloseMenu();
      if (process.env.APP_ENV !== 'development') {
        ReactGA.pageview(location.pathname);
      }
    });
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Routes.Home} />
        <Route path="/legal" component={Routes.Legal} />
        <Route path="/auth" component={Routes.Auth} />

        <AdminRoute path="/admin" component={Routes.Admin} />

        <PrivateRoute path="/dashboard" component={Routes.Dashboard} />
        <Route path="/recipes" component={Routes.Recipes} />
        <PrivateRoute path="/meal-planner" component={Routes.MealPlanner} />

        <Route path="/404" component={Routes.NotFound} />

        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default CustomRouter;
