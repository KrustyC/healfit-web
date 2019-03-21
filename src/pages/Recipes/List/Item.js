import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getImageURL } from 'helpers/images';
// import { getUserInitials } from 'helpers/user';

import { UikAvatar, Uikon } from '@duik';
import UikStarRating from 'uikit/blocks/StarRating';
import Link from 'uikit/elements/Link';
import Card from 'uikit/blocks/Card';

const Image = styled.img`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    height: 190px;
    width: 350px;

    transform: scale(1);
    transition: 0.3s ease-in-out;

    :hover {
      transform: scale(1.1);
    }
  `}
`;

const Info = styled.div`
  ${({ theme }) => css`
    margin-top: calc(${theme.margin.md} * 0.6);
    display: flex;
    justify-content: space-between;
  `}
`;

const Time = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.fontSize.small};

    i {
      margin-right: 5px;
      font-size: 20px;
    }
  `}
`;

const Heart = styled(Uikon)`
  margin-right: 3px;
  font-size: 16px;
  color: #d5d5d5 !important;
`;

const Item = ({ recipe }) => (
  <Card width="350px">
    <Card.Thumb>
      <Image
        src={getImageURL(recipe.picture, 'w_350,h_200,c_thumb')}
        alt="recipe image"
      />
    </Card.Thumb>
    <Card.Main>
      <Card.Title>{recipe.title}</Card.Title>
      <Card.Description>{recipe.description}</Card.Description>
      <Info>
        <UikAvatar
          name="Davide Crestini"
          textTop="Created by"
          avatarPlaceholder={{
            content: 'DC',
            color: 'blue',
          }}
        />
        <Time>
          <Uikon>clock</Uikon>15 min
        </Time>
      </Info>
    </Card.Main>
    <Card.Footer bordered>
      <Heart>love</Heart>120
      <Link
        css="margin-left: 5px; margin-right: auto;"
        to={`/recipes/${recipe.slug}`}
      >
        View
      </Link>
      <UikStarRating rating={2} />
    </Card.Footer>
  </Card>
);

Item.propTypes = {
  recipe: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
