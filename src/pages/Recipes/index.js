import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Navbar from 'uikit/organisms/navbars/EmptyNavbar';

import CreateRecipe from './Create';
import EditRecipe from './Edit';
import ViewRecipe from './View';
import ListRecipes from './List';

const RecipesIndex = ({ match: { path } }) => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route path={`${path}/create`} component={CreateRecipe} />
      <Route path={`${path}/edit/:id`} component={EditRecipe} />
      <Route path={`${path}/:id`} component={ViewRecipe} />
      <Route component={ListRecipes} />
    </Switch>
  </Fragment>
);

RecipesIndex.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipesIndex;
