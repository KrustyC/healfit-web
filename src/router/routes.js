import { lazy } from 'react';

export const Home = lazy(() =>
  import(/* webpackChunkName: "home" */ '../pages/Home')
);
export const Auth = lazy(() =>
  import(/* webpackChunkName: "auth" */ '../pages/Auth')
);
export const Dashboard = lazy(() =>
  import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard')
);
export const MealPlanner = lazy(() =>
  import(/* webpackChunkName: "meal-planner" */ '../pages/MealPlanner')
);

export const Recipes = lazy(() =>
  import(/* webpackChunkName: "recipes" */ '../pages/Recipes')
);

export const Legal = lazy(() =>
  import(/* webpackChunkName: "legal" */ '../pages/Legal')
);
export const NotFound = lazy(() =>
  import(/* webpackChunkName: "404" */ '../pages/NotFound')
);
