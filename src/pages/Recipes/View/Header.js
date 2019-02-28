import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Image as CloudinaryImage, Transformation } from 'cloudinary-react';
import Heading from 'uikit/elements/Heading';
import Link from 'uikit/elements/Link';
import Button from 'uikit/blocks/Button';
import P from 'uikit/elements/P';
import { Hr } from './shared';

const Top = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.margin.lg} 0 ${theme.margin.md} 0;
    min-height: 50vh;
  `}
`;

const Picture = styled.div`
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
    padding-left: ${theme.padding.md};
    height: 100%;
  `}
`;

const Image = styled(CloudinaryImage)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    border-radius: 5px;
    height: 100%;
    width: 100%;
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
    margin: ${theme.margin.sm} 0;
    margin-top: bottom;
    height: 100%;

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
      <Picture>
        <Image publicId={recipe.picture}>
          <Transformation dpr="auto" width="auto" crop="scale" />
        </Image>
      </Picture>
      <HeadInfo>
        <Heading level="h1">{recipe.title}</Heading>
        <Hr />
        <Description>{recipe.description}</Description>
        <Actions>
          <Button squircled size="large" color="primary">
            Add To Meal Plan
          </Button>
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
