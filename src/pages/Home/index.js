import React, { useContext } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { RootContext } from 'app/contexts/RootContext';

import Footer from 'uikit/organisms//footers/HomeFooter';
import Hero from './Hero';
import Features from './Features';
import MealPlan from './MealPlan';
import Cta from './Cta';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Home = () => {
  const { amILoggedIn } = useContext(RootContext);
  if (amILoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Layout>
      <Hero />
      <Features />
      <Cta />
      <MealPlan />
      <Footer />
    </Layout>
  );
};

export default Home;
