import React from 'react';
import {
  UikTopBar,
  UikTopBarSection,
  UikTopBarTitle,
  UikAvatar,
  UikTopBarLinkContainer,
  UikTopBarLink,
  UikDivider,
} from '@duik';

const Navbar = () => (
  <UikTopBar>
    <UikTopBarSection>
      <UikTopBarTitle>Healfit</UikTopBarTitle>
      <UikDivider margin vertical />
      <UikTopBarLinkContainer>
        <UikTopBarLink>Dashboard</UikTopBarLink>
        <UikTopBarLink>Recipes</UikTopBarLink>
        <UikTopBarLink>Meal Plan</UikTopBarLink>
      </UikTopBarLinkContainer>
    </UikTopBarSection>

    <UikTopBarSection>
      <UikAvatar
        avatarPlaceholder={{
          content: 'DC',
          color: 'blue',
        }}
      />
    </UikTopBarSection>
  </UikTopBar>
);

export default Navbar;
