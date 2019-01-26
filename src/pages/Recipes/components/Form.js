import React from 'react';
import styled, { css } from 'styled-components';

import Wizard from './Wizard';
import Bottom from './ui/Bottom';
import Main from './ui/Main';
import Sidebar from './ui/Sidebar';

import validationSchema from './validationSchema';

const Layout = styled.form`
  ${({ theme }) => css`
    display: grid;
    width: ${theme.dimensions.containerWidth.fullscreen};
    height: 100%;
    grid-template-areas:
      'sidebar main'
      'sidebar main'
      'sidebar main'
      'sidebar main'
      'sidebar footer';
    grid-template-columns: 1fr 3fr;
    ${'' /* grid-template-rows: auto 100px; */}
  `}
`;

export default () => (
  <Wizard
    initialValues={{
      title: '',
      servings: '',
      ingridients: '',
      steps: '',
    }}
    onSubmit={(values, actions) => {
      console.log(values, actions);
    }}
    validationSchema={validationSchema}
  >
    {({
      page,
      isFirstPage,
      isLastPage,
      isValid,
      isSubmitting,
      handleSubmit,
      onPrevious,
    }) => (
      <Layout onSubmit={handleSubmit}>
        <Sidebar pages={4} currentPage={page} />
        <Main />
        <Bottom
          onPrevious={onPrevious}
          isSubmitting={isSubmitting}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          isValid={isValid}
        />
      </Layout>
    )}
  </Wizard>
);
