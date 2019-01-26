import React from 'react';
import styled, { css } from 'styled-components';

import Button from 'uikit/blocks/Button';

const BottomContainer = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: footer;
  `}
`;

export default ({
  onPrevious,
  isSubmitting,
  isFirstPage,
  isLastPage,
  isValid,
}) => (
  <BottomContainer>
    <Button onClick={onPrevious} disabled={isFirstPage}>
      Previous
    </Button>
    <Button color="primary" disabled={isLastPage || !isValid} type="submit">
      Next
    </Button>
    <Button color="primary" disabled={isSubmitting || !isValid} type="submit">
      Create Recipe
    </Button>
  </BottomContainer>
);
