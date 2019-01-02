import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { withAuth } from 'app/apollo/auth';

import Hero from './Hero';
import Presentation from './Presentation';
import Message from './Message';
import Why from './Why';
import Testimonials from './Testimonials';
import Enquiry from './Enquiry';
import Footer from './Footer';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Home = ({ isAuthenticated }) => {
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Layout>
      <Hero />
      <Presentation />
      <Why />
      <Message />
      <Testimonials />
      <Enquiry />
      <Footer />
    </Layout>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withAuth(Home);
