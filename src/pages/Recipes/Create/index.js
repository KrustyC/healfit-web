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

const initialValues = {
  title: '',
  servings: '',
  totalTime: '',
  description: '',
  category: 0,
  level: 0,
  ingredients: [],
  method: html.deserialize(''),
  picture: '',
  calories: 0,
  carbohydrates: 0,
  protein: 0,
  fat: 0,
};

const CreateRecipe = ({ createRecipe }) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [idle, setIdle] = useState(true);

  const onCreateRecipe = async values => {
    setPending(true);
    setIdle(false);

    try {
      const result = await createRecipe({ variables: values });
      setData(result.data.createRecipe);
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
          Success: {data.slug} {data.title}
        </div>
      )}
      {idle && (
        <Form edit initialValues={initialValues} onComplete={onCreateRecipe} />
      )}
    </Layout>
  );
};

const CREATE_RECIPE = gql`
  mutation createRecipe(
    $title: String!
    $servings: Int!
    $totalTime: Int!
    $description: String!
    $category: RecipeCategoryInput!
    $level: RecipeLevelInput!
    $ingredients: [RecipeIngredientInput]!
    $method: String!
    $picture: String!
    $calories: Int
    $carbohydrates: Float
    $protein: Float
    $fat: Float
  ) {
    createRecipe(
      input: {
        title: $title
        servings: $servings
        description: $description
        totalTime: $totalTime
        category: $category
        level: $level
        ingredients: $ingredients
        method: $method
        picture: $picture
        calories: $calories
        carbohydrates: $carbohydrates
        protein: $protein
        fat: $fat
      }
    ) {
      slug
      title
    }
  }
`;

CreateRecipe.propTypes = {
  createRecipe: PropTypes.func.isRequired,
};

export default graphql(CREATE_RECIPE, { name: 'createRecipe' })(CreateRecipe);
