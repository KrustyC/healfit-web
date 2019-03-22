import React, { useContext } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { RootContext } from 'app/contexts/RootContext';

import Navbar from 'components/navbars/DefaultNavbar';
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

const Home = () => {
  const { amILoggedIn } = useContext(RootContext);
  if (amILoggedIn) {
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

export default Home;
