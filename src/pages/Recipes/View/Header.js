import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { graphql } from 'react-apollo';
import history from 'app/router/history';
import { RootContext } from 'app/contexts/RootContext';
import gql from 'graphql-tag';
import { getImageURL } from 'app/helpers/images';
import Heading from 'uikit/elements/Heading';
import { Link } from 'react-router-dom';
import P from 'uikit/elements/P';
import SocialShare from 'uikit/organisms/SocialShare';
import { Uikon } from '@duik';

import { Hr } from './shared';

const Top = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.margin.lg} 0 ${theme.margin.md} 0;
    min-height: 50vh;

    @media (max-width: ${theme.sizes.md}) {
      flex-direction: column;
      margin: 0;
    }
  `}
`;

const HeadInfo = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding-left: ${theme.padding.md};

    @media (max-width: ${theme.sizes.md}) {
      padding: 0 ${theme.padding.sm};
    }
  `}
`;

const PictureContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
    height: 600px;
    width: 700px;

    @media (max-width: ${theme.sizes.md}) {
      width: 100vw;
      height: 55vh;
    }
  `}
`;

const Image = styled.img`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    border-radius: 5px;
  `}
`;

const Icon = styled(Uikon)`
  color: white;
  font-size: 26px;
  cursor: pointer;
`;

const Like = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    background: #fd5f4c;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    margin: ${theme.margin.md};
    z-index: 1000000;
    opacity: 0.9;
  `}
`;

const Edit = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    background: ${theme.colors.primary};
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    margin: ${theme.margin.md};
    z-index: 1000000;
    opacity: 0.9;
  `}
`;

const Description = styled(P)`
  ${({ theme }) => css`
    margin: ${theme.margin.md} 0;
  `}
`;

const Header = ({ recipe, likeOrDislikeRecipe }) => {
  const { amILoggedIn, authUser } = useContext(RootContext);
  const [amILiking, setLike] = useState(recipe.likedBy.includes(authUser._id));

  const onLike = () => {
    if (!amILoggedIn) {
      history.puhs('/auth/login');
    }

    const previousValue = amILiking;
    setLike(!amILiking);

    likeOrDislikeRecipe({ variables: { slug: recipe.slug } }).catch(() =>
      setLike(previousValue)
    );
  };

  return (
    <>
      <Top>
        <PictureContainer>
          <Image
            src={getImageURL(recipe.picture, 'w_700,h_600,g_face,c_thumb')}
            alt="recipe image"
          />
          <Like>
            <Icon onClick={onLike}>{amILiking ? 'love-fill' : 'love'}</Icon>
          </Like>
          <Edit>
            <Link to={`/recipes/edit/${recipe.slug}`}>
              <Icon>edit</Icon>
            </Link>
          </Edit>
        </PictureContainer>
        <HeadInfo>
          <div>
            <Heading level="h1">{recipe.title}</Heading>
            <Hr />
            <Description>{recipe.description}</Description>
          </div>
          <SocialShare url={recipe.slug} />
        </HeadInfo>
      </Top>
    </>
  );
};

Header.propTypes = {
  recipe: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    fat: PropTypes.number.isRequired,
    fiber: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    likedBy: PropTypes.array.isRequired,
    createdBy: PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  likeOrDislikeRecipe: PropTypes.func.isRequired,
};

const LIKE_OR_DISLIKE = gql`
  mutation likeOrDislikeRecipe($slug: String!) {
    likeOrDislikeRecipe(input: { slug: $slug })
  }
`;

export default graphql(LIKE_OR_DISLIKE, { name: 'likeOrDislikeRecipe' })(
  Header
);
