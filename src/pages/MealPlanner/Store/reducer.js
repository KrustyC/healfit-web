import Immutable from 'seamless-immutable';
import {
  MEAL_PLANNER,
  MEAL_PLANNER_EVENT_ADDED,
  MEAL_PLANNER_EVENT_DELETE,
} from './consts';

const parentReducer = (state, action) => {
  switch (action.type) {
    case `${MEAL_PLANNER}_PENDING`:
      return Immutable.setIn(state, ['events', 'pending'], action.payload.data);
    case `${MEAL_PLANNER}_FAILURE`:
      return Immutable.setIn(state, ['events', 'error'], action.payload.data);
    case `${MEAL_PLANNER}_SUCCESS`:
      return Immutable.setIn(state, ['events', 'data'], action.payload);

    case `${MEAL_PLANNER_EVENT_ADDED}_PENDING`:
      return Immutable.setIn(state, ['events', 'pending'], action.payload.data);
    case `${MEAL_PLANNER_EVENT_ADDED}_FAILURE`:
      return Immutable.setIn(state, ['events', 'error'], action.payload.data);
    case `${MEAL_PLANNER_EVENT_ADDED}_SUCCESS`: {
      const newEvents = [...state.events.data, action.payload];
      return Immutable.setIn(state, ['events', 'data'], newEvents);
    }

    case `${MEAL_PLANNER_EVENT_DELETE}_PENDING`:
      return Immutable.setIn(state, ['events', 'pending'], action.payload.data);
    case `${MEAL_PLANNER_EVENT_DELETE}_FAILURE`:
      return Immutable.setIn(state, ['events', 'error'], action.payload.data);
    case `${MEAL_PLANNER_EVENT_DELETE}_SUCCESS`: {
      const { data: events } = state.events;
      const index = action.payload;

      return Immutable.setIn(
        state,
        ['events', 'data'],
        [...events.slice(0, index), ...events.slice(index + 1)]
      );
    }
    default:
      return state;
  }
};

export default parentReducer;
