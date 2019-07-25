const BREAKFAST = 'mt-1';
const SNACK = 'mt-2';
const LUNCH = 'mt-3';
const DINNER = 'mt-4';

export const getColor = event => {
  if (event.__typename === 'WorkoutEvent') {
    return '#E9F028';
  }

  switch (event.mealType) {
    case BREAKFAST:
      return '#F08484';
    case SNACK:
      return '#ADF186';
    case LUNCH:
      return '#70C7F5';
    case DINNER:
      return '#E9F028';
    default:
      return '#FFF';
  }
};

export const getName = event => {
  if (event.__typename === 'WorkoutEvent') {
    return 'Workout';
  }

  switch (event.mealType) {
    case BREAKFAST:
      return 'Breakfast';
    case SNACK:
      return 'Snack';
    case LUNCH:
      return 'Lunch';
    case DINNER:
      return 'Dinner';
    default:
      return '';
  }
};
