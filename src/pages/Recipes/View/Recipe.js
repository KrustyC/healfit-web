import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import styled, { css } from 'styled-components';
import Heading from 'uikit/elements/Heading';
import Link from 'uikit/elements/Link';
import Button from 'uikit/blocks/Button';
import { Image as CloudinaryImage, Transformation } from 'cloudinary-react';
import P from 'uikit/elements/P';

const Layout = styled.div`
  ${({ theme }) => css`
    min-height: calc(100vh - ${theme.dimensions.navbarHeight});
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${theme.dimensions.containerWidth.large};
    margin: 0 auto;
  `}
`;

const Top = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.margin.lg};
    min-height: 50vh;
  `}
`;

const Picture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const HeadInfo = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: ${theme.padding.md};
    height: 100%;
  `}
`;

const Image = styled(CloudinaryImage)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    border-radius: 5px;
    height: 100%;
    width: 100%;
  `}
`;

const Hr = styled.hr`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primary};
    max-width: 50px;
    margin: 0px;
    border-radius: 5px;
  `}
`;

const Description = styled(P)`
  ${({ theme }) => css`
    margin: ${theme.margin.md} 0;
    height: 150px;
  `}
`;

const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Nutrients = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    /* margin: ${theme.margin.lg} 0; */
  `}
`;

const Nutrient = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    /* border-right: 3px solid ${theme.colors.border}; */
    margin: ${theme.margin.sm} 0;
    /* padding: ${theme.margin.sm} ${theme.margin.sm} ${theme.margin.sm} 0; */

    h2 {
      margin-bottom: 0;
    }

    span:first-of-type {
      margin-right: ${theme.margin.xs};
    }

    span:last-of-type {
      text-transform: uppercase;
      font-size: ${theme.fontSize.small};
      font-weight: bold;
      margin-bottom: ${theme.margin.xs};
    }
  `}
`;

const RecipeInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column-gap: 15px;
    width: ${theme.dimensions.containerWidth.fullscreen};
    padding: ${theme.padding.lg} 0;
    margin: ${theme.margin.lg} 0;
    background: #efefef;
  `}
`;

const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
    b {
      font-size: ${theme.fontSize.small};
      text-transform: uppercase;
    }

    span {
      margin-top: ${theme.margin.xs};
      font-size: ${theme.fontSize.regular};
    }
  `}
`;

const Actions = styled.div`
  ${({ theme }) => css`
    margin: ${theme.margin.md} 0 0 0;
    margin-top: bottom;
    height: 100%;

    button {
      margin-right: ${theme.margin.md};
    }
  `}
`;

const EditLink = styled(Link)`
  font-weight: bold;
`;

const Ingredients = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `}
`;

const Method = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: ${theme.margin.lg};
  `}
`;

const Author = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: ${theme.margin.lg} 0;
    padding: ${theme.padding.md} 0;
    border-top: 2px solid ${theme.colors.border};
  `}
`;

const Circle = styled.div`
  ${({ theme }) => css`
    text-transform: uppercase;
    background: ${theme.colors.primary};
    color: ${theme.colors.light};
    font-size: ${theme.fontSize.large};
    font-weight: bold;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.margin.sm};
  `}
`;

const AuthorInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.padding.xs};
  `}
`;

const Bookmark = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.padding.xs};
  `}
`;

const Recipe = ({ recipe }) => (
  <Layout>
    <Top>
      <Picture>
        <Image publicId={recipe.picture}>
          <Transformation dpr="auto" width="auto" crop="scale" />
        </Image>
      </Picture>
      <HeadInfo>
        <Heading level="h1">{recipe.title}</Heading>
        <Hr />
        <Nutrients>
          <Nutrient>
            <Heading level="h2" color="primary">
              {recipe.calories}
            </Heading>
            <span /> <span>calories</span>
          </Nutrient>
          <Nutrient>
            <Heading level="h2" color="primary">
              {recipe.protein}
            </Heading>
            <span>g</span>
            <span>protein</span>
          </Nutrient>
          <Nutrient>
            <Heading level="h2" color="primary">
              {recipe.fiber || 25}
            </Heading>
            <span>g</span> <span>fiber</span>
          </Nutrient>
          <Nutrient>
            <Heading level="h2" color="primary">
              {recipe.carbohydrates}
            </Heading>
            <span>g</span>
            <span>carbs</span>
          </Nutrient>
          <Nutrient>
            <Heading level="h2" color="primary">
              {recipe.fat}
            </Heading>
            <span>g</span>
            <span>fat</span>
          </Nutrient>
        </Nutrients>
        <Description>{recipe.description}</Description>

        <Actions>
          <Button squircled size="large" color="primary">
            Add To Meal Plan
          </Button>
          <EditLink to={`/recipes/edit/${recipe.slug}`}>Edit Recipe</EditLink>
        </Actions>
      </HeadInfo>
    </Top>
    <RecipeInfo>
      <Info>
        <b>Servings</b>
        <span>{recipe.servings}</span>
      </Info>
      <Info>
        <b>Prep Time</b>
        <span>{recipe.totalTime} min</span>
      </Info>
      <Info>
        <b>Difficulty</b>
        <span>{recipe.level.name}</span>
      </Info>
      <Info>
        <b>carbohydrates</b>
        <span>{recipe.carbohydrates}g</span>
      </Info>
      <Info>
        <b>fat</b>
        <span>{recipe.fat}g</span>
      </Info>
    </RecipeInfo>
    <Ingredients>
      <Heading level="h4">Ingredients</Heading>
      {recipe.ingredients.map(
        ({ name, quantity, measurement }) =>
          `${quantity} ${measurement.name.toLowerCase()} ${name.toLowerCase()}`
      )}
    </Ingredients>
    <Method>
      <Heading level="h4">Method</Heading>
      {renderHTML(recipe.method)}
    </Method>
    <Author>
      <Row>
        <Circle>d</Circle>
        <AuthorInfo>
          <b>Created by</b>
          Davide Crestini
          <Hr />
        </AuthorInfo>
      </Row>
      <Bookmark>
        <b>Save this recipe for later</b>
      </Bookmark>
    </Author>
  </Layout>
);

Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipe;
