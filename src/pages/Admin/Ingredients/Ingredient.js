import React, { Component } from 'react';
import PropTypes from 'prop-types';
import set from 'lodash/set';
import { Tr, Td } from 'uikit/blocks/Table';
import Button from 'uikit/blocks/Button';
import Input from 'uikit/blocks/Form/Input';

export default class Ingredient extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    ingredient: PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.number,
      calories: PropTypes.number,
      nutrients: PropTypes.shape({
        fat: PropTypes.shape({
          monounsaturated: PropTypes.number,
          saturated: PropTypes.number,
          polyunsaturated: PropTypes.number,
        }),
        carbohydrate: PropTypes.shape({
          fiber: PropTypes.number,
          sugar: PropTypes.number,
          polyunsaturated: PropTypes.number,
        }),
        potassium: PropTypes.number,
        sodium: PropTypes.number,
        protein: PropTypes.number,
      }).isRequired,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  state = {
    pendingDelete: false,
    pendingUpdate: false,
    ingredient: this.props.ingredient,
  };

  onDelete = () => {
    this.setState({ pendingDelete: true });
    this.props.onDelete(this.props.index);
  };

  onUpdate = () => {
    this.setState({ pendingUpdate: true });
    this.props
      .onUpdate(this.state.ingredient)
      .then(() => this.setState({ pendingUpdate: false }));
  };

  onChangeValue = event => {
    const {
      target: { name, value, type },
    } = event;
    const newValue = type === 'number' ? parseFloat(value) : value;
    this.setState(({ ingredient }) => ({
      ingredient: set(ingredient, name, newValue),
    }));
  };

  render() {
    const { ingredient, pendingDelete, pendingUpdate } = this.state;

    return (
      <Tr key={ingredient.id} css="min-height: 60px;">
        <Td flex="2">
          <Input
            noMargin
            type="text"
            name="name"
            size="small"
            value={ingredient.name || ''}
            onChange={this.onChangeValue}
          />
        </Td>
        <Td flex="2">{ingredient.category}</Td>
        <Td flex="3" direction="row" justify="flex-start">
          <Input
            noMargin
            css="margin-right: 4px;"
            type="number"
            step="any"
            size="small"
            name="nutrients.fat.monounsaturated"
            value={ingredient.nutrients.fat.monounsaturated || ''}
            onChange={this.onChangeValue}
          />
          <Input
            noMargin
            css="margin-right: 4px;"
            type="number"
            step="any"
            size="small"
            name="nutrients.fat.saturated"
            value={ingredient.nutrients.fat.saturated || ''}
            onChange={this.onChangeValue}
          />
          <Input
            noMargin
            type="number"
            step="any"
            size="small"
            name="nutrients.fat.polyunsaturated"
            value={ingredient.nutrients.fat.polyunsaturated || ''}
            onChange={this.onChangeValue}
          />
        </Td>
        <Td flex="2" direction="row">
          <Input
            noMargin
            css="margin-right: 4px;"
            type="number"
            step="any"
            size="small"
            name="nutrients.carbohydrate.fiber"
            value={ingredient.nutrients.carbohydrate.fiber || ''}
            onChange={this.onChangeValue}
          />
          <Input
            noMargin
            type="number"
            step="any"
            size="small"
            name="nutrients.carbohydrate.sugar"
            value={ingredient.nutrients.carbohydrate.sugar || ''}
            onChange={this.onChangeValue}
          />
        </Td>
        <Td flex="1">
          <Input
            noMargin
            type="number"
            step="any"
            size="small"
            name="nutrients.potassium"
            value={ingredient.nutrients.potassium || ''}
            onChange={this.onChangeValue}
          />
        </Td>
        <Td flex="1">
          <Input
            noMargin
            type="number"
            step="any"
            size="small"
            name="nutrients.sodium"
            value={ingredient.nutrients.sodium || ''}
            onChange={this.onChangeValue}
          />
        </Td>
        <Td flex="1">
          <Input
            noMargin
            type="number"
            step="any"
            size="small"
            name="nutrients.protein"
            value={ingredient.nutrients.protein || ''}
            onChange={this.onChangeValue}
          />
        </Td>
        <Td flex="2">
          <Button
            color="primary"
            size="small"
            onClick={this.onUpdate}
            loading={pendingUpdate}
          >
            Update
          </Button>
          <br />

          <Button
            color="accent"
            size="small"
            loading={pendingDelete}
            onClick={this.onDelete}
            style={{ marginLeft: '5px' }}
          >
            Delete
          </Button>
        </Td>
      </Tr>
    );
  }
}
