import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import posed from 'react-pose';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';
import RubbishBin from 'assets/icons/rubbish-bin.svg';

const RubbishIcon = styled(RubbishBin)`
  ${({ theme }) => css`
    fill: ${theme.colors.error};
    width: 30px;
    height: 20px;
    outline: none;
    cursor: pointer;

    :hover {
      fill: ${theme.util.darkenOnHover(theme.colors.error)};
    }
  `}
`;

const IngredientList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Ingredient = styled(
  posed.div({
    closed: {
      y: '-50px',
    },
    open: {
      y: '0px',
      transition: {
        y: { type: 'spring', stiffness: 350, damping: 10 },
      },
    },
  })
)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid ${theme.colors.border};
    background: ${theme.colors.white};
    height: 50px;
    padding: 0 ${theme.padding.sm};
    margin-top: ${theme.margin.md};
    border-radius: 5px;
    // font-weight: bold;

    text-transform: lowercase;

    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.14);
  `}
`;

export default class Ingredients extends Component {
  static propTypes = {
    ingredients: PropTypes.array.isRequired,
    onRemoveIngredient: PropTypes.func.isRequired,
  };

  onRemoveIngredient = ingredient => () =>
    this.props.onRemoveIngredient(ingredient.id);

  render() {
    const { ingredients } = this.props;
    return (
      <>
        <Heading level="h4">Selected Ingredients</Heading>
        <IngredientList>
          {ingredients.map(ingredient => (
            <Ingredient key={ingredient.id} initialPose="closed" pose="open">
              <P>
                {ingredient.quantity} {ingredient.measurement.name}{' '}
                {ingredient.name}
              </P>
              <RubbishIcon
                role="button"
                onClick={this.onRemoveIngredient(ingredient)}
                tabIndex="0"
              />
            </Ingredient>
          ))}
        </IngredientList>
      </>
    );
  }
}
