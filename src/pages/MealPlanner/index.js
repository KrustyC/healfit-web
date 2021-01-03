import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from 'uikit/organisms/navbars/LoggedNavbar';
import MealPlannerStore from './Store';
import MealPlanner from './MealPlanner';

const MealPlannerIndex = () => (
  <>
    <Helmet>
      <title>Meal Planner | Healfit</title>
      <meta name="description" content="Meal Planner" />
    </Helmet>
    <Navbar />
    <MealPlannerStore>
      <MealPlanner />
    </MealPlannerStore>
  </>
);

export default MealPlannerIndex;
