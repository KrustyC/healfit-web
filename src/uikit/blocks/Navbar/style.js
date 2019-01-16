import styled, { css } from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  min-width: 100vw;
  flex-direction: row;
  justify-content: flex-start;
  z-index: 100;

  ${({ theme, color, textColor, bordered }) => css`
    height: ${theme.dimensions.navbarHeight};
    background: ${theme.colors[color]};
    color: ${theme.colors[textColor]};
    font-size: ${theme.fontSize.regular};

    ${!bordered &&
      css`
        border-bottom: 2px solid ${theme.colors.border};
      `}

    @media (min-width: ${theme.sizes.md}) {
      padding-left: ${theme.padding.md};
      padding-right: ${theme.padding.md};
    }

    @media (max-width: ${theme.sizes.md}) {
      padding-left: ${theme.padding.sm};
      padding-right: ${theme.padding.sm};
      flex-direction: column;
    }
  `}
`;

export default StyledNavbar;
