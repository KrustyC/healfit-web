import React from 'react';
import Link from 'uikit/elements/Link';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';
import Layout from './components/Layout';

const Cta = () => (
  <Layout size="fullscreen" direction="column" coloured>
    <Heading level="h1" align="center" color="white">
      Try Healfit, it{"'"}s easy!
    </Heading>
    <P align="center" color="white">
      And it{"'"}s free as well, how can you not try it?
    </P>

    <Link to="/auth/signup" type="submit" size="large" component="button">
      GET STARTED
    </Link>
  </Layout>
);

export default Cta;
