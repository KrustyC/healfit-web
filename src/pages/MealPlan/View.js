import React, { useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Heading from 'uikit/elements/Heading';
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

const MealPlanView = () => {
  const [{ events }, actions] = useMealPlanStore();

  const onNavigate = useCallback(day => {
    actions.onFetchMealPlanForDay(day);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // On Load only, fetch the meal plan for today
    onNavigate(new Date());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(events);
  return (
    <Layout>
      <Heading>Today{"'"}s Schedule</Heading>

      {events.data.length === 0 && <h1>THERE IS NOTHING FOR TODAY</h1>}

      {events.data.map(event => (
        <Event key={event._id} event={event} />
      ))}

      {/* <Heading level="h3">
        Breakfast <Time>(08:00 - 09:00)</Time>
      </Heading>
      <Heading level="h3">Lunch</Heading>
      <Heading level="h3">Workout</Heading>
      <Heading level="h3">Dinner</Heading> */}
    </Layout>
  );
};
export default MealPlanView;
