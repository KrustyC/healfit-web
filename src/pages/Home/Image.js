import React from 'react';
import styled, { css } from 'styled-components';

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

const Div = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    padding: ${theme.padding.md} ${theme.padding.sm};
  `}
`;

const Image = () => (
  <Container>
    <Div>
      <Heading level="h1" align="center">
        Healfit gives you the easiest way to track your progress
      </Heading>
    </Div>
  </Container>
);

/* eslint-enable global-require */

export default Image;
