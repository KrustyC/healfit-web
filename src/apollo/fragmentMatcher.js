import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

const fm = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: 'INTERFACE',
          name: 'MealPlanEvent',
          possibleTypes: [
            {
              name: 'MealEvent',
            },
            {
              name: 'WorkoutEvent',
            },
          ],
        },
      ],
    },
  },
});

export default fm;
