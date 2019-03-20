import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { RootContext } from 'app/contexts/RootContext';
import { getUserInitials } from 'helpers/user';
import {
  UikTopBar,
  UikTopBarSection,
  UikTopBarTitle,
  UikAvatar,
  UikTopBarLinkContainer,
  UikTopBarLink,
  UikTopBarMenuDivider,
  UikDropdown,
  UikDropdownItem,
} from '@duik';

const Avatar = styled(UikAvatar)`
  ${({ theme }) => css`
    cursor: pointer;
    div > div {
      background: ${theme.colors.primary} !important;
      color: white !important;
      border-color: ${theme.colors.border} !important;
    }
  `}
`;

const UiKitUserDropwdown = ({ onClick }) => {
  const { authUser } = useContext(RootContext);

  return (
    <Avatar
      onClick={onClick}
      avatarPlaceholder={{
        content: getUserInitials(authUser),
      }}
    >
      CustomDisplayComponent
    </Avatar>
  );
};

UiKitUserDropwdown.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Navbar = () => (
  <UikTopBar>
    <UikTopBarSection>
      <UikTopBarTitle>Healfit</UikTopBarTitle>
      <UikTopBarMenuDivider />
      <UikTopBarLinkContainer>
        <UikTopBarLink Component={NavLink} to="/dashboard">
          Dashboard
        </UikTopBarLink>
        <UikTopBarLink Component={NavLink} to="/recipes">
          Recipes
        </UikTopBarLink>
        <UikTopBarLink Component={NavLink} to="/meal-planner">
          Meal Planner
        </UikTopBarLink>
      </UikTopBarLinkContainer>
    </UikTopBarSection>

    <UikTopBarSection>
      <UikDropdown position="bottomRight" DisplayComponent={UiKitUserDropwdown}>
        <UikDropdownItem Component={Link} to="/me/profile">
          Profile
        </UikDropdownItem>
        <UikDropdownItem Component={Link} to="/me/settings">
          Account Settings
        </UikDropdownItem>
        <UikDropdownItem Component={Link} to="/auth/logout">
          Logout
        </UikDropdownItem>
      </UikDropdown>
    </UikTopBarSection>
  </UikTopBar>
);

export default Navbar;
