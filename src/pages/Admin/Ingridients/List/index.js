import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';
import withApolloClient from 'hoc/withApolloClient';
import { withToastManager } from 'uikit/blocks/Toast';

import {
  Table,
  Header,
  Body,
  Th,
  SubHeader,
  SubHeaderContainer,
} from 'uikit/blocks/Table';
import Heading from 'uikit/elements/Heading';
import styled, { css } from 'styled-components';
import ReactProgressiveList from 'react-progressive-list';
import Ingridient from './Ingridient';

const Div = styled.div`
  ${({ theme }) => css`
    margin: ${theme.margin.md} 0;
    width: 100vh;
  `}
`;

const GET_INGRIDIENTS = gql`
  query GetIngridients {
    ingridients {
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

class Ingridients extends Component {
  static propTypes = {
    client: PropTypes.shape({
      query: PropTypes.func.isRequired,
    }).isRequired,
    toastManager: PropTypes.shape({
      add: PropTypes.func.isRequired,
    }).isRequired,
    deleteIngridient: PropTypes.func.isRequired,
    updateIngridient: PropTypes.func.isRequired,
  };

  state = {
    loading: true,
    error: null,
    ingridients: [],
  };

  async componentDidMount() {
    try {
      const result = await this.props.client.query({
        query: GET_INGRIDIENTS,
      });

      return this.setState({
        ingridients: result.data.ingridients,
        loading: false,
      });
    } catch (error) {
      return this.setState({ error });
    }
  }

  onDelete = async index => {
    const { id } = this.state.ingridients[index];
    try {
      await this.props.deleteIngridient({ variables: { id } });
      this.setState(({ ingridients }) => ({
        ingridients: [
          ...ingridients.slice(0, index),
          ...ingridients.slice(index + 1),
        ],
      }));
      return this.props.toastManager.add('Item has been succesfully deleted!', {
        type: 'success',
      });
    } catch (error) {
      return this.setState({ error });
    }
  };

  onUpdate = async ingridient => {
    try {
      return this.props.updateIngridient({ variables: { ...ingridient } });
    } catch (error) {
      return this.setState({ error });
    }
  };

  renderRow = index => {
    const ingridient = this.state.ingridients[index];
    if (!ingridient) {
      return null;
    }
    return (
      <Ingridient
        index={index}
        key={ingridient.id}
        ingridient={ingridient}
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
        <Heading level="h2">Ingridients</Heading>
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
              rowCount={this.state.ingridients.length}
              useWindowScroll
            />
          </Body>
        </Table>
      </Div>
    );
  }
}

const DELETE_INGRIDIENT = gql`
  mutation deleteIngridient($id: ID!) {
    deleteIngridient(id: $id)
  }
`;

const UPDATE_INGRIDIENT = gql`
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
  graphql(UPDATE_INGRIDIENT, { name: 'updateIngridient' }),
  graphql(DELETE_INGRIDIENT, { name: 'deleteIngridient' }),
  withApolloClient,
  withToastManager
)(Ingridients);
