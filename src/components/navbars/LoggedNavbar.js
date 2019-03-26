import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { RootContext } from 'app/contexts/RootContext';
import { DrawerContext } from 'app/contexts/DrawerContext';

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
  UikNavBurger,
  UikButton,
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

const Burger = styled(UikButton)`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    border: none !important;
    box-shadow: none !important;
    background: white;
    @media (min-width: ${theme.sizes.md}) {
      display: none;
    }
  `}
`;

const Links = styled(UikTopBarLinkContainer)`
  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.md}) {
      display: none;
    }
  `}
`;

const Divider = styled(UikTopBarMenuDivider)`
  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.md}) {
      display: none;
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

const Navbar = () => {
  const { isMenuOpen, onToggleMenu } = useContext(DrawerContext);

  return (
    <UikTopBar>
      <Burger onClick={onToggleMenu}>
        <UikNavBurger isOpen={isMenuOpen} />
      </Burger>
      <UikTopBarSection>
        <UikTopBarTitle>Healfit</UikTopBarTitle>
        <Divider />
        <Links>
          <UikTopBarLink Component={NavLink} to="/dashboard">
            Dashboard
          </UikTopBarLink>
          <UikTopBarLink Component={NavLink} to="/recipes">
            Recipes
          </UikTopBarLink>
          <UikTopBarLink Component={NavLink} to="/meal-planner">
            Meal Planner
          </UikTopBarLink>
        </Links>
      </UikTopBarSection>

      <UikTopBarSection>
        <UikDropdown
          position="bottomRight"
          DisplayComponent={UiKitUserDropwdown}
        >
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
};

export default Navbar;
