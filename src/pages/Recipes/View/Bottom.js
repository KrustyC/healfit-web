import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Button from 'uikit/blocks/Button';

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: ${theme.margin.md} 0;
    padding: ${theme.padding.md} 0;
    @media (max-width: ${theme.sizes.md}) {
      padding: ${theme.padding.md} ${theme.padding.sm};
    }
  `}
`;

const Bottom = ({ onRateRecipe }) => (
  <Container>
    <Button size="large" onClick={onRateRecipe}>
      Rate this recipe
    </Button>
  </Container>
);

Bottom.propTypes = {
  onRateRecipe: PropTypes.func.isRequired,
};

export default Bottom;
