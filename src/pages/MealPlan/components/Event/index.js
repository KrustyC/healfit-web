import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'uikit/elements/Heading';
import Recipe from './Recipe';

const Time = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xsmall};
    font-style: italic;
  `}
`;

const MealPlanView = ({ event }) => (
  <div>
    <Heading level="h3">
      Breakfast <Time>(08:00 - 09:00)</Time>
    </Heading>
    {event.__typename === 'MealEvent' ? (
      <div>
        {event.recipes.map(
          recipe => (
            console.log(recipe), <Recipe key={recipe._id} recipe={recipe} />
          )
        )}
      </div>
    ) : (
      <h1>This is a workout</h1>
    )}
    )
  </div>
);

export default MealPlanView;
