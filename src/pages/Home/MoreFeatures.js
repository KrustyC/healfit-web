import React from 'react';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';

import Transaction from 'assets/icons/transaction.svg';
import Notes from 'assets/icons/notes.svg';
import Target from 'assets/icons/target.svg';

import Layout from './components/Layout';
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

const MoreFeatures = () => (
  <Layout size="large" direction="column">
    <Heading level="h1" align="center">
      Designed for you to succeed
    </Heading>
    <P align="center">
      Best in class big data software and analytics services will render your
      huge chunks into meaningful data. Try the demo now.
    </P>
    <FeaturesGrid features={features} />
  </Layout>
);

export default MoreFeatures;
