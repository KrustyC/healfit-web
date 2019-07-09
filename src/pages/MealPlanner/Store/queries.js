import gql from 'graphql-tag';

export const GET_MEAL_PLANNER_EVENTS = gql`
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

export const ADD_MEAL_EVENT = gql`
  mutation addMealEvent(
    $startTime: Date!
    $endTime: Date!
    $recipes: [ID]!
    $mealType: String!
  ) {
    addMealEvent(
      input: {
        startTime: $startTime
        endTime: $endTime
        recipes: $recipes
        mealType: $mealType
      }
    ) {
      _id
      startTime
      endTime
      mealType
      recipes {
        title
        slug
      }
    }
  }
`;

export const ADD_WORKOUT_EVENT = gql`
  mutation addWorkoutEvent($startTime: Date!, $endTime: Date!) {
    addWorkoutEvent(input: { startTime: $startTime, endTime: $endTime }) {
      _id
      startTime
      endTime
    }
  }
`;
