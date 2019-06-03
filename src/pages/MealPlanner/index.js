import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import Navbar from 'uikit/organisms/navbars/LoggedNavbar';
import AddMealOrTrainingModal from './AddMealOrTrainingModal';

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: ${theme.dimensions.containerWidth.fullscreen};
    height: calc(100vh - 100px);
    margin: 15px 0;
    .rbc-calendar {
      width: 90%;
    }
  `}
`;

const meals = [
  {
    id: 1,
    title: 'Eggs and Bacon',
    start: moment('2019-06-03T08:00:00').toDate(),
    end: moment('2019-06-03T10:00:00').toDate(),
    desc: 'Breakfast',
  },
  {
    id: 2,
    title: 'Eggs and Bacon',
    start: moment('2019-06-03T12:00:00').toDate(),
    end: moment('2019-06-03T13:00:00').toDate(),
    desc: 'Breakfast',
  },
  {
    id: 3,
    title: 'Blueberry yogurt',
    start: new Date(2019, 5, 3),
    end: new Date(2019, 5, 3),
  },
];

const MealPlanner = () => {
  // Here use effect , context and stuff to fetch all data
  const [wantToAddMeal, setWantToAddMeal] = useState(false);
  const [currentStartEnd, setCurrentStartEnd] = useState({
    start: null,
    end: null,
  });

  const onCloseMealModal = () => {
    setCurrentStartEnd({ start: null, end: null });
    setWantToAddMeal(false);
  };

  const onSelectSlot = ({ start, end }) => {
    setCurrentStartEnd({ start: moment(start), end: moment(end) });
    setWantToAddMeal(true);
  };

  const onAddMeal = meal => {
    console.log('add meal', meal);
  };

  const onSelectEvent = (x, y, z) => console.log(x, y, z);
  const onView = () => console.log('view');

  return (
    <>
      <Helmet>
        <title>Meal Planner | Healfit</title>
        <meta name="description" content="Meal Planner" />
      </Helmet>
      <Navbar />
      <div>Meal Planner</div>

      <Container>
        <BigCalendar
          selectable
          localizer={localizer}
          events={meals}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={onSelectSlot}
          onSelectEvent={onSelectEvent}
          onView={onView}
          views={['month', 'week', 'day']}
          timeslots={12}
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
