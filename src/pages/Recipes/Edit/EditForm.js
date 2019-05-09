import React, { useState } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import styled, { css } from 'styled-components';
import { convertFromHTML } from 'uikit/organisms/Editor/utils';
import Form from '../components/Form';
import Success from './Success';

const Layout = styled.div`
  ${({ theme }) => css`
    height: calc(100vh - ${theme.dimensions.navbarHeight});
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${theme.dimensions.containerWidth.fullscreen};
  `}
`;

const getInitiallValuesFromRecipe = recipe => ({
  title: recipe.title,
  servings: recipe.servings,
  totalTime: recipe.totalTime,
  category: {
    label: recipe.category.name,
    value: recipe.category.id,
  },
  level: recipe.level.id,
  ingredients: recipe.ingredients,
  method: convertFromHTML(recipe.method),
  picture: recipe.picture,
  description: recipe.description,
  calories: recipe.calories,
  carbohydrates: recipe.carbohydrates,
  protein: recipe.protein,
  fiber: recipe.fiber,
  fat: recipe.fat,
});

const EditForm = ({ recipe, editRecipe }) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [updatedRecipe, setRecipe] = useState(null);
  const [idle, setIdle] = useState(true);

  const onEditRecipe = async values => {
    setPending(true);
    setIdle(false);

    try {
      const { slug } = recipe;
      const result = await editRecipe({ variables: { ...values, slug } });

      // Redirect to View
      setRecipe(result.data.editRecipe);
    } catch (err) {
      setError('OOps! Looks like something happened, please try again later!');
    }
    setPending(false);
  };

  return (
    <Layout>
      {error && <div>Error: {error}</div>}
      {pending && <div>pending...</div>}
      {updatedRecipe && <Success recipe={updatedRecipe} />}
      {idle && (
        <Form
          edit
          initialValues={getInitiallValuesFromRecipe(recipe)}
          onComplete={onEditRecipe}
        />
      )}
    </Layout>
  );
};

const EDIT_RECIPE = gql`
  mutation editRecipe(
    $slug: String!
    $title: String!
    $servings: Int!
    $totalTime: Int!
    $category: RecipeCategoryInput!
    $level: RecipeLevelInput!
    $ingredients: [RecipeIngredientInput]!
    $method: String!
    $picture: String!
    $description: String!
    $calories: Int!
    $carbohydrates: Float!
    $fiber: Float!
    $protein: Float!
    $fat: Float!
  ) {
    editRecipe(
      input: {
        slug: $slug
        title: $title
        servings: $servings
        totalTime: $totalTime
        category: $category
        level: $level
        ingredients: $ingredients
        description: $description
        method: $method
        picture: $picture
        calories: $calories
        carbohydrates: $carbohydrates
        fiber: $fiber
        protein: $protein
        fat: $fat
      }
    ) {
      slug
      title
    }
  }
`;

EditForm.propTypes = {
  recipe: PropTypes.object.isRequired,
  editRecipe: PropTypes.func.isRequired,
};

export default graphql(EDIT_RECIPE, { name: 'editRecipe' })(EditForm);
