import styled, { css } from 'styled-components';

// eslint-disable-next-line
export const Hr = styled.hr`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primary};
    max-width: 50px;
    margin: 0px;
    border-radius: 5px;
  `}
`;
