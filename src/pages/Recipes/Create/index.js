import React from 'react';
import styled, { css } from 'styled-components';

import Heading from 'uikit/elements/Heading';
import Form from '../components/EditOrCreateForm';

const Layout = styled.div`
  ${({ theme }) => css`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: ${theme.padding.md};

    width: ${theme.dimensions.containerWidth.default};
    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
    }
  `}
`;

export default () => (
  <Layout>
    <Heading level="h1">Create your own recipe</Heading>
    <Form onSubmit={() => console.log('submit')} />
  </Layout>
);
