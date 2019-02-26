import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect, Route } from 'react-router-dom';
import Navbar from 'uikit/organisms/navbars/AdminNavbar';
import Container from 'uikit/blocks/Container';

import Ingredients from './Ingredients';

const IngredientIndex = ({ match: { path } }) => (
  <>
    <Navbar />
    <Container size="fullscreen">
      <Switch>
        <Route path={`${path}/ingredients`} component={Ingredients} />
        <Redirect to={`${path}/signin`} />
      </Switch>
    </Container>
  </>
);

IngredientIndex.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default IngredientIndex;
