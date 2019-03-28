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

    h4 {
      margin: 0;
    }

    @media (max-width: ${theme.sizes.md}) {
      display: none;
    }
  `}
`;

const Sidebar = ({ page }) => (
  <SidebarContainer>
    <h1>Create Recipe</h1> {/* @TODO add check for edit */}
    <VerticalProgress currentStep={page}>
      <VerticalProgress.Step>
        <Heading level="h4">Generic Information</Heading>
        <P>Provide some generic information about the recipes</P>
      </VerticalProgress.Step>
      <VerticalProgress.Step>
        <Heading level="h4">Ingredients</Heading>
        <P>
          Provide all needed ingredients, they come from a list of preselected
          one, if you can;t find your ingredient, feel free to create one
        </P>
      </VerticalProgress.Step>
      <VerticalProgress.Step>
        <Heading level="h4">Method</Heading>
        <P>Add your very own method</P>
      </VerticalProgress.Step>
      <VerticalProgress.Step>
        <Heading level="h4">More info</Heading>
        <P>Add additional info such as calories and macronutrients</P>
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
