import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Popover from 'uikit/blocks/Popover';
import { getColor, getName } from './utils';
import PopoverContent from './PopoverContent';

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

const Event = ({ event, onWantToEdit, onDeleteEvent }) => {
  const [showPopover, setShowPopover] = useState(false);

  const onShowPopover = () => setShowPopover(true);
  const onHidePopover = () => setShowPopover(false);

  return (
    <Popover
      show={showPopover}
      position="top"
      body={({ onHide }) => (
        <PopoverContent
          event={event}
          onHide={onHide}
          onWantToEdit={onWantToEdit}
          onDeleteEvent={() => onDeleteEvent(event)}
        />
      )}
      onHide={onHidePopover}
    >
      <EventContainer onClick={onShowPopover} color={getColor(event)}>
        <b>{getName(event)}</b>

        {event.__typename === 'MealEvent' &&
          event.recipes.map(recipe => (
            <Recipe key={recipe.title}>{recipe.title}</Recipe>
          ))}
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
  onWantToEdit: PropTypes.func.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
};

export default Event;
