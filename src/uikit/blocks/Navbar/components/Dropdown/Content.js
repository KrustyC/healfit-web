import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
`;

const ContentWrapper = styled.div`
  min-width: 160px;
  z-index: 1000;

  &:before {
    content: '';
    position: absolute;
    background: #fff;
    width: 20px;
    height: 20px;
    top: -3px;
    z-index: -1;
    left: 50%;
    margin-left: -10px;
    transform: rotate(45deg);
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.sizes.md}) {
      position: absolute;
      animation: ${fadeIn} 0.4s ease-in-out;
      margin-top: 5px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    }
  `}
`;

const Content = props => <ContentWrapper {...props} />;
Content.displayName = 'NavbarDropdownContent';

export default Content;
