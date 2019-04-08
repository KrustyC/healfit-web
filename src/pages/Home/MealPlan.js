import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';

import Schedule from 'assets/images/undrawn/schedule.svg';

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    min-height: 80vh;
    align-items: center;
    justify-content: center;
    width: ${theme.dimensions.containerWidth.fullscreen};
    margin: 0 auto;
    padding: ${theme.padding.lg};
    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
    }
  `}
`;

const Left = styled.div`
  max-width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  svg {
    height: 500px;
  }
`;

const MealPlan = () => (
  <Container>
    <Left>
      <Heading level="h1">
        Unleash your personal health with our Meal Planner
      </Heading>
      <P>
        Jointoday and start using the Meal Planner to decide ahead what you are
        going to eat during the rest of the week! Trust us, it{"'"}s gonna
        change our life!
      </P>
    </Left>
    <Right>
      <Schedule />
    </Right>
  </Container>
);

export default MealPlan;
