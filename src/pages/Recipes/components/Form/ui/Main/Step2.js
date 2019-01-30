import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';
import Heading from 'uikit/elements/Heading';

import Wizard from 'components/Wizard';

const AddIngridientRow = styled.div`
  display: flex;
  align-items: center;
`;

const IngridientList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Ingridient = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    height: 50px;
    padding: 0 ${theme.padding.sm};
    margin-bottom: ${theme.margin.sm};
    border-radius: 3px;
    font-weight: bold;

    text-transform: lowercase;

    :last-of-type {
      margin-bottom: 0;
    }
  `}
`;

const measurements = [
  {
    id: 1,
    name: 'Tablespoon',
  },
  {
    id: 2,
    name: 'Cup',
  },
  {
    id: 3,
    name: 'Teaspoon',
  },
  {
    id: 4,
    name: 'grams',
  },
  {
    id: 5,
    name: 'oz',
  },
];
export default class Step2 extends Component {
  static propTypes = {
    values: PropTypes.shape({
      ingridients: PropTypes.array.isRequired,
    }).isRequired,
    setFieldValue: PropTypes.func.isRequired,
  };

  state = {
    availableIngridients: [],
    currentIngridient: null,
    quantity: 0,
    measurement: null,
  };

  onSearchIngridient = value => {
    console.log(value);

    // @TDO perfom query through graphql
    return new Promise(resolve => {
      const availableIngridients = [
        {
          id: 1,
          name: 'Celery',
        },
        {
          id: 2,
          name: 'Cinnamon',
        },
        {
          id: 3,
          name: 'Water',
        },
        {
          id: 4,
          name: 'Red bell pepper',
        },
        {
          id: 5,
          name: 'Celery',
        },
      ];
      return resolve(availableIngridients);
    });
  };

  onSelectIngridient = ingridient =>
    this.setState({ currentIngridient: ingridient });

  onChangeQuantity = e => this.setState({ quantity: e.target.value });

  onSelectMeasurement = measurement => this.setState({ measurement });

  onAddIngridient = () => {
    const { currentIngridient, quantity, measurement } = this.state;
    const newIngridient = {
      ...currentIngridient,
      quantity,
      measurement,
    };

    const newIngridients = [...this.props.values.ingridients, newIngridient];

    this.props.setFieldValue('ingridients', newIngridients);

    this.setState({
      currentIngridient: null,
      quantity: null,
      measurement: null,
    });
  };

  render() {
    const { values } = this.props;
    const { currentIngridient, quantity, measurement } = this.state;

    return (
      <Wizard.Page>
        <Form.FormGroup>
          <Form.RemoteFilter
            placeholder="Look for ingridients..."
            query={this.onSearchIngridient}
            onSelect={this.onSelectIngridient}
          />
          {values.ingridients.map(ingridient => ingridient.name)}
          <Form.Feedback name="ingridients" />
        </Form.FormGroup>
        {currentIngridient && (
          <AddIngridientRow>
            {currentIngridient.name}
            <Form.FormGroup>
              <Form.Label>Quantity</Form.Label>
              <Form.Input
                type="number"
                value={quantity}
                onChange={this.onChangeQuantity}
              />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label>Measurement</Form.Label>
              <Form.Select
                placeholder="Choose..."
                value={measurement || {}}
                onChange={this.onSelectMeasurement}
              >
                {measurements.map(({ id, name }) => (
                  <Form.Select.Option key={id} label={name} value={id} />
                ))}
              </Form.Select>
            </Form.FormGroup>
            <Button onClick={this.onAddIngridient}>Add</Button>
          </AddIngridientRow>
        )}
        <Heading level="h4">Selected Ingridients</Heading>
        <IngridientList>
          {values.ingridients.map(
            ingridient => (
              console.log(ingridient),
              (
                <Ingridient key={ingridient.id}>
                  {ingridient.quantity} {ingridient.measurement.label}{' '}
                  {ingridient.name}
                </Ingridient>
              )
            )
          )}
        </IngridientList>
      </Wizard.Page>
    );
  }
}
