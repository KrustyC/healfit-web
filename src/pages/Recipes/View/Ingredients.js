import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'uikit/elements/Heading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Ingredients = ({ ingredients }) => (
  <Container>
    <Heading level="h4">Ingredients</Heading>
    {ingredients.map(
      ({ name, quantity, measurement }) =>
        `${quantity} ${measurement.name.toLowerCase()} ${name.toLowerCase()}`
    )}
  </Container>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,

      quantity: PropTypes.number.isRequired,

      measurement: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default Ingredients;
