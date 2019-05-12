import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Interweave from 'interweave';

const Container = styled.div`
  ${({ theme }) => css`
    width: ${theme.dimensions.containerWidth.default};
    margin: 0 auto;
    font-size: ${theme.fontSize.reading};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: ${theme.padding.lg};
    ol {
      padding-left: 1.8rem;
      li {
        margin: 10px 0;
      }
    }

    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
      padding: 0 ${theme.padding.sm};
    }
    overflow: hidden;
  `}
`;

const Text = styled.div`
  overflow: hidden;
  word-wrap: break-word;
  * {
    font-size: 18px;
    font-family: 'PT Serif', serif !important;
    line-height: 180%;
    letter-spacing: 0.03em;
  }
`;

const Method = ({ method }) => (
  <Container>
    <Text>
      <Interweave content={method} />
    </Text>
  </Container>
);

Method.propTypes = {
  method: PropTypes.string.isRequired,
};

export default Method;
