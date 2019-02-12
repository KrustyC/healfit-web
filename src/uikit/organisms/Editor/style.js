import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  div:last-child {
    width: 100%;
    min-height: 50vh;
  }
`;

export const Toolbar = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 2px solid ${theme.colors.border};
    margin-bottom: ${theme.margin.sm};
  `}
`;

export const ToolbarButton = styled.button.attrs({ type: 'button' })`
  ${({ theme, active }) => css`
    display: flex;
    height: 30px;
    align-items: flex-start;
    justify-content: center;
    width: 30px;
    border: none;
    outline: none;
    border-color: ${theme.colors.primary};
    background: ${theme.colors.white};
    cursor: pointer;
    :hover {
      background: ${theme.util.darkenOnHover(theme.colors.white)};
    }

    svg {
      height: 13px;
      width: 13px;
      fill: ${theme.colors.darkLter};
    }

    ${active &&
      css`
        background: ${theme.util.darkenOnHover(theme.colors.white)};
      `}
  `}
`;
