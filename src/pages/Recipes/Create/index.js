import React from 'react';
import styled, { css } from 'styled-components';
import Form from '../components/Form';

const Layout = styled.div`
  ${({ theme }) => css`
    height: calc(100vh - ${theme.dimensions.navbarHeight});
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${theme.dimensions.containerWidth.fullscreen};
  `}
`;

export default () => (
  <Layout>
    <Form onSubmit={() => console.log('submit')} />
  </Layout>
);
