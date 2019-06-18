import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'seamless-immutable';

import mealPlannerReducer from './reducer';
import { MEAL_PLANNER } from './consts';

const MealPlannerContext = createContext();

const initialState = Immutable({
  events: {
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

const events = [
  {
    title: 'My event',
    category: 'mc-1',
    recipes: [
      { title: 'Spicy meatballs with chilli black beans' },
      { title: 'Spainch' },
    ],
    allDay: false,
    start: new Date(2019, 5, 18, 8, 0, 0),
    end: new Date(2019, 5, 18, 9, 0, 0),
  },
  {
    title: 'My event',
    category: 'mc-2',
    recipes: [
      { title: 'Spicy meatballs with chilli black beans' },
      { title: 'Spainch' },
    ],
    allDay: false,
    start: new Date(2019, 5, 18, 10, 0, 0),
    end: new Date(2019, 5, 18, 11, 0, 0),
  },
  {
    title: 'My event',
    category: 'mc-3',
    recipes: [
      { title: 'Spicy meatballs with chilli black beans' },
      { title: 'Spainch' },
    ],
    allDay: false,
    start: new Date(2019, 5, 18, 12, 30, 0),
    end: new Date(2019, 5, 18, 13, 30, 0),
  },
  {
    title: 'My event',
    category: 'mc-2',
    recipes: [
      { title: 'Spicy meatballs with chilli black beans' },
      { title: 'Spainch' },
    ],
    allDay: false,
    start: new Date(2019, 5, 18, 16, 0, 0),
    end: new Date(2019, 5, 18, 17, 0, 0),
  },
  {
    title: 'My event',
    category: 'mc-4',
    recipes: [
      { title: 'Spicy meatballs with chilli black beans' },
      { title: 'Spainch' },
    ],
    allDay: false,
    start: new Date(2019, 5, 18, 19, 0, 0),
    end: new Date(2019, 5, 18, 20, 0, 0),
  },
  {
    title: 'My event',
    category: 'mc-2',
    allDay: false,
    start: new Date(2019, 5, 19, 17, 0, 0),
    end: new Date(2019, 5, 19, 17, 30, 0),
  },
];

const MealPlannerStore = ({ children }) => {
  const [state, dispatch] = useReducer(mealPlannerReducer, initialState);

  const onFetchEvents = (fromDate = null, toDate = null) => {
    dispatch({ type: `${MEAL_PLANNER}_PENDING`, payload: true });

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
