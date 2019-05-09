import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
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

const initialValues = {
  title: '',
  servings: '',
  totalTime: '',
  description: '',
  category: '',
  level: '',
  ingredients: [],
  method: convertFromHTML(),
  picture: '/production/placeholder',
  calories: 0,
  carbohydrates: 0,
  fiber: 0,
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
    <>
      <Helmet>
        <title>Create a recipe | Healfit</title>
        <meta name="description" content="Create a recipe" />
      </Helmet>
      <Layout>
        {error && <div>Error: {error}</div>}
        {pending && <div>pending...</div>}
        {data && <Success recipe={data} />}
        {idle && (
          <Form initialValues={initialValues} onComplete={onCreateRecipe} />
        )}
      </Layout>
    </>
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
    $fiber: Float
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
        fiber: $fiber
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
