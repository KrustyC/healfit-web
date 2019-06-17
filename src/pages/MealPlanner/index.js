import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';

import Navbar from 'uikit/organisms/navbars/LoggedNavbar';
import MealPlannerStore from './Store';
import MealPlanner from './MealPlanner';

const MealPlannerIndex = () => {
  // Here use effect , context and stuff to fetch all data
  const [wantToAddMeal, setWantToAddMeal] = useState(false);
  const [currentStartEnd, setCurrentStartEnd] = useState({
    start: null,
    end: null,
  });

  const onCloseMealModal = () => {
    setCurrentStartEnd({ start: null, end: null });
    setWantToAddMeal(false);
  };

  const onSelectSlot = ({ start, end }) => {
    setCurrentStartEnd({ start: moment(start), end: moment(end) });
    setWantToAddMeal(true);
  };

  const onAddMeal = meal => {
    console.log('add meal', meal);
  };

  const onSelectEvent = (x, y, z) => console.log(x, y, z);
  const onView = () => console.log('view');

  return (
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
};
export default MealPlannerIndex;
