import React, { useEffect, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { useMealPlannerStore } from './Store';
import AddEventModal from './components/AddEventModal';
import EditOrDeleteModal from './components/EditOrDeleteModal';
import Event from './components/Event';

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
  const [wantToAddEvent, setWantToAddEvent] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState();
  const [focusedEvent, setFocusedEvent] = useState(null);

  const onNavigate = useCallback((date, period) => {
    if (period === 'week') {
      const startDate = moment(date).subtract(2, 'day');
      const endDate = moment(date).add(4, 'day');

      actions.onFetchEvents(startDate.toDate(), endDate.toDate());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onNavigate(new Date(), 'week');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCloseAddModal = () => {
    setSelectedStartTime(null);
    setWantToAddEvent(false);
  };

  const onSelectSlot = ({ start }) => {
    setSelectedStartTime(moment(start));
    setWantToAddEvent(true);
  };

  const onSelectEvent = event => setFocusedEvent(event);

  const onCloseEditOrDeleteModal = () => setFocusedEvent(null);

  const onAddEvent = values => {
    if (values.type === 'meal') {
      actions.onAddMealEvent(values);
    } else {
      actions.onAddWorkoutEvent(values);
    }

    onCloseAddModal();
  };

  const onEditEvent = values => {
    if (values.type === 'meal') {
      actions.onEditMealEvent(focusedEvent._id, values);
    } else {
      actions.onEditWorkoutEvent(focusedEvent._id, values);
    }

    onCloseEditOrDeleteModal(null);
  };

  const onDeleteEvent = () => {
    actions.onDeleteEvent(focusedEvent._id);
    onCloseEditOrDeleteModal(null);
  };

  return (
    <>
      <Container>
        <BigCalendar
          selectable
          events={events.data}
          startAccessor="startTime"
          endAccessor="endTime"
          min={new Date(2016, 10, 0, 5, 0, 0)} // This set the min time to 05:00
          max={new Date(2016, 10, 0, 22, 0, 0)}
          localizer={localizer}
          components={{ event: Event }}
          step={60}
          defaultView="week"
          views={['week', 'day']}
          onSelectSlot={onSelectSlot}
          onSelectEvent={onSelectEvent}
          onNavigate={onNavigate}
        />
      </Container>
      <AddEventModal
        startTime={selectedStartTime}
        show={wantToAddEvent}
        onConfirm={onAddEvent}
        onClose={onCloseAddModal}
      />
      <EditOrDeleteModal
        startTime={selectedStartTime}
        event={focusedEvent}
        show={focusedEvent !== null}
        onDelete={onDeleteEvent}
        onEdit={onEditEvent}
        onClose={onCloseEditOrDeleteModal}
      />
    </>
  );
};

export default MealPlanner;
