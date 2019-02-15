import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import PossibleStates from 'possible-states';
import { graphql } from 'react-apollo';
import styled, { css } from 'styled-components';
import Plain from 'slate-plain-serializer';
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
      label: 'Grams',
      value: 1,
    },
    name: 'Fennel',
    quantity: '35',
  },
  {
    id: '5c617606fe02140152a8e058',
    measurement: {
      label: 'Cups',
      value: 2,
    },
    name: 'Spinach',
    quantity: 1,
  },
  {
    id: '5c617606fe02140152a8e059',
    measurement: {
      label: 'Grams',
      value: 1,
    },
    name: 'Fennels',
    quantity: 320,
  },
];

const seededInitialValues = {
  title: 'Lemon Garlic Shrimp',
  servings: 3,
  totalTime: 15,
  category: 0,
  level: '3',
  ingridients,
  method: Plain.deserialize('This is my recipe method man'),
  picture: 'dev/akw0bgvorn2fiftl0nv7',
  calories: 24,
  carbohydrates: 35,
  protein: 45,
  fat: 89,
};

class CreateRecipe extends Component {
  static propTypes = {
    createRecipe: PropTypes.func.isRequired,
  };

  state = {
    ui: PossibleStates('idle', 'pending', 'error<reason>', 'success<recipe>'),
  };

  onCreateRecipe = async values => {
    // this.setState(({ ui }) => ({ ui: ui.toPending() }));
    console.log(values);
    const preparedData = {};

    // try {
    //   const result = await this.props.createRecipe(preparedData);
    //   const recipe = result.soemthing
    //   this.setState(({ ui }) => ({ ui: ui.toSuccess(recipeerror) }));
    // } catch (error) {
    //   this.setState(({ ui }) => ({ ui: ui.toError(error) }));
    // }
  };

  render() {
    return (
      <Layout>
        {this.state.ui.caseOf({
          idle: () => (
            <Form
              initialValues={seededInitialValues}
              onComplete={values => console.log('submit', values)}
            />
          ),
          pending: () => 'Creating recipe...',
          error: ({ reason }) => reason,
          success: ({ recipe }) => recipe.id,
        })}
      </Layout>
    );
  }
}

const CREATE_RECIPE = gql`
  mutation createRecipe(
    $title: String!
    $servings: Int!
    $totalTime: Int!
    $category: Int!
    $level: Int!
    $ingridients: [Object]
    $method: Object
    $picture: String
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

export default graphql(CREATE_RECIPE, { name: 'createRecipe' })(CreateRecipe);
