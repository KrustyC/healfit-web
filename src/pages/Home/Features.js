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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales sodales. Aenean ut ante tempus, feugiat risus et, hendrerit leo. Pellentesque imperdiet ipsum id urna rhoncus elementum sit amet quis nulla.',
    icon: Clipboard,
  },
  {
    title: 'Create your meal plan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales sodales. Aenean ut ante tempus, feugiat risus et, hendrerit leo. Pellentesque imperdiet ipsum id urna rhoncus elementum sit amet quis nulla.',
    icon: Calendar,
  },
  {
    title: 'Track your progress',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales sodales. Aenean ut ante tempus, feugiat risus et, hendrerit leo. Pellentesque imperdiet ipsum id urna rhoncus elementum sit amet quis nulla.',
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
    padding: ${theme.padding.md} ${theme.padding.xs};
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
    <FeaturesGrid features={features} />
  </Container>
);

/* eslint-enable global-require */

export default Features;
