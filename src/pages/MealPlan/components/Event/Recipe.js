import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getImageURL } from 'helpers/images';

import Link from 'uikit/elements/Link';
import Card from 'uikit/blocks/Card';

const PictureContainer = styled.div`
  position: relative;
  height: 190px;
  width: 250px;
  max-width: 100%;
`;

const Image = styled.img`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    height: 190px;
    transform: scale(1);
    transition: 0.3s ease-in-out;

    :hover {
      transform: scale(1.1);
    }
  `}
`;

const Recipe = ({ recipe }) => (
  <Card
    as={Link}
    to={`/recipes/${recipe.slug}`}
    css="width: 250px; margin-right: 30px;"
  >
    <Card.Thumb>
      <PictureContainer>
        <Image
          src={getImageURL(recipe.picture, 'w_400,h_300,c_thumb')}
          alt="recipe image"
        />
      </PictureContainer>
    </Card.Thumb>
    <Card.Main>
      <Card.Title>{recipe.title}</Card.Title>
    </Card.Main>
    <Card.Footer css="font-size: 12px;">
      Calories {recipe.calories}
      <br />
      Protein {recipe.protein} &#183; Carbs {recipe.carbohydrates} &#183; Fat{' '}
      {recipe.fat}
    </Card.Footer>
  </Card>
);

Recipe.propTypes = {
  recipe: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipe;
