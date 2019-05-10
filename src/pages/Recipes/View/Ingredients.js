import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'uikit/elements/Heading';

const OuterContainer = styled.div`
  ${({ theme }) => css`
    width: ${theme.dimensions.containerWidth.fullscreen};
    margin: ${theme.margin.md} 0;
    padding: ${theme.padding.lg} 0;
    background: #efefef;
    @media (max-width: ${theme.sizes.md}) {
      padding: ${theme.padding.sm} 0;
    }
  `}
`;

const InnerContainer = styled.div`
  ${({ theme }) => css`
    width: ${theme.dimensions.containerWidth.large};
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
      padding: 0 ${theme.padding.md};
    }
  `}
`;

const Grid = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.margin.sm};
    display: grid;
    /* @TODO Here I should calculate based on number of items */
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);

    grid-gap: ${theme.margin.sm};
    grid-auto-flow: column;

    @media (max-width: ${theme.sizes.md}) {
      grid-template-columns: 1fr;
    }
  `}
`;

const Ingredient = styled.div``;

const Quantity = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.large};
  `}
`;

const Ingredients = ({ ingredients }) => (
  <OuterContainer>
    <InnerContainer>
      <Heading level="h2">Ingredients</Heading>
      <Grid>
        {ingredients.map(({ id, name, quantity, measurement }) => (
          <Ingredient key={id}>
            <Quantity>{quantity}</Quantity> {measurement.name.toLowerCase()}{' '}
            <b>{name.toLowerCase()}</b>
          </Ingredient>
        ))}
      </Grid>
    </InnerContainer>
  </OuterContainer>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
      measurement: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default Ingredients;
