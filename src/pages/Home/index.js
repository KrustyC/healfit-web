import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import withAuth from 'hoc/withAuth';

import Navbar from 'uikit/organisms/navbars/EmptyNavbar';
import Footer from 'uikit/organisms/Footer';
import Hero from './Hero';
import Features from './Features';
import MoreFeatures from './MoreFeatures';
import Image from './Image';
import Cta from './Cta';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Layout>
      <Navbar />
      <Hero />
      <Features />
      <Image />
      <MoreFeatures />
      <Cta />
      <Footer />
    </Layout>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withAuth(Home);
