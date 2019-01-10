import React from 'react';
import styled, { css } from 'styled-components';

import Heading from 'uikit/elements/Heading';
import Layout from './components/Layout';
import FeaturesGrid from './components/FeaturesGrid';

/* eslint-disable global-require */
const features = [
  {
    title: 'Create your recipes',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales sodales. Aenean ut ante tempus, feugiat risus et, hendrerit leo. Pellentesque imperdiet ipsum id urna rhoncus elementum sit amet quis nulla.',
    icon: require('assets/icons/clipboard.svg'),
  },
  {
    title: 'Create your meal plan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales sodales. Aenean ut ante tempus, feugiat risus et, hendrerit leo. Pellentesque imperdiet ipsum id urna rhoncus elementum sit amet quis nulla.',
    icon: require('assets/icons/calendar.svg'),
  },
  {
    title: 'Track your progress',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales sodales. Aenean ut ante tempus, feugiat risus et, hendrerit leo. Pellentesque imperdiet ipsum id urna rhoncus elementum sit amet quis nulla.',
    icon: require('assets/icons/tablet.svg'),
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Screenshot = styled.img`
  ${({ theme }) => css`
    border-radius: 15px;
    filter: grayscale(20%);
    box-shadow: 0 23px 40px rgba(0, 0, 0, 0.2);
    width: 800px;
    margin: ${theme.margin.md} 0px;
  `}
`;

const Presentation = () => (
  <Layout size="fullscreen">
    <Container>
      <Heading level="h1">
        Healfit gives you the easiest way to track your progress
      </Heading>
      <Screenshot src={require('assets/images/screenshot.png')} />
      <FeaturesGrid features={features} />
    </Container>
  </Layout>
);

/* eslint-enable global-require */

export default Presentation;
