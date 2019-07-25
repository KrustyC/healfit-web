import Immutable from 'seamless-immutable';
import { MEAL_PLAN_FETCH } from './consts';

const parentReducer = (state, action) => {
  switch (action.type) {
    case `${MEAL_PLAN_FETCH}_PENDING`:
      return Immutable.setIn(state, ['events', 'pending'], action.payload);
    case `${MEAL_PLAN_FETCH}_FAILURE`:
      return Immutable.setIn(state, ['events', 'error'], action.payload);
    case `${MEAL_PLAN_FETCH}_SUCCESS`:
      return Immutable.setIn(state, ['events', 'data'], action.payload);
    default:
      return state;
  }
};

export default parentReducer;
