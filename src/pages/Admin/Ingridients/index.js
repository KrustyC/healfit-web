import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import withApolloClient from 'hoc/withApolloClient';
import { Table, Header, Body, Th } from 'uikit/blocks/Table';
import Heading from 'uikit/elements/Heading';
import styled, { css } from 'styled-components';
import ReactProgressiveList from 'react-progressive-list';
import Ingridient from './Ingridient';

const Div = styled.div`
  ${({ theme }) => css`
    margin: ${theme.margin.md} 0;
    /* height: 70vh; */
    width: 100%;
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
      console.log(result.data.ingridients);
      return this.setState({
        ingridients: result.data.ingridients,
        loading: false,
      });
    } catch (error) {
      return this.setState({ error });
    }
  }

  renderRow = index => {
    console.log(index);
    const ingridient = this.state.ingridients[index];
    if (!ingridient) {
      return null;
    }
    return (
      <Ingridient index={index} key={ingridient.id} ingridient={ingridient} />
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
          <Header>
            <Th flex="4">Name</Th>
            <Th flex="3">Category</Th>
            <Th flex="6">Fat</Th>
            <Th flex="4">Carbs</Th>
            <Th flex="1">Potassium</Th>
            <Th flex="1">Sodium</Th>
            <Th flex="1">Protein</Th>
            <Th flex="2">Actions</Th>
          </Header>
          <Body>
            <ReactProgressiveList
              initialAmount={10}
              progressiveAmount={5}
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

export default withApolloClient(Ingridients);
