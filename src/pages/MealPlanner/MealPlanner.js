import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import dayGridPlugin from '@fullcalendar/daygrid';

import AddMealOrTrainingModal from './AddMealOrTrainingModal';

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

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MealPlanner = () => {
  // Here use effect , context and stuff to fetch all data
  const calendarComponentRef = useRef();
  const [wantToAddMeal, setWantToAddMeal] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState();

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

    const mewal = {
      title: 'Workout',
      start: '2019-06-19T12:30',
      end: '2019-06-19T13:30',
    };
    calendarComponentRef.current.calendar.addEvent(mewal);
    onCloseMealModal();
  };

  const onPrev = () => {
    calendarComponentRef.current.calendar.prev();
  };

  const fetchEvents = ({ start, end }, callback) => {
    console.log(new Date(start));
    return callback([
      {
        title: 'event 1',
        start: '2019-06-18T12:30',
        end: '2019-06-18T13:30',
      },
    ]);
  };

  return (
    <>
      <Container>
        {/* <BigCalendar
          events={[
            {
              title: 'My event',
              allDay: false,
              start: new Date(2018, 0, 1, 10, 0), // 10.00 AM
              end: new Date(2018, 0, 1, 14, 0), // 2.00 PM
            },
          ]}
          onNavigate={(params, par) => console.log('navigate', params, par)}
          // step={60}
          // // view="week"
          // // views={['week']}
          // min={new Date(2008, 0, 1, 8, 0)} // 8.00 AM
          // max={new Date(2008, 0, 1, 17, 0)} // Max will be 6.00 PM!
          // date={new Date(2018, 0, 1)}
        /> */}
        <BigCalendar
          selectable
          events={[
            {
              title: 'My event',
              allDay: false,
              start: new Date(2019, 5, 18),
              end: new Date(2019, 5, 18),
              resourceId: 'breakfast',
            },
            {
              title: 'My event',
              allDay: false,
              start: new Date(2019, 5, 19),
              end: new Date(2019, 5, 19),
              resourceId: 'lunch',
            },
          ]}
          // date={today}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          views={['week', 'day']}
          timeslots={12}
          onSelectSlot={onSelectSlot}
          resources={[
            {
              id: 'breakfast',
              title: 'Breakfast',
            },
            {
              id: 'snack',
              title: 'Snack',
            },
            {
              id: 'lunch',
              title: 'Lunch',
            },
          ]}
          // onView={onView}
          // onRangeChange={onRangeChange}
          // onNavigate={onNavigate}
          onNavigate={(params, par) => console.log('navigate', params, par)}
        />
        {/* <FullCalendar
          selectable
          events={fetchEvents}
          minTime="05:00:00"
          mixTime="22:00:00"
          ref={calendarComponentRef}
          defaultView="timeGridWeek"
          allDaySlot={false}
          slotEventOverlap={false}
          header={{
            left: 'title',
            right: 'prev,next',
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          select={onSelectSlot}
        /> */}
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
