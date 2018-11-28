import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from 'uikit/blocks/Container';
import Heading from 'uikit/elements/Heading';

const Layout = styled(Container)`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => (
  <Layout size="fullscreen">
    <Heading>Welcome to Keep It Fit</Heading>
    <Link to="/about">About</Link>
  </Layout>
);

export default Home;
