import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import withApolloClient from 'hoc/withApolloClient';
import Heading from 'uikit/elements/Heading';

import Form from 'uikit/blocks/Form';
import Wizard from 'components/Wizard';
import AddIngredient from './AddIngredient';
import Ingredients from './Ingredients';

const SEARCH_INGRIDIENTS = gql`
  query ingredients($name: String) {
    ingredientsByName(name: $name) {
      id
      name
    }
  }
`;

class Step2 extends Component {
  static propTypes = {
    values: PropTypes.shape({
      ingredients: PropTypes.array.isRequired,
    }).isRequired,
    client: PropTypes.shape({
      query: PropTypes.func.isRequired,
    }).isRequired,
    setFieldValue: PropTypes.func.isRequired,
  };

  state = {
    availableIngredients: [],
    currentIngredient: null,
  };

  onSearchIngredient = async value => {
    if (value.length === 0) {
      return this.setState({ availableIngredients: [] });
    }

    try {
      const result = await this.props.client.query({
        query: SEARCH_INGRIDIENTS,
        variables: { name: value },
      });

      return this.setState({
        availableIngredients: result.data.ingredientsByName,
      });
    } catch (error) {
      return error;
    }
  };

  onCancelIngredient = () => this.setState({ currentIngredient: null });

  onSelectIngredient = ingredient =>
    this.setState({ currentIngredient: ingredient });

  onAddIngredient = ingredient => {
    const ingredients = [...this.props.values.ingredients, ingredient];
    this.props.setFieldValue('ingredients', ingredients);
    this.setState({ currentIngredient: null });
  };

  onRemoveIngredient = id => {
    const { ingredients } = this.props.values;
    const index = ingredients.findIndex(ingredient => ingredient.id === id);

    const updatedIngredients = [
      ...ingredients.slice(0, index),
      ...ingredients.slice(index + 1, ingredients.length),
    ];

    this.props.setFieldValue('ingredients', updatedIngredients);
  };

  render() {
    const { values } = this.props;
    const { currentIngredient, availableIngredients } = this.state;

    return (
      <Wizard.Page>
        <Heading level="h1">Ingredients</Heading>
        <Form.FormGroup>
          <Form.RemoteFilter
            placeholder="Search for ingredients..."
            list={availableIngredients}
            labelField="name"
            emptyMessage="No Ingredients Avaialable"
            query={this.onSearchIngredient}
            onSelect={this.onSelectIngredient}
          />
          <Form.Feedback name="ingredients" />
        </Form.FormGroup>
        {currentIngredient && (
          <AddIngredient
            ingredient={currentIngredient}
            onConfirm={this.onAddIngredient}
            onCancel={this.onCancelIngredient}
          />
        )}
        <Ingredients
          ingredients={values.ingredients}
          onRemoveIngredient={this.onRemoveIngredient}
        />
      </Wizard.Page>
    );
  }
}

export default withApolloClient(Step2);
