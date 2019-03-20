import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RootContext } from 'app/contexts/RootContext';
import { getUserInitials } from 'helpers/user';
import {
  UikTopBar,
  UikTopBarSection,
  UikTopBarTitle,
  UikAvatar,
  UikTopBarLinkContainer,
  UikTopBarLink,
  UikDivider,
} from '@duik';

const Navbar = () => {
  const { authUser } = useContext(RootContext);

  return (
    <UikTopBar>
      <UikTopBarSection>
        <UikTopBarTitle>Healfit</UikTopBarTitle>
        <UikDivider margin vertical />
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
        <UikAvatar
          avatarPlaceholder={{
            content: getUserInitials(authUser),
            color: 'blue',
          }}
        />
      </UikTopBarSection>
    </UikTopBar>
  );
};

export default Navbar;
