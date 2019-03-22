import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';
import withApolloClient from 'hoc/withApolloClient';
import { withToastManager } from 'uikit/blocks/Toast';
import Link from 'uikit/elements/Link';

import {
  Table,
  Header,
  Body,
  Th,
  SubHeader,
  SubHeaderContainer,
} from 'uikit/blocks/Table';
import Heading from 'uikit/elements/Heading';
import ReactProgressiveList from 'react-progressive-list';
import Ingredient from './Ingredient';

const Div = styled.div`
  ${({ theme }) => css`
    margin: ${theme.margin.md} auto;
    width: ${theme.dimensions.containerWidth.large};
  `}
`;

const GET_INGRIDIENTS = gql`
  query GetIngredients {
    ingredients {
      id
      name
      calories
      nutrients {
        cholesterol
        fat {
          monounsaturated
          saturated
          polyunsaturated
        }
        carbohydrate {
          fiber
          sugar
        }
        potassium
        protein
        sodium
      }
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class Ingredients extends Component {
  static propTypes = {
    client: PropTypes.shape({
      query: PropTypes.func.isRequired,
    }).isRequired,
    toastManager: PropTypes.shape({
      add: PropTypes.func.isRequired,
    }).isRequired,
    deleteIngredient: PropTypes.func.isRequired,
    updateIngredient: PropTypes.func.isRequired,
  };

  state = {
    loading: true,
    error: null,
    ingredients: [],
  };

  async componentDidMount() {
    try {
      const result = await this.props.client.query({
        query: GET_INGRIDIENTS,
      });

      return this.setState({
        ingredients: result.data.ingredients,
        loading: false,
      });
    } catch (error) {
      return this.setState({ error });
    }
  }

  onDelete = async index => {
    const { id } = this.state.ingredients[index];
    try {
      await this.props.deleteIngredient({ variables: { id } });
      this.setState(({ ingredients }) => ({
        ingredients: [
          ...ingredients.slice(0, index),
          ...ingredients.slice(index + 1),
        ],
      }));
      return this.props.toastManager.add('Item has been succesfully deleted!', {
        type: 'success',
      });
    } catch (error) {
      return this.setState({ error });
    }
  };

  onUpdate = async ingredient => {
    try {
      this.props.updateIngredient({ variables: { ...ingredient } });
      return this.props.toastManager.add('Item has been succesfully updated!', {
        type: 'success',
      });
    } catch (error) {
      return this.setState({ error });
    }
  };

  renderRow = index => {
    const ingredient = this.state.ingredients[index];
    if (!ingredient) {
      return null;
    }
    return (
      <Ingredient
        index={index}
        key={ingredient.id}
        ingredient={ingredient}
        onUpdate={this.onUpdate}
        onDelete={this.onDelete}
      />
    );
  };

  render() {
    const { loading, error } = this.state;

    if (loading) {
      return 'Loading...';
    }

    if (error) {
      return `Error: ${error.message}`;
    }

    return (
      <Div>
        <Row>
          <Heading level="h2">Ingredients</Heading>
          <Link to="/admin/ingredients/create">Add Ingredient</Link>
        </Row>
        <Table>
          <Header sticky>
            <Th flex="2">Name</Th>
            <Th flex="2">Category</Th>
            <Th flex="3" direction="column">
              Fat
              <SubHeaderContainer>
                <SubHeader flex="1">Mono</SubHeader>
                <SubHeader flex="1">Poly</SubHeader>
                <SubHeader flex="1">Saturated</SubHeader>
              </SubHeaderContainer>
            </Th>
            <Th flex="2" direction="column">
              Carbohydrate
              <SubHeaderContainer>
                <SubHeader flex="1">Fiber</SubHeader>
                <SubHeader flex="1">Sugars</SubHeader>
              </SubHeaderContainer>
            </Th>
            <Th flex="1">Potassium</Th>
            <Th flex="1">Sodium</Th>
            <Th flex="1">Protein</Th>
            <Th flex="2">Actions</Th>
          </Header>
          <Body>
            <ReactProgressiveList
              initialAmount={40}
              progressiveAmount={10}
              renderItem={this.renderRow}
              renderLoader={() => <div>Load</div>}
              rowCount={this.state.ingredients.length}
              useWindowScroll
            />
          </Body>
        </Table>
      </Div>
    );
  }
}

const DELETE_INGRIDIENT = gql`
  mutation deleteIngredient($id: ID!) {
    deleteIngredient(id: $id)
  }
`;

const UPDATE_INGRIDIENT = gql`
  mutation updateIngredient(
    $id: ID!
    $name: String!
    $category: ID
    $calories: Int!
    $nutrients: NutrientsInput!
  ) {
    updateIngredient(
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
  graphql(UPDATE_INGRIDIENT, { name: 'updateIngredient' }),
  graphql(DELETE_INGRIDIENT, { name: 'deleteIngredient' }),
  withApolloClient,
  withToastManager
)(Ingredients);
