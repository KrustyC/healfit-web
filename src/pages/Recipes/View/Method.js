import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import htmlParser from 'helpers/htmlParser';

const Container = styled.div`
  ${({ theme }) => css`
    width: ${theme.dimensions.containerWidth.default};
    margin: 0 auto;
    font-size: ${theme.fontSize.reading};
    display: flex;
    align-items: center;
    flex-direction: column;

    padding-top: ${theme.padding.lg};

    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
      padding: 0 ${theme.padding.xs};
    }
    overflow: hidden;
  `}
`;

const Text = styled.div`
  overflow: hidden;
`;

const Method = ({ method }) => (
  <Container>
    <Text>{htmlParser(method)}</Text>
  </Container>
);

Method.propTypes = {
  method: PropTypes.string.isRequired,
};

export default Method;
