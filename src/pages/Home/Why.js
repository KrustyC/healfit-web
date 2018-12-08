import React from 'react';
import styled from 'styled-components';

import Heading from 'uikit/elements/Heading';

/* eslint-disable global-require */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 600px;
  background-image: url(${require('assets/images/food.jpg')});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Presentation = () => (
  <Container>
    <Heading level="h1">
      Keep It Fit gives you the easiest way to track your progress
    </Heading>
  </Container>
);

/* eslint-enable global-require */

export default Presentation;
