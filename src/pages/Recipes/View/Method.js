import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'uikit/elements/Heading';
import htmlParser from 'helpers/htmlParser';

const OuterContainer = styled.div`
  ${({ theme }) => css`
    width: ${theme.dimensions.containerWidth.fullscreen};
    padding: ${theme.padding.lg} 0;
    margin: ${theme.margin.md} 0;
  `}
`;

const InnerContainer = styled.div`
  ${({ theme }) => css`
    width: ${theme.dimensions.containerWidth.default};
    margin: 0 auto;
    font-size: ${theme.fontSize.reading};
    display: flex;
    flex-direction: column;
  `}
`;

const Method = ({ method }) => (
  <OuterContainer>
    <InnerContainer>
      <Heading level="h4">Method</Heading>
      {htmlParser(method)}
    </InnerContainer>
  </OuterContainer>
);

Method.propTypes = {
  method: PropTypes.string.isRequired,
};

export default Method;
