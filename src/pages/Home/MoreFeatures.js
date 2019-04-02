import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';

import Transaction from 'assets/icons/transaction.svg';
import Notes from 'assets/icons/notes.svg';
import Target from 'assets/icons/target.svg';

import FeaturesGrid from './components/FeaturesGrid';

/* eslint-disable global-require */
const features = [
  {
    title: 'Free to Use',
    content:
      'Big data software and analytics services will render your huge chunks into meaningful data. Try it now.',
    icon: Transaction,
  },
  {
    title: '100+ Pre-Loaded Recipes',
    content:
      'Big data software and analytics services will render your huge chunks into meaningful data. Try it now.',
    icon: Notes,
  },
  {
    title: 'Proven to Work',
    content:
      'Big data software and analytics services will render your huge chunks into meaningful data. Try it now.',
    icon: Target,
  },
];

/* eslint-enable global-require */

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

const MoreFeatures = () => (
  <Container>
    <Heading level="h1" align="center">
      Designed for you to succeed
    </Heading>
    <P align="center">
      Best in class big data software and analytics services will render your
      huge chunks into meaningful data. Try the demo now.
    </P>
    <FeaturesGrid features={features} />
  </Container>
);

export default MoreFeatures;
