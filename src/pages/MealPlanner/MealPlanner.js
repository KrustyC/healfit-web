import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import dayGridPlugin from '@fullcalendar/daygrid';

import { useMealPlannerStore } from './Store';
import AddMealOrTrainingModal from './AddMealOrTrainingModal';

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

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
    }
  `}
`;

const MealPlanner = () => {
  // Here use effect , context and stuff to fetch all data
  const calendarComponentRef = useRef();
  const [wantToAddMeal, setWantToAddMeal] = useState(false);
  const [currentStartEnd, setCurrentStartEnd] = useState({
    start: null,
    end: null,
  });
  const today = new Date();
  const [{ mealPlan }, { loadMealPlan }] = useMealPlannerStore();

  const onCloseMealModal = () => {
    setCurrentStartEnd({ start: null, end: null });
    setWantToAddMeal(false);
  };

  const onSelectSlot = ({ start, end }) => {
    setCurrentStartEnd({ start: moment(start), end: moment(end) });
    setWantToAddMeal(true);
  };

  const onView = () => console.log('view');

  const onRangeChange = whatever => console.log('range', whatever);
  const onNavigate = whatever => console.log('navigate', whatever);

  const onAddMeal = values => {
    console.log(values);
  };

  return (
    <>
      <Container>
        {/* <BigCalendar
          selectable
          events={mealPlan}
          date={today}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          views={['week', 'day']}
          timeslots={12}
          onSelectSlot={onSelectSlot}
          onView={onView}
          onRangeChange={onRangeChange}
          onNavigate={onNavigate}
        /> */}
        <FullCalendar
          selectable
          ref={calendarComponentRef}
          allDaySlot={false}
          slotEventOverlap={false}
          loading
          events={[
            {
              title: 'event 1',
              start: '2019-06-12T12:30',
              end: '2019-06-12T13:30',
            },
            // { title: 'event 2', date: '2019-06-12T13:30' },
          ]}
          defaultView="timeGridDay"
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay',
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          select={onSelectSlot}
          refetch={() => console.log('should refetch')}
          // select={(start, end) => console.log('select', start, end)}
        />
      </Container>
      <AddMealOrTrainingModal
        startEnd={currentStartEnd}
        show={wantToAddMeal}
        onConfirm={onAddMeal}
        onClose={onCloseMealModal}
      />
    </>
  );
};
export default MealPlanner;
