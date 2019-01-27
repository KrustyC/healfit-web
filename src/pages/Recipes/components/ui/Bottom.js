import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Button from 'uikit/blocks/Button';

const BottomContainer = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: footer;
    padding: 0 ${theme.padding.md};
  `}
`;

const Bottom = ({
  onPrevious,
  isSubmitting,
  isFirstPage,
  isLastPage,
  isValid,
}) => (
  <BottomContainer>
    <Button size="large" onClick={onPrevious} disabled={isFirstPage}>
      Previous
    </Button>
    <Button
      size="large"
      color="primary"
      disabled={(isSubmitting, !isValid)}
      type="submit"
    >
      {isLastPage ? 'Create Recipe' : 'Next'}
    </Button>
  </BottomContainer>
);

Bottom.propTypes = {
  onPrevious: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isFirstPage: PropTypes.bool.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default Bottom;
