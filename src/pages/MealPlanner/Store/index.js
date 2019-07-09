import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import Immutable from 'seamless-immutable';
import { compose, graphql } from 'react-apollo';
import withApolloClient from 'hoc/withApolloClient';
import { withToastManager } from 'uikit/blocks/Toast';

import mealPlannerReducer from './reducer';
import { MEAL_PLANNER, MEAL_PLANNER_EVENT_ADDED } from './consts';
import {
  GET_MEAL_PLANNER_EVENTS,
  ADD_MEAL_EVENT,
  ADD_WORKOUT_EVENT,
} from './queries';

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

const getStartAndEndTime = (day, start, end) => {
  const [startHour, startMinute] = start.split(':').map(x => parseInt(x, 10));
  const [endHour, endMinute] = end.split(':').map(x => parseInt(x, 10));

  return {
    startTime: day.set({ hour: startHour, minute: startMinute }).toDate(),
    endTime: day.set({ hour: endHour, minute: endMinute }).toDate(),
  };
};

const MealPlannerStore = ({
  client,
  toastManager,
  addMealEvent,
  addWorkoutEvent,
  children,
}) => {
  const [state, dispatch] = useReducer(mealPlannerReducer, initialState);

  const onFetchEvents = useCallback(
    async (startDay = new Date(), endDay = new Date()) => {
      dispatch({ type: `${MEAL_PLANNER}_PENDING`, payload: true });

      try {
        const {
          data: { mealPlanEvents },
        } = await client.query({
          query: GET_MEAL_PLANNER_EVENTS,
          variables: { startDay: startDay.getTime(), endDay: endDay.getTime() },
        });

        const payload = mealPlanEvents.map(
          ({ startTime, endTime, ...rest }) => ({
            ...rest,
            startTime: new Date(startTime),
            endTime: new Date(endTime),
          })
        );

        dispatch({ type: `${MEAL_PLANNER}_SUCCESS`, payload });
      } catch (error) {
        dispatch({
          type: `${MEAL_PLANNER}_FAILURE`,
          payload:
            'Ooops! Something unexpected happened while fetching your meal plan',
        });
        return error;
      }

      return null;
    },
    [client]
  );

  const onAddMealEvent = async data => {
    const { day, start, end } = data;

    const variables = {
      ...getStartAndEndTime(day, start, end),
      recipes: data.recipes.map(({ id }) => id),
      mealType: data.mealType,
    };

    try {
      const result = await addMealEvent({ variables });
      const { startTime, endTime, ...rest } = result.data.addMealEvent;

      const payload = {
        ...rest,
        startTime: new Date(startTime),
        endTime: new Date(startTime),
      };

      dispatch({ type: `${MEAL_PLANNER_EVENT_ADDED}_SUCCESS`, payload });
    } catch (error) {
      toastManager.add(
        "Ops! We haven't been able to add your meal, please try again later on!",
        {
          type: 'error',
        }
      );
      return error;
    }
    return null;
  };

  const onAddWorkoutEvent = async data => {
    const { day, start, end } = data;

    const variables = {
      ...getStartAndEndTime(day, start, end),
    };

    try {
      const result = await addWorkoutEvent({ variables });
      const { startTime, endTime, ...rest } = result.data.addWorkoutEvenst;

      const payload = {
        ...rest,
        startTime: new Date(startTime),
        endTime: new Date(startTime),
      };

      dispatch({ type: `${MEAL_PLANNER_EVENT_ADDED}_SUCCESS`, payload });
    } catch (error) {
      toastManager.add(
        "Ops! We haven't been able to add your workout, please try again later on!",
        {
          type: 'error',
        }
      );
      return error;
    }
    return null;
  };

  const actions = {
    onFetchEvents,
    onAddMealEvent,
    onAddWorkoutEvent,
  };

  return (
    <MealPlannerContext.Provider value={[state, actions]}>
      {children}
    </MealPlannerContext.Provider>
  );
};

MealPlannerStore.propTypes = {
  client: PropTypes.shape({
    query: PropTypes.func.isRequired,
  }).isRequired,
  toastManager: PropTypes.shape({
    add: PropTypes.func.isRequired,
  }).isRequired,
  addMealEvent: PropTypes.func.isRequired,
  addWorkoutEvent: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export const useMealPlannerStore = () => useContext(MealPlannerContext);

export default compose(
  graphql(ADD_MEAL_EVENT, { name: 'addMealEvent' }),
  graphql(ADD_WORKOUT_EVENT, { name: 'addWorkoutEvent' }),
  withApolloClient,
  withToastManager
)(MealPlannerStore);
