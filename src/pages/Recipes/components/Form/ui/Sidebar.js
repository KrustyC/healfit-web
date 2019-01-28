import React from 'react';
import PropTypes from 'prop-types';
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

const Sidebar = ({ pages, page }) => (
  <SidebarContainer>
    Sidebar {pages} {page}
  </SidebarContainer>
);

Sidebar.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number.isRequired,
};

Sidebar.defaultProps = {
  pages: 0,
};

export default Sidebar;
