import React from 'react';
import PropTypes from 'prop-types';
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
      'sidebar footer';
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 100px;
  `}
`;

const Form = ({ edit, initialValues, onComplete }) => (
  <Wizard onSubmit={onComplete}>
    {({ page, pages, isLastPage, isFirstPage, onPrevious, onSubmit }) => (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema[page]}
        onSubmit={onSubmit}
      >
        {({ values, isValid, isSubmitting, handleSubmit }) => (
          <Layout onSubmit={handleSubmit}>
            <Sidebar pages={pages} page={page} />
            <Main edit={edit} values={values} />
            <Bottom
              onPrevious={onPrevious}
              isSubmitting={isSubmitting}
              isFirstPage={isFirstPage}
              isLastPage={isLastPage}
              isValid={isValid}
            />
          </Layout>
        )}
      </Formik>
    )}
  </Wizard>
);

Form.propTypes = {
  edit: PropTypes.bool,
  onComplete: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

Form.defaultProps = {
  edit: false,
};

export default Form;
