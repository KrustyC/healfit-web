import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from 'uikit/organisms/navbars/LoggedNavbar';
import Store from './Store';
import View from './View';

const MealPlanIndex = () => (
  <>
    <Helmet>
      <title>Your Meal Plan | Healfit</title>
      <meta name="description" content="Meal Plann" />
    </Helmet>
    <Navbar />
    <Store>
      <View />
    </Store>
  </>
);

export default MealPlanIndex;
