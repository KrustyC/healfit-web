import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import renderHTML from 'react-render-html';
import Heading from 'uikit/elements/Heading';

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: ${theme.margin.lg};
  `}
`;

const Method = ({ method }) => (
  <Container>
    <Heading level="h4">Method</Heading>
    {renderHTML(method)}
  </Container>
);

Method.propTypes = {
  method: PropTypes.string.isRequired,
};

export default Method;
