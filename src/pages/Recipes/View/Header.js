import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getImageURL } from 'app/helpers/images';
import Heading from 'uikit/elements/Heading';
import Link from 'uikit/elements/Link';
import P from 'uikit/elements/P';
import { Hr } from './shared';

const Top = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.margin.lg} 0 ${theme.margin.md} 0;
    min-height: 50vh;
  `}
`;

const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const HeadInfo = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding-left: ${theme.padding.md};
  `}
`;

const Image = styled.img`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    border-radius: 5px;
    height: 600px;
    width: 700px;
  `}
`;

const Description = styled(P)`
  ${({ theme }) => css`
    margin: ${theme.margin.md} 0;
    height: 150px;
  `}
`;

const Actions = styled.div`
  ${({ theme }) => css`
    margin: ${theme.margin.xs} 0;
    margin-top: auto;

    button {
      margin-right: ${theme.margin.md};
    }
  `}
`;

const EditLink = styled(Link)`
  font-weight: bold;
`;

const Header = ({ recipe }) => (
  <>
    <Top>
      <PictureContainer>
        <Image
          src={getImageURL(recipe.picture, 'w_700,h_600,g_face,c_thumb')}
          alt="recipe image"
        />
      </PictureContainer>
      <HeadInfo>
        <div>
          <Heading level="h1">{recipe.title}</Heading>
          <Hr />
          <Description>{recipe.description}</Description>
        </div>
        <Actions>
          <EditLink to={`/recipes/edit/${recipe.slug}`}>Edit Recipe</EditLink>
        </Actions>
      </HeadInfo>
    </Top>
  </>
);

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
  }).isRequired,
};

export default Header;
