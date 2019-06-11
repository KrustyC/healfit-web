import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { useMealPlannerStore } from './Store';
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

const MealPlanner = () => {
  // Here use effect , context and stuff to fetch all data

  const [wantToAddMeal, setWantToAddMeal] = useState(false);
  const [currentStartEnd, setCurrentStartEnd] = useState({
    start: null,
    end: null,
  });

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

  const onRangeChange = whatever => console.log('navigate', whatever);

  const onAddMeal = values => {
    console.log(values);
  };

  return (
    <>
      <Container>
        <BigCalendar
          selectable
          events={mealPlan}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          views={['week', 'day']}
          timeslots={12}
          onSelectSlot={onSelectSlot}
          onView={onView}
          onRangeChange={onRangeChange}
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
