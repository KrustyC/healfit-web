import React from 'react';
import styled, { css } from 'styled-components';

import Heading from 'uikit/elements/Heading';
import Clipboard from 'assets/icons/clipboard.svg';
import Calendar from 'assets/icons/calendar.svg';
import Tablet from 'assets/icons/tablet.svg';
import FeaturesGrid from './components/FeaturesGrid';

/* eslint-disable global-require */
const features = [
  {
    title: 'Create your recipes',
    content:
      'Healfit databse contains hundreds of recipes, but if you find any missing one, you ar every welcome to add it yourself. it only takes a few minutes! ',
    icon: Clipboard,
  },
  {
    title: 'Create your meal plan',
    content:
      'Create a weekly meal plan so that you will always know what to eat and when! It will help you following an healthy eating scheme.',
    icon: Calendar,
  },
  {
    title: 'Track your progress',
    content:
      'Track your results and compare them to what you have eaten, so that you can easily find out which recipes work best for you!',
    icon: Tablet,
  },
];

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${theme.dimensions.containerWidth.large};
    margin: 0 auto;
    padding: ${theme.padding.lg} ${theme.padding.xs};
    min-height: 70vh;
    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
    }
  `}
`;

const Features = () => (
  <Container>
    <Heading level="h1" align="center">
      Tracking your progress has never been easier
    </Heading>
    <br />
    <br />
    <FeaturesGrid features={features} />
  </Container>
);

/* eslint-enable global-require */

export default Features;
