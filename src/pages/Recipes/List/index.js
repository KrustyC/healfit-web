import React from 'react';
import styled, { css } from 'styled-components';
import gql from 'graphql-tag';
import { compose, graphql, Query } from 'react-apollo';
import Item from './Item';

const Layout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    /* width: ${theme.dimensions.containerWidth.default}; */
    margin: ${theme.margin.lg} auto;

    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
    }
  `}
`;

const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.margin.lg};

    @media only screen and (min-width: ${theme.sizes.md}) {
      grid-template-columns: 1fr 1fr;
    }

    @media only screen and (min-width: ${theme.sizes.lg}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `}
`;

const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      slug
      title
      calories
      description
      picture
      rating
      category {
        name
      }
    }
  }
`;

const Recipes = () => (
  <Layout>
    <Query query={GET_RECIPES}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return (
          <Grid>
            {data.recipes.map(recipe => (
              <Item key={recipe.slug} recipe={recipe} />
            ))}
          </Grid>
        );
      }}
    </Query>
  </Layout>
);

export default compose(graphql(GET_RECIPES, { name: 'getRecipes' }))(Recipes);
