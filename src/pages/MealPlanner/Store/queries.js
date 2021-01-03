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
        _id
        title
        slug
        picture
        calories
      }
    }
  }
`;

export const EDIT_MEAL_EVENT = gql`
  mutation editMealEvent(
    $id: ID!
    $startTime: Date!
    $endTime: Date!
    $recipes: [ID]!
    $mealType: String!
  ) {
    editMealEvent(
      input: {
        _id: $id
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
        _id
        title
        slug
        picture
        calories
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

export const EDIT_WORKOUT_EVENT = gql`
  mutation editWorkoutEvent($id: ID!, $startTime: Date!, $endTime: Date!) {
    editWorkoutEvent(
      input: { _id: $id, startTime: $startTime, endTime: $endTime }
    ) {
      _id
      startTime
      endTime
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation deleteEvent($id: ID!) {
    deleteEvent(id: $id)
  }
`;
