import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'seamless-immutable';

import mealPlannerReducer from './reducer';
import { MEAL_PLANNER } from './consts';

const MealPlannerContext = createContext();

const initialState = Immutable({
  mealPlan: {
    isLoading: false,
    isError: false,
    success: false,
  },
  update: {
    isLoading: false,
    isError: false,
    success: false,
  },
});

const MealPlannerStore = ({ children }) => {
  const [state, dispatch] = useReducer(mealPlannerReducer, initialState);

  const loadMealPlan = (fromDate, toDate) => {
    dispatch({ type: `${MEAL_PLANNER}_PENDING`, payload: true });

    // @TODO Need to fetch the current meal plan, for the right week fromDate, toDate
    dispatch({ type: `${MEAL_PLANNER}_SUCCESS`, payload: [] });
  };

  const actions = {
    loadMealPlan,
  };

  return (
    <MealPlannerContext.Provider value={[state, actions]}>
      {children}
    </MealPlannerContext.Provider>
  );
};

MealPlannerStore.propTypes = {
  children: PropTypes.any.isRequired,
};

export const useMealPlannerStore = () => useContext(MealPlannerContext);
export default MealPlannerStore;
