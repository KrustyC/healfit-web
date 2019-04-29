import React from 'react';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';
import gql from 'graphql-tag';
import { compose, graphql, Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import Button from 'uikit/blocks/Button';

import Item from './Item';

const Layout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: ${theme.dimensions.containerWidth.large};
    margin: ${theme.margin.lg} auto;

    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
      padding: 0 ${theme.padding.sm};
    }
  `}
`;

const Top = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.margin.md};
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
  <>
    <Helmet>
      <title>Recipes | Healfit</title>
      <meta name="description" content="List of recipes available in Healfit" />
    </Helmet>
    <Layout>
      <Query query={GET_RECIPES}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <>
              <Top>
                <Button as={Link} to="/recipes/create">
                  New Recipe
                </Button>
              </Top>
              <Grid>
                {data.recipes.map(recipe => (
                  <Item key={recipe.slug} recipe={recipe} />
                ))}
              </Grid>
            </>
          );
        }}
      </Query>
    </Layout>
  </>
);

export default compose(graphql(GET_RECIPES, { name: 'getRecipes' }))(Recipes);
