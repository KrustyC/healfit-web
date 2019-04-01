import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.light};
    border-bottom-left-radius: ${theme.borderRadius};
    border-bottom-right-radius: ${theme.borderRadius};
    width: 100%;
    padding: ${theme.spaces.regular};
    padding-top: ${theme.spaces.small};
    padding-bottom: ${theme.spaces.small};
    text-align: right;
  `};
`;
