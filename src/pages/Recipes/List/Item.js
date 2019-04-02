import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getImageURL } from 'helpers/images';

import UikStarRating from 'uikit/blocks/StarRating';
import Link from 'uikit/elements/Link';
import Card from 'uikit/blocks/Card';
import Button from 'uikit/blocks/Button';

const PictureContainer = styled.div`
  position: relative;
  height: 190px;
  max-width: 100%;
`;

const Image = styled.img`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    height: 190px;
    /* width: 350px; */
    transform: scale(1);
    transition: 0.3s ease-in-out;

    :hover {
      transform: scale(1.1);
    }
  `}
`;

const Category = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.padding.xs} ${theme.padding.sm};
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.small};
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    margin: ${theme.margin.sm};
    z-index: 1000000;
  `}
`;

// @TODO Need to add the like functionality
const Item = ({ recipe }) => (
  <Card>
    <Card.Thumb>
      <PictureContainer>
        <Image
          src={getImageURL(recipe.picture, 'w_500,h_220,c_thumb')}
          alt="recipe image"
        />
        <Category>{recipe.category.name}</Category>
      </PictureContainer>
    </Card.Thumb>
    <Card.Main>
      <Card.Title>{recipe.title}</Card.Title>
      <Card.Description>{recipe.description}</Card.Description>
    </Card.Main>
    <Card.Footer bordered>
      <UikStarRating rating={recipe.rating} />
      <Button
        color="primary"
        css="margin-left: auto; display: flex; align-items: center"
        as={Link}
        to={`/recipes/${recipe.slug}`}
        size="small"
      >
        View
      </Button>
    </Card.Footer>
  </Card>
);

Item.propTypes = {
  recipe: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Item;
