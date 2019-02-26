import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';

const Layout = styled.div`
  ${({ theme }) => css`
    min-height: calc(100vh - ${theme.dimensions.navbarHeight});
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${theme.dimensions.containerWidth.fullscreen};
  `}
`;

const Top = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.margin.md};
  `}
`;

const Picture = styled.div`
  display: flex;
  flex: 1;
`;

const HeadInfo = styled.div`
  flex: 1;
`;

const Hr = styled.hr`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primary};
    max-width: 50px;
    margin: 0px;
    border-radius: 5px;
  `}
`;

const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const RowItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Recipe = ({ recipe }) => (
  console.log(recipe),
  (
    <Layout>
      <Top>
        <Picture>{recipe.picture}</Picture>
        <HeadInfo>
          <Heading level="h1">{recipe.title}</Heading>
          <Hr />
          <P>{recipe.description}</P>
          <Row>
            <RowItem>
              <b>Created By</b>
              <b>Davide Crestini</b>
            </RowItem>
            <RowItem>
              <b>Something Else</b>
              <b>Davide Crestini</b>
            </RowItem>
            <RowItem>
              <b>Liked By</b>
              <b>198 People</b>
            </RowItem>
          </Row>
        </HeadInfo>
      </Top>
    </Layout>
  )
);

Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipe;
