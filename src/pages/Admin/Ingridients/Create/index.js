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
    width: ${theme.dimensions.containerWidth.large};
  `}
`;

class CreateIngridient extends Component {
  static propTypes = {
    createIngridient: PropTypes.func.isRequired,
    toastManager: PropTypes.shape({
      add: PropTypes.func.isRequired,
    }).isRequired,
  };

  onCreate = data => {
    console.log(data);
    return this.props.toastManager.add('Item has been succesfully added!', {
      type: 'success',
    });
  };

  render() {
    return (
      <Div>
        <Heading>Add a new ingridient</Heading>
        <Form onSubmit={this.onCreate} />
      </Div>
    );
  }
}

const CREATE_INGRIDIENT = gql`
  mutation updateIngridient(
    $id: ID!
    $name: String!
    $category: ID
    $calories: Int!
    $nutrients: NutrientsInput!
  ) {
    updateIngridient(
      input: {
        id: $id
        name: $name
        category: $category
        calories: $calories
        nutrients: $nutrients
      }
    )
  }
`;

export default compose(
  graphql(CREATE_INGRIDIENT, { name: 'createIngridient' }),
  withToastManager
)(CreateIngridient);
