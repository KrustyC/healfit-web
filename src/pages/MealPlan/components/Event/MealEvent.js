import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Chart } from 'react-google-charts';
import Heading from 'uikit/elements/Heading';
import Card from 'uikit/blocks/Card';

import Recipe from './Recipe';

const Container = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: ${({ theme }) => theme.margin.md};
  }
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

const ChartCard = styled(Card)`
  ${({ theme }) => css`
    width: 300px;
    padding: ${theme.padding.sm};
    align-items: center;

    #chart {
      margin-top: ${theme.margin.sm};
      width: 200px;
    }
  `};
`;

const options = {
  chartArea: { left: 0, top: 0, width: '95%', height: '95%' },
  fontSize: 14,
  slices: {
    0: { color: '#216583' },
    1: { color: '#f76262' },
    2: { color: '#65c0ba' },
  },
  pieSliceText: 'label',
  legend: 'none',
};

const MealPlanView = ({ event }) => (
  <Container>
    <div>
      <Heading level="h3">Nutritional Info</Heading>
      <ChartCard>
        <span>
          <b>Total Calories: </b>
          {event.macros.calories}
        </span>
        <div id="chart">
          <Chart
            chartType="PieChart"
            data={[
              ['Macronutrient', 'Percentage'],
              ['Protein', event.macros.protein],
              ['Carbs', event.macros.carbs],
              ['Fat', event.macros.fat],
            ]}
            options={options}
          />
        </div>
      </ChartCard>
    </div>
    <div>
      <Heading level="h3">Recipes</Heading>
      <Row>
        {event.recipes.map(recipe => (
          <Recipe key={recipe._id} recipe={recipe} />
        ))}
      </Row>
    </div>
  </Container>
);

MealPlanView.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    startTime: PropTypes.object.isRequired,
    endTime: PropTypes.object.isRequired,
    recipes: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default MealPlanView;
