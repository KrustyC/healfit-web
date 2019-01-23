import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect, Route } from 'react-router-dom';

import Ingridients from './Ingridients';

const IngridientIndex = ({ match: { path } }) => (
  <Switch>
    <Route path={`${path}/ingridients`} component={Ingridients} />
    <Redirect to={`${path}/signin`} />
  </Switch>
);

IngridientIndex.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default IngridientIndex;
