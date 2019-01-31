import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-pose';
import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';
import P from 'uikit/elements/P';

const AddIngridientRow = styled(
  posed.div({
    closed: {
      height: '0px',
    },
    open: {
      height: 'auto',
      transition: {
        height: { type: 'spring', stiffness: 350, damping: 100 },
      },
    },
  })
)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border: 1px solid #efefef;
  padding: 2rem;
`;

const Row = styled.div`
  display: flex;
  width: 100%;

  ${Form.FormGroup}, button {
    :first-of-type {
      margin-right: 2rem;
    }
  }
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
    ingridient: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    measurements: PropTypes.array.isRequired, // This should be fetched as initial data
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  };

  state = {
    quantity: 0,
    measurement: null,
  };

  onChangeQuantity = e => this.setState({ quantity: e.target.value });

  onSelectMeasurement = measurement => this.setState({ measurement });

  onCancelIngridient = () => this.props.onCancel();

  onAddIngridient = () => {
    const { ingridient } = this.props;
    const { quantity, measurement } = this.state;
    const newIngridient = {
      ...ingridient,
      quantity,
      measurement,
    };

    this.props.onConfirm(newIngridient);
  };

  render() {
    const { quantity, measurement } = this.state;
    const { ingridient } = this.props;

    return (
      <>
        <AddIngridientRow initialPose="closed" pose="open">
          <P>
            <b>Ingridient:</b> {ingridient.name}
          </P>
          <Row>
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
                {measurements.map((
                  // This should be this.props.measurements
                  { id, name }
                ) => (
                  <Form.Select.Option key={id} label={name} value={id} />
                ))}
              </Form.Select>
            </Form.FormGroup>
          </Row>
          <Row>
            <Button
              color="primary"
              onClick={this.onAddIngridient}
              disabled={!quantity || !measurement}
              size="large"
            >
              Add Ingridient
            </Button>
            <Button onClick={this.onCancelIngridient}>Cancel</Button>
          </Row>
        </AddIngridientRow>
      </>
    );
  }
}
