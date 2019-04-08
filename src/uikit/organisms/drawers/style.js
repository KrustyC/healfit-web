import styled, { css } from 'styled-components';
import { UikNavPanel } from '@duik';

export const Panel = styled(UikNavPanel)`
  ${({ theme, open }) => css`
    display: none;

    @media (max-width: ${theme.sizes.md}) {
      display: block;
      position: fixed;
      top: 0;
      right: 100%;
      border-right: none;
      box-shadow: 0 1px 10px 0 rgba(201, 53, 53, 0.07);
      height: calc(100vh - 70px);
      transition: 0.3s all;
      transform: translateX(o);
      height: 100vh;
      z-index: 1000000;

      ${open &&
        css`
          transform: translateX(100%);
        `}
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    height: 70px;
    background: ${theme.colors.primary};
    padding-left: ${theme.padding.sm};
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      color: ${theme.colors.white} !important;
    }
  `}
`;
