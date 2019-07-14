import gql from 'graphql-tag';

export const FETCH_MEAL_PLAN = gql`
  query GetMealPlannerEvents($startDay: Date!, $endDay: Date!) {
    mealPlanEvents(input: { startDay: $startDay, endDay: $endDay }) {
      _id
      startTime
      endTime
      ... on MealEvent {
        mealType
        recipes {
          _id
          title
          slug
          picture
          calories
        }
      }
      ... on WorkoutEvent {
        workoutType
      }
    }
  }
`;

export const CHECK_EVENT = gql`
  mutation deleteEvent($id: ID!) {
    deleteEvent(id: $id)
  }
`;
