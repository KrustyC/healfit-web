import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { UikAvatar } from '@duik';
import StarRating from 'uikit/blocks/StarRating';

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: ${theme.margin.md} 0;
    padding: ${theme.padding.md} 0;
    border-top: 2px solid ${theme.colors.border};
    @media (max-width: ${theme.sizes.md}) {
      padding: ${theme.padding.md} ${theme.padding.sm};
    }
  `}
`;

const Rate = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.padding.xs};

    b {
      margin-bottom: ${theme.margin.xs};
    }

    @media (max-width: ${theme.sizes.md}) {
      b {
        display: none;
      }
    }
  `}
`;

const Row = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled(UikAvatar)`
  ${({ theme }) => css`
    > div:first-of-type {
      height: 60px !important;
      width: 60px !important;
      font-size: 24px !important;
    }

    > div:nth-of-type(2) {
      * {
        font-size: ${theme.fontSize.small} !important;
      }
    }
  `}
`;

const Bottom = ({ recipe, rateRecipe }) => {
  const [rating, setRating] = useState(recipe.rating);

  const onRate = async rate => {
    const previousRating = rating;
    setRating(rate);

    try {
      await rateRecipe({ variables: { slug: recipe.slug, rate } });
    } catch (error) {
      setRating(previousRating);
    }
  };

  return (
    <Container>
      <Rate>
        <b>Rate this recipe</b>
        <StarRating rating={rating} onRate={onRate} />
      </Rate>
      <Row>
        <Avatar
          name="Davide Crestini"
          textTop="Created by"
          avatarPlaceholder={{
            content: 'DC',
            color: 'blue',
          }}
        />
      </Row>
    </Container>
  );
};

const RATE = gql`
  mutation rateRecipe($slug: String!, $rate: Int!) {
    rateRecipe(input: { slug: $slug, rate: $rate }) {
      recipeId
    }
  }
`;

Bottom.propTypes = {
  recipe: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  rateRecipe: PropTypes.func.isRequired,
};

export default graphql(RATE, { name: 'rateRecipe' })(Bottom);
