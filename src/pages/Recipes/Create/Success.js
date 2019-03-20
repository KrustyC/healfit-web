import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import history from 'app/router/history';
import Heading from 'uikit/elements/Heading';
import Button from 'uikit/blocks/Button';

const Layout = styled.div`
  ${({ theme }) => css`
    width: ${theme.dimensions.containerWidth.default};
    margin: 0 auto;
    height: calc(100vh - ${theme.dimensions.navbarHeight});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

const Success = ({ recipe: { title, slug } }) => (
  <Layout>
    <Heading level="h3" align="center">
      Yay! <br />
      Your recipe {'"'}
      {title}
      {'"'} has been successfully created!
    </Heading>
    <Button onClick={() => history.push(`/recipes/${slug}`)}>
      {' '}
      Go to Recipe
    </Button>
  </Layout>
);

Success.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Success;
