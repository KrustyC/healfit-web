import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { withAuth } from 'app/apollo/auth';

import Navbar from 'uikit/organisms/navbars/EmptyNavbar';
import Footer from 'uikit/organisms/Footer';
import Hero from './Hero';
import Presentation from './Presentation';
import Message from './Message';
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
      <Presentation />
      <Image />
      <Message />
      <Cta />
      <Footer />
    </Layout>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withAuth(Home);
