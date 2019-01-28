import React from 'react';
import styled, { css } from 'styled-components';

import Button from 'uikit/blocks/Button';

const SidebarContainer = styled.div`
  ${({ theme }) => css`
    border-right: 1px solid ${theme.colors.border};
    grid-area: sidebar;
    display: flex;
    flex-align: column;
    align-items: center;
    justify-content: center;
  `}
`;

export default ({ pages, currentPage }) => (
  <SidebarContainer>Sidebar</SidebarContainer>
);
