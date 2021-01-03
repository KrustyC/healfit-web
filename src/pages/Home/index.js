import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { RootContext } from 'app/contexts/RootContext';

import Footer from 'uikit/organisms//footers/HomeFooter';
import Header from './Header';
import Main from './Main';
import Features from './Features';
import MealPlan from './MealPlan';
import Cta from './Cta';

const Home = () => {
  const { amILoggedIn } = useContext(RootContext);

  if (amILoggedIn) {
    return <Redirect to="/meal-plan" />;
  }

  return (
    <>
      <Header />
      <Main />
      <Features />
      <Cta />
      <MealPlan />
      <Footer />
    </>
  );
};

export default Home;
