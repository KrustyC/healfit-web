import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { useMealPlannerStore } from './Store';
import AddMealOrTrainingModal from './AddMealOrTrainingModal';
import Event from './Event';

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: ${theme.dimensions.containerWidth.fullscreen};
    padding: ${theme.padding.lg};
    height: calc(100vh - 100px);
    margin: 15px 0;
    .rbc-calendar {
      width: 90%;

      .rbc-time-content {
        border-top-width: 1px;
      }

      .rbc-allday-cell {
        display: none;
      }

      .rbc-btn-group {
        button {
          font-weight: bold;
          padding: ${theme.padding.xs} ${theme.padding.md};
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};

          &.rbc-active,
          :hover,
          :focus {
            color: ${theme.colors.white};
            background: ${theme.colors.primary};
          }
        }
      }

      .rbc-event {
        padding: 0;
        border: none;
        .rbc-event-label {
          display: none;
        }
      }
    }
  `}
`;

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MealPlanner = () => {
  // Here use effect , context and stuff to fetch all data
  const [{ events }, actions] = useMealPlannerStore();
  const [wantToAddMeal, setWantToAddMeal] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState();
  console.log('re render');
  useEffect(() => {
    actions.onFetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCloseMealModal = () => {
    setSelectedStartTime(null);
    setWantToAddMeal(false);
  };

  const onSelectSlot = ({ start }) => {
    setSelectedStartTime(moment(start));
    setWantToAddMeal(true);
  };

  const onAddMeal = values => {
    console.log(values);

    const start = values.day;

    const meal = {
      title: 'Workout',
      start: '2019-06-19T12:30',
      end: '2019-06-19T13:30',
    };

    onCloseMealModal();
  };

  const onNavigate = (date, period) => {
    if (period === 'week') {
      const fromDate = moment(date)
        .subtract(2, 'day')
        .format('DD-MM-YYYY');
      const toDate = moment(date)
        .add(4, 'day')
        .format('DD-MM-YYYY');
      actions.onFetchEvents(fromDate, toDate);
    }
  };

  return (
    <>
      <Container>
        <BigCalendar
          selectable
          events={events.data}
          min={new Date(2016, 10, 0, 5, 0, 0)} // This set the min time to 05:00
          max={new Date(2016, 10, 0, 22, 0, 0)}
          localizer={localizer}
          components={{ event: Event }}
          step={60}
          defaultView="week"
          views={['week', 'day']}
          onSelectSlot={onSelectSlot}
          onNavigate={onNavigate}
        />
      </Container>
      <AddMealOrTrainingModal
        startTime={selectedStartTime}
        show={wantToAddMeal}
        onConfirm={onAddMeal}
        onClose={onCloseMealModal}
      />
    </>
  );
};
export default MealPlanner;
