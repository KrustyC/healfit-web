import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tr, Td } from 'uikit/blocks/Table';
import Button from 'uikit/blocks/Button';
import Input from 'uikit/blocks/Form/Input';
import FormGroup from 'uikit/blocks/Form/FormGroup';
import Label from 'uikit/blocks/Form/Label';

export default class Ingridient extends Component {
  static propTypes = {
    ingridient: PropTypes.shape({
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
  };

  state = {
    ingridient: this.props.ingridient,
  };

  onDelete = () => {
    const {
      ingridient: { id },
    } = this.state;
    console.log('deleting', id);
  };

  onUpdate = () => {
    console.log('updating', this.state.ingridient);
  };

  onChangeValue = e => console.log(e.target);

  render() {
    const { ingridient } = this.state;

    return (
      <Tr key={ingridient.id}>
        <Td flex="4">
          <Input
            noMargin
            name="name"
            size="small"
            value={ingridient.name}
            onChange={this.onChangeValue}
          />
        </Td>
        <Td flex="3">{ingridient.category}</Td>
        <Td flex="6" direction="column">
          <FormGroup>
            <Label size="small">Monounsaturated</Label>
            <Input
              size="small"
              width="90%"
              name="fat.monounsaturated"
              value={ingridient.nutrients.fat.monounsaturated}
              onChange={this.onChangeValue}
            />
          </FormGroup>
          <FormGroup>
            <Label size="small">Saturated</Label>
            <Input
              width="90%"
              size="small"
              name="fat.saturated"
              value={ingridient.nutrients.fat.saturated}
              onChange={this.onChangeValue}
            />
          </FormGroup>
          <FormGroup>
            <Label size="small">Polyunsaturated</Label>
            <Input
              width="90%"
              size="small"
              name="fat.polyunsaturated"
              value={ingridient.nutrients.fat.polyunsaturated}
              onChange={this.onChangeValue}
            />
          </FormGroup>
        </Td>
        <Td flex="4" direction="column">
          <FormGroup>
            <Label size="small">Saturated</Label>
            <Input
              size="small"
              width="90%"
              name="carbohydrate.fiber"
              value={ingridient.nutrients.carbohydrate.fiber}
              onChange={this.onChangeValue}
            />
          </FormGroup>
          <FormGroup>
            <Label size="small">Saturated</Label>
            <Input
              size="small"
              width="90%"
              name="carbohydrate.sugar"
              value={ingridient.nutrients.carbohydrate.sugar}
              onChange={this.onChangeValue}
            />
          </FormGroup>
        </Td>
        <Td flex="1">
          <FormGroup>
            <Label size="small">Potassium</Label>
            <Input
              size="small"
              name="potassium"
              value={ingridient.nutrients.potassium}
              onChange={this.onChangeValue}
            />
          </FormGroup>
        </Td>
        <Td flex="1">
          <FormGroup>
            <Label size="small">Sodium</Label>
            <Input
              size="small"
              name="sodium"
              value={ingridient.nutrients.sodium}
              onChange={this.onChangeValue}
            />
          </FormGroup>
        </Td>
        <Td flex="1">
          <FormGroup>
            <Label size="small">Protein</Label>
            <Input
              size="small"
              name="protein"
              value={ingridient.nutrients.protein}
              onChange={this.onChangeValue}
            />
          </FormGroup>
        </Td>
        <Td flex="2" direction="column">
          <Button color="primary">Update</Button>
          <br />
          <Button color="accent">Delete</Button>
        </Td>
      </Tr>
    );
  }
}
