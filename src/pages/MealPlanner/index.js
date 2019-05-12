import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';

import Navbar from 'uikit/organisms/navbars/LoggedNavbar';

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: ${theme.dimensions.containerWidth.large};
    margin: 0 auto;
  `}
`;

const Headings = styled.th`
  margin-right: 10px;
`;

const Day = styled.div`
  margin-right: 10px;
`;

const Dish = styled.div``;

const Position = styled.tr`
  height: 150px;
`;

const PositionHeader = styled.th`
  transform: rotate(-90deg);
`;

const Cell = styled.td`
  border: 1px solid black;
  width: 200px;
  /* display: flex;
  flex-direction: column; */
`;

const CellContent = styled.td`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Meal = styled.div`
  /* display: flex; */
  flex-direction: column;
`;

const days = [
  { id: 1, name: '07/09 Monday' },
  { id: 2, name: '08/09 Tuesay' },
  { id: 3, name: '09/09 Wednesday' },
  { id: 4, name: '10/09 Thursday' },
  { id: 5, name: '11/09 Friday' },
  { id: 6, name: '12/09 Saturday' },
  { id: 7, name: '13/09 Sunday' },
];

const positions = [
  { id: 1, name: 'Breakfast', order: 1 },
  { id: 2, name: 'Snack', order: 2 },
  { id: 3, name: 'Lunch', order: 3 },
  { id: 4, name: 'Snack', order: 4 },
  { id: 5, name: 'Training', order: 5 },
  { id: 6, name: 'Dinner', order: 6 },
];

const MealPlanner = () => {
  const [meals, setMeals] = useState({});

  return (
    <>
      <Helmet>
        <title>Meal Planner | Healfit</title>
        <meta name="description" content="Meal Planner" />
      </Helmet>
      <Navbar />
      <div>Meal Planner</div>
      <Container>
        <table>
          <thead>
            <th />
            {days.map(day => (
              <th>{day.name}</th>
            ))}
          </thead>
          <tbody>
            {positions.map(position => (
              <Position>
                <PositionHeader scope="row">{position.name}</PositionHeader>
                {days.map(day => (
                  <Cell>
                    <CellContent>
                      <Meal>Eggs and bacon</Meal>
                    </CellContent>
                  </Cell>
                ))}
              </Position>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default MealPlanner;
