import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import moment from 'moment';
import Heading from 'uikit/elements/Heading';
import { getName } from 'helpers/events';
import Recipe from './Recipe';

const getHour = timestamp =>
  moment
    .utc(timestamp)
    .local()
    .format('HH:mm');

const Time = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xsmall};
    font-style: italic;
  `}
`;

const Row = styled.div`
  display: flex;

  .recipe {
    margin-right: ${({ theme }) => theme.margin.sm};
    margin-right: 50px;
  }
`;

const MealPlanView = ({ event }) => (
  <div>
    <Heading level="h3">
      {getName(event)}{' '}
      <Time>
        ({getHour(event.startTime)} - {getHour(event.endTime)})
      </Time>
    </Heading>
    {event.__typename === 'MealEvent' ? (
      <Row>
        {event.recipes.map(recipe => (
          <Recipe key={recipe._id} recipe={recipe} />
        ))}
      </Row>
    ) : (
      <span>There are no information for this workout</span>
    )}
  </div>
);

MealPlanView.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    startTime: PropTypes.object.isRequired,
    endTime: PropTypes.object.isRequired,
  }).isRequired,
};

export default MealPlanView;
