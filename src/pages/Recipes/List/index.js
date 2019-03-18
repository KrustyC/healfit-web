import React from 'react';
import styled, { css } from 'styled-components';
import gql from 'graphql-tag';
import { compose, graphql, Query } from 'react-apollo';
import { getImageURL } from 'app/helpers/images';

import { UikStarRating, UikAvatar, Uikon } from '@duik';
import Link from 'uikit/elements/Link';
import Card from 'uikit/blocks/Card'; // @TODO Move to UIKIT

const Layout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: ${theme.dimensions.containerWidth.default};
    margin: 0 auto;
    margin: ${theme.margin.lg} 0;

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
    }
  }
`;

const Image = styled.img`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    height: 150px;
    width: 300px;
  `}
`;

const Info = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.margin.sm};
    display: flex;
    justify-content: space-between;
  `}
`;

const Time = styled.div`
  display: flex;
  align-items: center;
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
              <Card width="300px" key={recipe.slug}>
                <Card.Thumb>
                  <Image
                    src={getImageURL(
                      recipe.picture,
                      'w_350,h_200,g_face,c_thumb'
                    )}
                    alt="recipe image"
                  />
                </Card.Thumb>
                <Card.Main>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Description>{recipe.description}</Card.Description>
                  <Info>
                    <UikAvatar
                      name="Davide Crestini"
                      textTop="Created by"
                      avatarPlaceholder={{
                        content: 'DC',
                        color: 'blue',
                      }}
                    />
                    <Time>
                      <Uikon>clock</Uikon> 15 min
                    </Time>
                  </Info>
                </Card.Main>
                <Card.Footer>
                  <Uikon>love</Uikon> 120
                  <Link css="margin-left: auto;" to={`/recipes/${recipe.slug}`}>
                    View
                  </Link>
                  <UikStarRating rating={2} />
                </Card.Footer>
              </Card>
            ))}
          </Grid>
        );
      }}
    </Query>
  </Layout>
);

export default compose(graphql(GET_RECIPES, { name: 'getRecipes' }))(Recipes);
