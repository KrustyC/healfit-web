import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import Immutable from 'seamless-immutable';
import { compose } from 'react-apollo';
import withApolloClient from 'hoc/withApolloClient';
import { withToastManager } from 'uikit/blocks/Toast';

import mealPlannerReducer from './reducer';
import { MEAL_PLAN_FETCH } from './consts';
import { FETCH_MEAL_PLAN } from './queries';

const MealPlanContext = createContext();

const initialState = Immutable({
  events: {
    pending: false,
    error: false,
    data: [],
  },
});

const MealPlanStore = ({ client, children }) => {
  const [state, dispatch] = useReducer(mealPlannerReducer, initialState);

  const onFetchMealPlanForDay = useCallback(
    async (day = new Date()) => {
      dispatch({ type: `${MEAL_PLAN_FETCH}_PENDING`, payload: true });

      try {
        const {
          data: { mealPlanEvents },
        } = await client.query({
          query: FETCH_MEAL_PLAN,
          variables: { startDay: day.getTime(), endDay: day.getTime() },
        });

        const payload = mealPlanEvents.map(
          ({ startTime, endTime, ...rest }) => ({
            ...rest,
            startTime: new Date(startTime),
            endTime: new Date(endTime),
          })
        );

        console.log(mealPlanEvents);

        dispatch({ type: `${MEAL_PLAN_FETCH}_SUCCESS`, payload });
      } catch (error) {
        dispatch({
          type: `${MEAL_PLAN_FETCH}_FAILURE`,
          payload:
            'Ooops! Something unexpected happened while fetching your meal plan',
        });
        return error;
      }

      return null;
    },
    [client]
  );

  const actions = {
    onFetchMealPlanForDay,
  };

  return (
    <MealPlanContext.Provider value={[state, actions]}>
      {children}
    </MealPlanContext.Provider>
  );
};

MealPlanStore.propTypes = {
  client: PropTypes.shape({
    query: PropTypes.func.isRequired,
  }).isRequired,
  toastManager: PropTypes.shape({
    add: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.any.isRequired,
};

export const useMealPlanStore = () => useContext(MealPlanContext);

export default compose(
  withApolloClient,
  withToastManager
)(MealPlanStore);
