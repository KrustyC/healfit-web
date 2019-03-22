import styled, { css } from 'styled-components';

// eslint-disable-next-line
export const Row = styled.div`
  ${({ theme, columns }) => css`
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-column-gap: ${theme.margin.md};
  `}
`;
