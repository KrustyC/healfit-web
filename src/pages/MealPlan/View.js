import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import Heading from 'uikit/elements/Heading';
import Button from 'uikit/blocks/Button';
import { getName } from 'helpers/events';
import Event from './components/Event';
import { useMealPlanStore } from './Store';

const Layout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: ${theme.dimensions.containerWidth.large};
    height: calc(100vh - 100px);
    margin: 15px auto;
  `}
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button:first-of-type {
      margin-right: ${({ theme }) => theme.margin.sm};
    }
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-right: ${({ theme }) => theme.margin.sm};
  }
`;

const format = {
  sameDay: '[Today]',
  nextDay: '[Tomorrow]',
  nextWeek: 'dddd',
  lastDay: '[Yesterday]',
  lastWeek: '[Last] dddd',
  sameElse: 'dddd	Do MMMM',
};

const MealPlanView = () => {
  const [{ events }, actions] = useMealPlanStore();
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const formattedDate = moment(currentDate).calendar(null, format);

  const onNavigate = useCallback(day => {
    actions.onFetchMealPlanForDay(day);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPrevDate = () => {
    const newDate = moment(currentDate).subtract(1, 'day');
    setCurrentDate(newDate.toDate());
  };

  const onNextDate = () => {
    const newDate = moment(currentDate).add(1, 'day');
    setCurrentDate(newDate.toDate());
  };

  useEffect(() => {
    // On Load only, fetch the meal plan for today
    onNavigate(currentDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]);

  useEffect(() => {
    if (!events.pending) {
      setCurrentEvent(events.data[0]);
    }
  }, [events]);

  if (events.pending) {
    return 'Loading...';
  }

  return (
    <Layout>
      <TopRow>
        <Heading>
          {formattedDate}
          {"'"}s Schedule
        </Heading>
        <div>
          <Button color="primary" size="small" onClick={onPrevDate}>
            Prev
          </Button>
          <Button color="primary" size="small" onClick={onNextDate}>
            Next
          </Button>
        </div>
      </TopRow>

      {events.data.length === 0 && (
        <Heading level="h3">No event scheduled for {formattedDate}</Heading>
      )}

      <Row>
        {events.data.map(event => (
          <Button
            key={event._id}
            size="small"
            color={
              currentEvent && currentEvent._id === event._id ? 'primary' : ''
            }
            onClick={() => setCurrentEvent(event)}
          >
            {getName(event)}
          </Button>
        ))}
      </Row>

      {currentEvent && <Event event={currentEvent} />}
    </Layout>
  );
};
export default MealPlanView;
