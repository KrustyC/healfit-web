import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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

const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    @media (max-width: ${theme.sizes.md}) {
      flex-direction: column;
      button:first-of-type {
        margin-bottom: ${theme.margin.sm};
      }
    }

    @media (min-width: ${theme.sizes.md}) {
      ${Button}:first-of-type {
        margin-right: ${theme.margin.sm};
      }
    }
  `}
`;

const Data = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    @media (max-width: ${theme.sizes.md}) {
      flex-direction: column;
    }

    @media (min-width: ${theme.sizes.md}) {
      ${Form.FormGroup} {
        :first-of-type {
          margin-right: ${theme.margin.sm};
        }
      }
    }
  `}
`;

const AddIngredient = ({
  ingredient,
  globalData: { measurements },
  onConfirm,
  onCancel,
}) => {
  const [quantity, setQuantity] = useState('');
  const [isQuantityError, setIsQuantityError] = useState(false);
  const [measurement, setMeasurement] = useState(null);

  const onChangeQuantity = ({ target: { value } }) => {
    const trimmed = value.trim();
    setQuantity(value);
    setIsQuantityError(
      trimmed.length === 0 || !trimmed.match(/^\d*((\/\d){1})?$/)
    );
  };

  const onAddIngredient = () => {
    const newIngredient = {
      ...ingredient,
      quantity,
      measurement: {
        id: measurement.value,
        name: measurement.label,
      },
    };

    onConfirm(newIngredient);
  };

  return (
    <>
      <AddIngredientRow initialPose="closed" pose="open">
        <P>
          <b>Ingredient:</b> {ingredient.name}
        </P>
        <Data>
          <Form.FormGroup>
            <Form.Label>
              Quantity
              <Form.Input
                type="text"
                placeholder="1, 1/2, 1/4, ..."
                value={quantity}
                onChange={onChangeQuantity}
              />
            </Form.Label>
            {isQuantityError && (
              <Form.Feedback>
                This value has to be an integer or fractal number (i.e. 2, 1/4,
                ...)
              </Form.Feedback>
            )}
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              Measurement
              <Form.Select
                placeholder="Select measurements..."
                value={measurement || {}}
                onChange={setMeasurement}
              >
                {measurements.map(({ id, name }) => (
                  <Form.Select.Option key={id} label={name} value={id} />
                ))}
              </Form.Select>
            </Form.Label>
          </Form.FormGroup>
        </Data>
        <Actions>
          <Button
            color="primary"
            onClick={onAddIngredient}
            disabled={isQuantityError || !measurement}
          >
            Add Ingredient
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </Actions>
      </AddIngredientRow>
    </>
  );
};

AddIngredient.propTypes = {
  ingredient: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  globalData: PropTypes.shape({ measurements: PropTypes.array.isRequired })
    .isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default withGlobalData(AddIngredient);
