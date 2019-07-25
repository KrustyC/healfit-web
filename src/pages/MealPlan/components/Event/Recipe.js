import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getImageURL } from 'helpers/images';

import Link from 'uikit/elements/Link';
import Card from 'uikit/blocks/Card';

const PictureContainer = styled.div`
  position: relative;
  height: 190px;
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
    style={{ marginRight: '30px' }}
  >
    <Card.Thumb>
      <PictureContainer>
        <Image
          src={getImageURL(recipe.picture, 'w_300,h_220,c_thumb')}
          alt="recipe image"
        />
      </PictureContainer>
    </Card.Thumb>
    <Card.Main>
      <Card.Title>{recipe.title}</Card.Title>
      <Card.Description>
        {recipe.calories} kcal | 10g Protein • 10g Fat • 10g Carbs
      </Card.Description>
    </Card.Main>
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
