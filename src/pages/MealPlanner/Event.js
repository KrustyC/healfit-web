import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const EventContainer = styled.div`
  ${({ color }) => css`
    background: ${color};
    padding: 2px;
    font-size: 14px;
    height: 100%;
    display: flex;
    flex-direction: column;
  `}
`;

const Recipe = styled.div`
  max-width: calc(100% - 4px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BREAKFAST = 'mt-1';
const SNACK = 'mt-2';
const LUNCH = 'mt-3';
const DINNER = 'mt-4';
const WORKOUT = 'mt-5';

const getColor = event => {
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

const getName = event => {
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

const Event = ({ event }) => (
  <EventContainer color={getColor(event)}>
    <b>{getName(event)}</b>

    <small>
      {event.__typename === 'MealEvent' &&
        event.recipes.map(recipe => <Recipe>{recipe.title}</Recipe>)}
    </small>
  </EventContainer>
);

export default Event;
