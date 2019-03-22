import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Create from './Create';
import List from './List';

const AdminIngredientsIndex = ({ match: { path } }) => (
  <Switch>
    <Route path={`${path}/create`} component={Create} />
    <Route path={`${path}`} component={List} />
  </Switch>
);

AdminIngredientsIndex.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default AdminIngredientsIndex;
