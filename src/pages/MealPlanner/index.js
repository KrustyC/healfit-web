import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Navbar from 'uikit/organisms/navbars/LoggedNavbar';
import DayRangePicker from './DayRangePicker';

const moment = extendMoment(Moment);

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: ${theme.dimensions.containerWidth.fullscreen};
    margin: 0 auto;
  `}
`;

const Side = styled.div`
  display: flex;
  flex: 2;
`;

const Main = styled.div`
  display: flex;
  flex: 8;
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
  justify-content: flex-start;
`;

const Meal = styled.div`
  /* display: flex; */
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  color: white;
  border-radius: 5px;

  :first-of-type {
    background: palevioletred;
  }

  :nth-of-type(2) {
    background: mediumaquamarine;
  }
`;

const positions = [
  { id: 1, name: 'Breakfast', order: 1 },
  { id: 2, name: 'Snack', order: 2 },
  { id: 3, name: 'Lunch', order: 3 },
  { id: 4, name: 'Snack', order: 4 },
  { id: 5, name: 'Dinner', order: 5 },
];

// Use effect to load meal plan for current week

const mealPlan = [
  {
    date: '28/05/2019',
    meals: [
      {
        name: 'Breakfast',
        order: 1,
        recipes: [{ _id: '054165132', name: 'Eggs and Avocado', slug: '' }],
      },
      {
        name: 'Lunch',
        order: 3,
        recipes: [
          { _id: '054165132', name: 'Pasta with Salmon', slug: '' },
          { _id: '054165132', name: 'Salad', slug: '' },
        ],
      },
      {
        name: 'Snack',
        order: 4,
        recipes: [
          {
            _id: '054165132',
            name: 'Chocolate and raspberries',
            slug: 'chocolate-and-raspberries',
          },
        ],
      },
      {
        name: 'Dinner',
        order: 5,
        recipes: [
          { _id: '054165132', name: 'Tofu stir fry', slug: 'tofu' },
          { _id: '054165132', name: 'Baked aubergines', slug: 'aubergine' },
        ],
      },
    ],
  },
  {
    date: '29/05/2019',
    meals: [
      {
        name: 'Breakfast',
        order: 1,
        recipes: [{ _id: '054165132', name: 'Eggs and Avocado', slug: '' }],
      },
      {
        name: 'Snack',
        order: 2,
        recipes: [{ _id: '054165132', name: 'Kiwi and almonds', slug: '' }],
      },
      {
        name: 'Lunch',
        order: 3,
        recipes: [
          { _id: '054165132', name: 'Pasta with Salmon', slug: '' },
          { _id: '054165132', name: 'Salad', slug: '' },
        ],
      },
      {
        name: 'Snack',
        order: 4,
        recipes: [
          {
            _id: '054165132',
            name: 'Chocolate and blueberries',
            slug: 'chocolate-and-raspberries',
          },
        ],
      },
      {
        name: 'Dinner',
        order: 5,
        recipes: [
          { _id: '054165132', name: 'Salmon', slug: 'tofu' },
          { _id: '054165132', name: 'Asparagus', slug: 'aubergine' },
        ],
      },
    ],
  },
  {
    date: '30/05/2019',
    meals: [
      {
        name: 'Breakfast',
        order: 1,
        recipes: [{ _id: '054165132', name: 'Eggs and Avocado', slug: '' }],
      },
      {
        name: 'Snack',
        order: 2,
        recipes: [{ _id: '054165132', name: 'Kiwi and almonds', slug: '' }],
      },
      {
        name: 'Lunch',
        order: 3,
        recipes: [
          { _id: '054165132', name: 'Pasta with Salmon', slug: '' },
          { _id: '054165132', name: 'Salad', slug: '' },
        ],
      },
      {
        name: 'Snack',
        order: 4,
        recipes: [
          {
            _id: '054165132',
            name: 'Chocolate and raspberries',
            slug: 'chocolate-and-raspberries',
          },
        ],
      },
      {
        name: 'Dinner',
        order: 5,
        recipes: [
          { _id: '054165132', name: 'Tofu stir fry', slug: 'tofu' },
          { _id: '054165132', name: 'Baked aubergines', slug: 'aubergine' },
        ],
      },
    ],
  },
  {
    date: '31/05/2019',
    meals: [],
  },
  {
    date: '01/06/2019',
    meals: [],
  },
  {
    date: '02/06/2019',
    meals: [],
  },
  {
    date: '03/06/2019',
    meals: [],
  },
  {
    date: '04/06/2019',
    meals: [],
  },
];

const MealPlanner = () => {
  const [meals, setMeals] = useState(mealPlan);
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add(7, 'days'));

  const onDatesChange = dates => {
    console.log('date changes', dates);
    setStartDate(dates.startDate);
    setEndDate(dates.endDate);
  };

  // const startDateString = startDate && startDate.format('YYYY-MM-DD');
  // const endDateString = endDate && endDate.format('YYYY-MM-DD');
  const range = moment.range(startDate, endDate);
  const days = Array.from(range.by('days'));

  return (
    <>
      <Helmet>
        <title>Meal Planner | Healfit</title>
        <meta name="description" content="Meal Planner" />
      </Helmet>
      <Navbar />
      <div>Meal Planner</div>

      <Container>
        <Side>
          <DayRangePicker
            startDate={startDate}
            endDate={endDate}
            onDatesChange={onDatesChange}
          />
        </Side>
        <Main>
          <table>
            <thead>
              <th />
              {days.map(day => (
                <th>{day.format('D/M dddd')}</th>
              ))}
            </thead>
            <tbody>
              {positions.map(position => (
                <Position>
                  <PositionHeader scope="row">{position.name}</PositionHeader>
                  {days.map(date => {
                    const dailyMeals = meals.find(
                      mealDay => mealDay.date === date.format('DD/MM/YYYY')
                    );

                    if (!dailyMeals) {
                      return <Cell />;
                    }

                    const currentMeal = dailyMeals.meals.find(
                      meal => meal.name === position.name
                    );

                    if (!currentMeal) {
                      return <Cell />;
                    }

                    return (
                      <Cell>
                        <CellContent>
                          {currentMeal.recipes.map(recipe => (
                            <Meal>{recipe.name}</Meal>
                          ))}
                        </CellContent>
                      </Cell>
                    );
                  })}
                </Position>
              ))}
            </tbody>
          </table>
        </Main>
      </Container>
    </>
  );
};

export default MealPlanner;
