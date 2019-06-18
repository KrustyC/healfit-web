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

const BREAKFAST = 'mc-1';
const SNACK = 'mc-2';
const LUNCH = 'mc-3';
const DINNER = 'mc-4';
const WORKOUT = 'mc-5';

const getColor = category => {
  switch (category) {
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

const getName = category => {
  switch (category) {
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

const Event = ({ event: { title, category, recipes } }) => {
  console.log(title);
  return (
    <EventContainer color={getColor(category)}>
      {recipes && recipes.map(recipe => <Recipe>{recipe.title}</Recipe>)}
    </EventContainer>
  );
};

export default Event;
