import React, { useState } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import PossibleStates from 'possible-states';
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

// const realInitialValues = {
//   title: '',
//   servings: '',
//   totalTime: '',
//   category: 0,
//   level: 0,
//   ingridients: [],
//   method: Plain.deserialize(''),
//   picture: '',
//   calories: 0,
//   carbohydrates: 0,
//   protein: 0,
//   fat: 0,
// };

const ingridients = [
  {
    id: '5c617606fe02140152a8e057',
    measurement: {
      id: 1,
      name: 'Grams',
    },
    name: 'Fennel',
    quantity: 35,
  },
  {
    id: '5c617606fe02140152a8e058',
    measurement: {
      id: 2,
      name: 'Cups',
    },
    name: 'Spinach',
    quantity: 1,
  },
  {
    id: '5c617606fe02140152a8e059',
    measurement: {
      id: 1,
      name: 'Grams',
    },
    name: 'Fennels',
    quantity: 320,
  },
];

const seededInitialValues = {
  title: 'Lemon Garlic Shrimp',
  servings: 3,
  totalTime: 15,
  category: {
    label: 'Breakfast',
    value: 1,
  },
  level: 2,
  ingridients,
  method: html.deserialize(
    '<p>I&#x27;m  write<em> freaky fraky freky thigh</em> grg er ger ger ger ger ger ger ger ger gerg ergerg erge<strong>rgergerg er</strong></p>'
  ),
  picture: 'dev/akw0bgvorn2fiftl0nv7',
  calories: 24,
  carbohydrates: 35,
  protein: 45,
  fat: 89,
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
          Success: {data.id} {data.title}
        </div>
      )}
      {idle && (
        <Form
          edit
          initialValues={seededInitialValues}
          onComplete={onCreateRecipe}
        />
      )}
    </Layout>
  );
};

const CREATE_RECIPE = gql`
  mutation createRecipe(
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
    createRecipe(
      input: {
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

CreateRecipe.propTypes = {
  createRecipe: PropTypes.func.isRequired,
};

export default graphql(CREATE_RECIPE, { name: 'createRecipe' })(CreateRecipe);
