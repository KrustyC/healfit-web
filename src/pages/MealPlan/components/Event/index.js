import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import moment from 'moment';

import Heading from 'uikit/elements/Heading';
import { getName } from 'helpers/events';
import MealEvent from './MealEvent';

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

const MealPlanView = ({ event }) => (
  <div>
    <Heading level="h2">
      {getName(event)}{' '}
      <Time>
        ({getHour(event.startTime)} - {getHour(event.endTime)})
      </Time>
    </Heading>
    {event.__typename === 'MealEvent' ? (
      <MealEvent event={event} />
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
