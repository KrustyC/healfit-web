import React from 'react';
import styled from 'styled-components';

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

const Home = () => (
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

export default Home;
