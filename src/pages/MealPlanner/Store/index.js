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
    data: [],
  },
  update: {
    isLoading: false,
    isError: false,
    success: false,
  },
});

const MealPlannerStore = ({ children }) => {
  const [state, dispatch] = useReducer(mealPlannerReducer, initialState);

  const onFetchEvents = (fromDate, toDate) => {
    dispatch({ type: `${MEAL_PLANNER}_PENDING`, payload: true });

    // @TODO Need to fetch the current meal plan, for the right week fromDate, toDate
    const events = [
      {
        title: 'event 1',
        start: '2019-06-17T12:30',
        end: '2019-06-17T13:30',
      },
    ];
    dispatch({ type: `${MEAL_PLANNER}_SUCCESS`, payload: events });
  };

  const actions = {
    onFetchEvents,
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
