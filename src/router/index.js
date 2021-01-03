import React, { useContext, useEffect, Suspense } from 'react';
import { Switch, Redirect, Route, Router } from 'react-router-dom';
import { Mixpanel } from 'app/services/Mixpanel';
import { DrawerContext } from 'app/contexts/DrawerContext';
import { FullPageLoader } from 'uikit/elements/Loaders';

import * as Routes from './routes';
import AdminRoute from './routes-templates/AdminRoute';
import PrivateRoute from './routes-templates/PrivateRoute';
import history from './history';

const WaitingComponent = Component => props => (
  <Suspense fallback={<FullPageLoader />}>
    <Component {...props} />
  </Suspense>
);

const CustomRouter = () => {
  const { onCloseMenu } = useContext(DrawerContext);

  useEffect(() => {
    history.listen(location => {
      onCloseMenu();
      Mixpanel.track(location.pathname);
    });
  }, [onCloseMenu]);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={WaitingComponent(Routes.Home)} />
        <Route path="/legal" component={WaitingComponent(Routes.Legal)} />
        <Route path="/auth" component={WaitingComponent(Routes.Auth)} />

        <AdminRoute path="/admin" component={WaitingComponent(Routes.Admin)} />

        <Route path="/recipes" component={WaitingComponent(Routes.Recipes)} />
        <PrivateRoute
          path="/meal-planner"
          component={WaitingComponent(Routes.MealPlanner)}
        />
        <PrivateRoute
          path="/meal-plan"
          component={WaitingComponent(Routes.MealPlan)}
        />

        <Route path="/404" component={WaitingComponent(Routes.NotFound)} />

        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default CustomRouter;
