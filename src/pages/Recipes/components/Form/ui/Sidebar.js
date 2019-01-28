import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';
import { VerticalProgress } from 'uikit/blocks/Progress';

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

const Sidebar = ({ page }) => (
  <SidebarContainer>
    <VerticalProgress currentStep={page}>
      <VerticalProgress.Step>
        <Heading level="h4">Generic Information</Heading>
        <P>Provide some generic information about the recipes</P>
      </VerticalProgress.Step>
      <VerticalProgress.Step>
        <Heading level="h4">Ingridients</Heading>
        <P>
          Provide all needed ingridients, they come from a list of preselected
          one, if you can;t find your ingridient, feel free to create one
        </P>
      </VerticalProgress.Step>
      <VerticalProgress.Step>
        <Heading level="h4">Method</Heading>
        <P>Add all the necessary steps</P>
      </VerticalProgress.Step>
      <VerticalProgress.Step>
        <Heading level="h4">Preview {'&'} Confirm</Heading>
      </VerticalProgress.Step>
    </VerticalProgress>
  </SidebarContainer>
);

Sidebar.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Sidebar;
