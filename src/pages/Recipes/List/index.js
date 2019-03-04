import React from 'react';
import styled, { css } from 'styled-components';
import gql from 'graphql-tag';
import { compose, graphql, Query } from 'react-apollo';
import { Image as CloudinaryImage, Transformation } from 'cloudinary-react';
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
    margin-top: ${theme.margin.lg};

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
      picture
    }
  }
`;

const Image = styled(CloudinaryImage)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    height: 150px;
    width: 300px;
  `}
`;

const Circle = styled.div`
  ${({ theme }) => css`
    text-transform: uppercase;
    background: ${theme.colors.primary};
    color: ${theme.colors.light};
    font-size: ${theme.fontSize.regular};
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.margin.sm};
  `}
`;

const Recipes = () => (
  <Layout>
    <Query query={GET_RECIPES}>
      {({ loading, error, data, refetch }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return (
          <Grid>
            {data.recipes.map(recipe => (
              <Card width="300px">
                <Card.Thumb>
                  <Image publicId={recipe.picture}>
                    <Transformation
                      dpr="auto"
                      responsive
                      width="auto"
                      crop="scale"
                    />
                  </Image>
                </Card.Thumb>
                <Card.Main>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Description>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Card.Description>
                </Card.Main>
                <Card.Footer>
                  <Circle>d</Circle>
                  by Davide Crestini
                  <Link css="margin-left: auto;" to={`/recipes/${recipe.slug}`}>
                    View
                  </Link>
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
