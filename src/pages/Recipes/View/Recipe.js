import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Header from './Header';
import Nutrients from './Nutrients';
import Info from './Info';
import Ingredients from './Ingredients';
import Method from './Method';
import Bottom from './Bottom';

const Layout = styled.div`
  ${({ theme }) => css`
    min-height: calc(100vh - ${theme.dimensions.navbarHeight});
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${theme.dimensions.containerWidth.large};
    margin: 0 auto;

    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
    }
  `}
`;

const Recipe = ({ recipe }) => (
  <Layout>
    <Header recipe={recipe} />
    <Nutrients recipe={recipe} />
    <Info recipe={recipe} />
    <Ingredients ingredients={recipe.ingredients} />
    <Method method={recipe.method} />
    <Bottom />
  </Layout>
);

Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipe;
