import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { UikAvatar } from '@duik';
import BookmarkIcon from 'assets/icons/bookmark.svg';
import StarRating from 'uikit/blocks/StarRating';

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: ${theme.margin.md} 0;
    padding: ${theme.padding.lg} 0;
    border-top: 2px solid ${theme.colors.border};
    @media (max-width: ${theme.sizes.md}) {
      padding: ${theme.padding.md} ${theme.padding.sm};
    }
  `}
`;

const Bookmark = styled.div`
  ${({ theme, bookmarked }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.padding.xs};

    @media (max-width: ${theme.sizes.md}) {
      b {
        display: none;
      }
    }

    svg {
      height: 25px;
      width: 25px;
      path {
        stroke: ${theme.colors.primary};
        stroke-width: 20;
        /* stroke-linejoin: round; */
        stroke-linecap: butt;
      }
      fill: ${bookmarked ? theme.colors.primary : theme.colors.light};
    }
  `}
`;

const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled(UikAvatar)`
  ${({ theme }) => css`
    > div:first-of-type {
      height: 80px !important;
      width: 80px !important;
      font-size: 30px !important;
    }

    > div:nth-of-type(2) {
      * {
        font-size: ${theme.fontSize.regular} !important;
      }
    }
  `}
`;

const Bottom = ({ recipe, rateRecipe }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [rating, setRating] = useState(recipe.rating);

  const onBookmark = () => {
    // Call Api
    setBookmarked(!bookmarked);
  };

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
      <StarRating rating={rating} onRate={onRate} />
      <Bookmark bookmarked={bookmarked}>
        <b>Save this recipe for later</b>
        <BookmarkIcon onClick={onBookmark} />
      </Bookmark>
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
