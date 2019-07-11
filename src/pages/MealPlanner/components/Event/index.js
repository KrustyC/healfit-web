import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Popover from 'uikit/blocks/Popover';
import Button from 'uikit/blocks/Button';

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

const PopupContainer = styled.div`
  background: white;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Body = ({ onWantToEdit, onDeleteEvent }) => (
  <PopupContainer>
    Hello from an amazing popup shitty shit
    <Button size="small" color="accent" onClick={onWantToEdit}>
      Edit
    </Button>
    <Button size="small" onClick={onDeleteEvent}>
      Delete
    </Button>
  </PopupContainer>
);

const Event = ({ event, onWantToEdit, onDeleteEvent }) => {
  const [showPopover, setShowPopover] = useState(false);

  const onShowPopover = () => setShowPopover(true);
  const onHidePopover = () => setShowPopover(false);

  return (
    <Popover
      show={showPopover}
      position="top"
      body={() => (
        <Body onWantToEdit={onWantToEdit} onDeleteEvent={onDeleteEvent} />
      )}
      onHide={onHidePopover}
    >
      <EventContainer onClick={onShowPopover} color={getColor(event)}>
        <b>{getName(event)}</b>

        <small>
          {event.__typename === 'MealEvent' &&
            event.recipes.map(recipe => (
              <Recipe key={recipe.title}>{recipe.title}</Recipe>
            ))}
        </small>
      </EventContainer>
    </Popover>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    __typename: PropTypes.oneOf(['MealEvent', 'WorkoutEvent']),
    recipes: PropTypes.arrayOf(
      PropTypes.shape({ title: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default Event;
