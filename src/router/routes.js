import { lazy } from 'react';

export const Home = lazy(() => import('../pages/Home'));
export const Auth = lazy(() => import('../pages/Auth'));
export const MealPlanner = lazy(() => import('../pages/MealPlanner'));
export const NotFound = lazy(() => import('../pages/NotFound'));
