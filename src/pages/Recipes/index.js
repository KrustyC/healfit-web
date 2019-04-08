import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Navbar from 'uikit/organisms/navbars/LoggedNavbar';
import Drawer from 'uikit/organisms/drawers/LoggedDrawer';

import CreateRecipe from './Create';
import EditRecipe from './Edit';
import ViewRecipe from './View';
import ListRecipes from './List';

const RecipesIndex = ({ match: { path } }) => (
  <Fragment>
    <Navbar />
    <Drawer />
    <Switch>
      <Route path={`${path}/create`} component={CreateRecipe} />
      <Route path={`${path}/edit/:slug`} component={EditRecipe} />
      <Route path={`${path}/:slug`} component={ViewRecipe} />
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
