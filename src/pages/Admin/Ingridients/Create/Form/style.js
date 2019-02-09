import styled, { css } from 'styled-components';

export const Row = styled.div`
  ${({ theme, columns }) => css`
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-column-gap: ${theme.margin.md};
  `}
`;
