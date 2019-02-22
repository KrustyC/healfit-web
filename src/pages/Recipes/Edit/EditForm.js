import React, { useState } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import styled, { css } from 'styled-components';
import html from 'uikit/organisms/Editor/htmlSerializer';
import Form from '../components/Form';

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
  level: recipe.category.id,
  ingridients: recipe.ingridients,
  method: html.deserialize(recipe.method),
  picture: recipe.picture,
  calories: recipe.calories,
  carbohydrates: recipe.carbohydrates,
  protein: recipe.protein,
  fat: recipe.fat,
});

const EditForm = ({ recipe, editRecipe }) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [idle, setIdle] = useState(true);

  const onCreateRecipe = async values => {
    setPending(true);
    setIdle(false);

    try {
      const result = await editRecipe({ variables: values });
      console.log(result);
      // Redirect to View
      setData(result.data.editRecipe);
    } catch (err) {
      setError('OOps! Looks like something happened, please try again later!');
    }
    setPending(false);
  };

  return (
    <Layout>
      {error && <div>Error: {error}</div>}
      {pending && <div>pending...</div>}
      {data && (
        <div>
          Success: {data.id} {data.title}
        </div>
      )}
      {idle && (
        <Form
          edit
          initialValues={getInitiallValuesFromRecipe(recipe)}
          onComplete={onCreateRecipe}
        />
      )}
    </Layout>
  );
};

const EDIT_RECIPE = gql`
  mutation editRecipe(
    $id: ID!
    $title: String!
    $servings: Int!
    $totalTime: Int!
    $category: RecipeCategoryInput!
    $level: RecipeLevelInput!
    $ingridients: [RecipeIngridientInput]!
    $method: String!
    $picture: String!
    $calories: Int
    $carbohydrates: Float
    $protein: Float
    $fat: Float
  ) {
    editRecipe(
      input: {
        id: $id
        title: $title
        servings: $servings
        totalTime: $totalTime
        category: $category
        level: $level
        ingridients: $ingridients
        method: $method
        picture: $picture
        calories: $calories
        carbohydrates: $carbohydrates
        protein: $protein
        fat: $fat
      }
    ) {
      id
      title
    }
  }
`;

EditForm.propTypes = {
  recipe: PropTypes.object.isRequired,
  editRecipe: PropTypes.func.isRequired,
};

export default graphql(EDIT_RECIPE, { name: 'editRecipe' })(EditForm);
