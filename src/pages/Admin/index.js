import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect, Route } from 'react-router-dom';
import Navbar from 'uikit/organisms/navbars/AdminNavbar';

import Ingridients from './Ingridients';

const IngridientIndex = ({ match: { path } }) => (
  <div>
    <Navbar />
    <Switch>
      <Route path={`${path}/ingridients`} component={Ingridients} />
      <Redirect to={`${path}/signin`} />
    </Switch>
  </div>
);

IngridientIndex.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default IngridientIndex;
