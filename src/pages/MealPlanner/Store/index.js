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
import { MEAL_PLANNER } from './consts';
import { GET_MEAL_PLANNER_EVENTS, ADD_MEAL_EVENT } from './queries';

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

const MealPlannerStore = ({ client, addMealEvent, children }) => {
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
        console.log(payload);
        dispatch({ type: `${MEAL_PLANNER}_SUCCESS`, payload });
      } catch (error) {
        return error;
      }

      return null;
    },
    [client]
  );

  const onAddMealEvent = async data => {
    const { day, start, end } = data;
    const { startTime, endTime } = getStartAndEndTime(day, start, end);

    const variables = {
      startTime,
      endTime,
      recipes: data.recipes.map(({ id }) => id),
      mealType: data.mealType,
    };

    try {
      const result = await addMealEvent({ variables });
      console.log(result);
    } catch (error) {
      // @TODO Here I need to set an error to show in the UI
      return error;
    }
    return null;
  };

  const actions = {
    onFetchEvents,
    onAddMealEvent,
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
  addMealEvent: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export const useMealPlannerStore = () => useContext(MealPlannerContext);

export default compose(
  graphql(ADD_MEAL_EVENT, { name: 'addMealEvent' }),
  withApolloClient,
  withToastManager
)(MealPlannerStore);
