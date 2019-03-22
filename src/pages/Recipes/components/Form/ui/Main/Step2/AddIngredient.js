import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-pose';
import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';
import P from 'uikit/elements/P';
import withGlobalData from 'hoc/withGlobalData';

const AddIngredientRow = styled(
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

class AddIngredient extends Component {
  static propTypes = {
    ingredient: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    globalData: PropTypes.shape({ measurements: PropTypes.array.isRequired })
      .isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  };

  state = {
    quantity: 0,
    measurement: null,
  };

  onChangeQuantity = e =>
    this.setState({ quantity: parseInt(e.target.value, 10) });

  onSelectMeasurement = measurement => this.setState({ measurement });

  onCancelIngredient = () => this.props.onCancel();

  onAddIngredient = () => {
    const { ingredient } = this.props;
    const { quantity, measurement } = this.state;

    const newIngredient = {
      ...ingredient,
      quantity,
      measurement: {
        id: measurement.value,
        name: measurement.label,
      },
    };

    this.props.onConfirm(newIngredient);
  };

  render() {
    const { quantity, measurement } = this.state;
    const {
      ingredient,
      globalData: { measurements },
    } = this.props;

    return (
      <>
        <AddIngredientRow initialPose="closed" pose="open">
          <P>
            <b>Ingredient:</b> {ingredient.name}
          </P>
          <Row>
            <Form.FormGroup>
              <Form.Label>
                Quantity
                <Form.Input
                  type="number"
                  value={quantity}
                  onChange={this.onChangeQuantity}
                />
              </Form.Label>
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label>
                Measurement
                <Form.Select
                  placeholder="Select measurements..."
                  value={measurement || {}}
                  onChange={this.onSelectMeasurement}
                >
                  {measurements.map(({ id, name }) => (
                    <Form.Select.Option key={id} label={name} value={id} />
                  ))}
                </Form.Select>
              </Form.Label>
            </Form.FormGroup>
          </Row>
          <Row>
            <Button
              color="primary"
              onClick={this.onAddIngredient}
              disabled={!quantity || !measurement}
            >
              Add Ingredient
            </Button>
            <Button onClick={this.onCancelIngredient}>Cancel</Button>
          </Row>
        </AddIngredientRow>
      </>
    );
  }
}

export default withGlobalData(AddIngredient);
