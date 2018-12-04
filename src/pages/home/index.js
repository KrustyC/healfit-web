import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import Features from './Features';
import Message from './Message';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Home = () => (
  <Layout>
    <Hero />
    <Features />
    {/* <Explaination /> */}
    <Testimonials />
    <Message />
    <Footer />
  </Layout>
);

export default Home;
