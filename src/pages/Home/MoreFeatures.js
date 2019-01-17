import React from 'react';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';

import Layout from './components/Layout';
import FeaturesGrid from './components/FeaturesGrid';

/* eslint-disable global-require */
const features = [
  {
    title: 'Free to Use',
    content:
      'Big data software and analytics services will render your huge chunks into meaningful data. Try it now.',
    icon: require('assets/icons/transaction.svg'),
  },
  {
    title: '100+ Pre-Loaded Recipes',
    content:
      'Big data software and analytics services will render your huge chunks into meaningful data. Try it now.',
    icon: require('assets/icons/notes.svg'),
  },
  {
    title: 'Proven to Work',
    content:
      'Big data software and analytics services will render your huge chunks into meaningful data. Try it now.',
    icon: require('assets/icons/target.svg'),
  },
];

/* eslint-enable global-require */

const MoreFeatures = () => (
  <Layout size="large">
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
