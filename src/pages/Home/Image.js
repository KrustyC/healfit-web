import React from 'react';
import styled, { css } from 'styled-components';

import Heading from 'uikit/elements/Heading';

/* eslint-disable global-require */
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 600px;
`;

const Skrew = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  overflow: hidden;
  background-image: url(${require('assets/images/food.jpg')});
  background-repeat: no-repeat;
  background-size: cover;
  transform: skew(0deg, -2deg);
`;

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
`;

const Div = styled.div`
  ${({ theme }) => css`
     display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    /* padding: ${theme.padding.md} ${theme.padding.sm}; */
    height: 100%;
    width: 100%;
    /* position: relative; */
    /* display: block; */
    /* width: 100%;
    max-width: 1100px; */
    /* margin-right: auto;
    margin-left: auto;
    padding-right: 32px;
    padding-left: 32px; */
  `}
`;

const Image = () => (
  <Container>
    <Skrew>
      <Overlay />
    </Skrew>

    <Div>
      <Heading level="h1" align="center">
        Healfit gives you the easiest way to track your progress
      </Heading>
    </Div>
  </Container>
);

/* eslint-enable global-require */

export default Image;
