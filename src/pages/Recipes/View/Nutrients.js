import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'uikit/elements/Heading';

const OuterContainer = styled.div`
  ${({ theme }) => css`
    width: ${theme.dimensions.containerWidth.fullscreen};
    padding: ${theme.padding.lg} 0;
    margin: ${theme.margin.md} 0;
    background: #efefef;

    @media (max-width: ${theme.sizes.md}) {
      padding: ${theme.padding.xs} 0;
    }
  `}
`;

const InnerContainer = styled.div`
  ${({ theme }) => css`
    width: ${theme.dimensions.containerWidth.large};
    margin: 0 auto;
    display: flex;
    flex-direction: row;

    @media (max-width: ${theme.sizes.md}) {
      width: 80vw;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

const Nutrient = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    margin: ${theme.margin.sm} 0;

    h2 {
      margin-bottom: 0;
    }

    span:first-of-type {
      margin-right: ${theme.margin.xs};
    }

    span:last-of-type {
      text-transform: uppercase;
      font-size: ${theme.fontSize.small};
      font-weight: bold;
      margin-bottom: ${theme.margin.xs};
    }

    @media (max-width: ${theme.sizes.md}) {
      justify-content: flex-start;
    }
  `}
`;

const Nutrients = ({ recipe }) => (
  <OuterContainer>
    <InnerContainer>
      <Nutrient>
        <Heading level="h2" color="primary">
          {recipe.calories}
        </Heading>
        <span /> <span>calories</span>
      </Nutrient>
      <Nutrient>
        <Heading level="h2" color="primary">
          {recipe.protein}
        </Heading>
        <span>g</span>
        <span>protein</span>
      </Nutrient>
      <Nutrient>
        <Heading level="h2" color="primary">
          {recipe.fiber || 25}
        </Heading>
        <span>g</span> <span>fiber</span>
      </Nutrient>
      <Nutrient>
        <Heading level="h2" color="primary">
          {recipe.carbohydrates}
        </Heading>
        <span>g</span>
        <span>carbs</span>
      </Nutrient>
      <Nutrient>
        <Heading level="h2" color="primary">
          {recipe.fat}
        </Heading>
        <span>g</span>
        <span>fat</span>
      </Nutrient>
    </InnerContainer>
  </OuterContainer>
);

Nutrients.propTypes = {
  recipe: PropTypes.shape({
    fat: PropTypes.number.isRequired,
    fiber: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }).isRequired,
};

export default Nutrients;
