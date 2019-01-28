import React from 'react';
import styled, { css } from 'styled-components';
import { Formik } from 'formik';

import Wizard from 'components/Wizard';
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
  <Wizard onSubmit={(val, actions) => console.log(val, actions)}>
    {({ page }) => (
      <Formik
        initialValues={{ title: 'Something' }}
        validationSchema={validationSchema[page]}
      >
        {({ values, onChange, isValid, isSubmitting }) => (
          <Layout>
            <Sidebar pages={4} />
            <Main values={values} />
            <Bottom
              // onPrevious={onPrevious}
              // isSubmitting={isSubmitting}
              // isFirstPage={isFirstPage}
              // isLastPage={isLastPage}
              isValid={isValid}
            />
          </Layout>
        )}
      </Formik>
    )}
  </Wizard>
);
