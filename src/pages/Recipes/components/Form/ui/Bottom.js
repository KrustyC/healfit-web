import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Button from 'uikit/blocks/Button';

const BottomContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.light};
    border-top: 1px solid ${theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: footer;
    padding: 0 ${theme.padding.md};
  `}
`;

const Bottom = ({
  edit,
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
      {isLastPage ? `${edit ? 'Edit' : 'Create'} Recipe` : 'Next'}
    </Button>
  </BottomContainer>
);

Bottom.propTypes = {
  edit: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isFirstPage: PropTypes.bool.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default Bottom;
