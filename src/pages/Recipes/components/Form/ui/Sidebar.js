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
    justify-content: flex-start;

    h1 {
      padding: ${theme.padding.md} 0;
    }
  `}
`;

const Title = styled(Heading)`
  margin: 0;
`;

const Sidebar = ({ page }) => (
  <SidebarContainer>
    <Heading>Create Recipe</Heading> {/* @TODO add check for edit */}
    <VerticalProgress currentStep={page}>
      <VerticalProgress.Step>
        <Title level="h4">Generic Information</Title>
        <P>Provide some generic information about the recipes</P>
      </VerticalProgress.Step>
      <VerticalProgress.Step>
        <Title level="h4">Ingridients</Title>
        <P>
          Provide all needed ingridients, they come from a list of preselected
          one, if you can;t find your ingridient, feel free to create one
        </P>
      </VerticalProgress.Step>
      <VerticalProgress.Step>
        <Title level="h4">Method</Title>
        <P>Add all the necessary steps</P>
      </VerticalProgress.Step>
      <VerticalProgress.Step>
        <Title level="h4">Preview {'&'} Confirm</Title>
      </VerticalProgress.Step>
    </VerticalProgress>
  </SidebarContainer>
);

Sidebar.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Sidebar;
