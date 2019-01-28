import React from 'react';
import styled, { css } from 'styled-components';

const SidebarContainer = styled.div`
  ${({ theme }) => css`
    border-right: 1px solid ${theme.colors.border};
    padding: 0 ${theme.padding.md};
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  `}
`;

export default ({ pages, currentPage }) => (
  <SidebarContainer>
    Sidebar {pages} {currentPage}
  </SidebarContainer>
);
