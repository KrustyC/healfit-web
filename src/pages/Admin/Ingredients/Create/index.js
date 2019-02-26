import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled, { css } from 'styled-components';

import { withToastManager } from 'uikit/blocks/Toast';
import Heading from 'uikit/elements/Heading';
import Form from './Form';

const Div = styled.div`
  ${({ theme }) => css`
    margin: ${theme.margin.md} auto;
    width: ${theme.dimensions.containerWidth.default};
  `}
`;

class CreateIngredient extends Component {
  static propTypes = {
    createIngredient: PropTypes.func.isRequired,
    toastManager: PropTypes.shape({
      add: PropTypes.func.isRequired,
    }).isRequired,
  };

  onCreate = async (values, { resetForm }) => {
    try {
      await this.props.createIngredient({
        variables: { ...values, category: values.category.id },
      });
      this.props.toastManager.add('Item has been succesfully added!', {
        type: 'success',
      });
      return resetForm();
    } catch (error) {
      return this.props.toastManager.add('Ops! Something wrong happened!', {
        type: 'error',
      });
    }
  };

  render() {
    return (
      <Div>
        <Heading>Add a new ingredient</Heading>
        <Form onSubmit={this.onCreate} />
      </Div>
    );
  }
}

const CREATE_INGRIDIENT = gql`
  mutation addIngredient(
    $name: String!
    $category: ID
    $calories: Int!
    $nutrients: NutrientsInput!
  ) {
    addIngredient(
      input: {
        name: $name
        category: $category
        calories: $calories
        nutrients: $nutrients
      }
    ) {
      id
    }
  }
`;

export default compose(
  graphql(CREATE_INGRIDIENT, { name: 'createIngredient' }),
  withToastManager
)(CreateIngredient);
