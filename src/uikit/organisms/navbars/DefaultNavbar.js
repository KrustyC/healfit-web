import React from 'react';
import styled, { css } from 'styled-components';
import history from 'app/router/history';

import { UikTopBar, UikTopBarSection, UikTopBarTitle } from '@duik';

import Button from 'uikit/blocks/Button';

const Section = styled(UikTopBarSection)`
  ${({ theme }) => css`
    padding: 0 ${theme.padding.sm};
  `}
`;

const Navbar = () => (
  <UikTopBar>
    <UikTopBarSection>
      <UikTopBarTitle>Healfit</UikTopBarTitle>
    </UikTopBarSection>

    <Section>
      <Button
        size="small"
        color="primary"
        style={{ marginRight: '10px' }}
        onClick={() => history.push('/auth/signin')}
      >
        Login
      </Button>
    </Section>
  </UikTopBar>
);

export default Navbar;
