import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Form, Formik } from 'formik';

import Wizard from 'components/Wizard';
import Bottom from './ui/Bottom';
import Main from './ui/Main';
import Sidebar from './ui/Sidebar';

import validationSchema from './validationSchema';

const Layout = styled(Form)`
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

const EditOrCreateForm = ({ edit, initialValues, onComplete }) => (
  <Wizard onSubmit={onComplete}>
    {({ page, isLastPage, isFirstPage, onPrevious, onWizardSubmit }) => (
      <Formik
        initialValues={initialValues}
        isInitialValid={edit}
        validationSchema={validationSchema[page]}
        onSubmit={onWizardSubmit}
      >
        {({
          values,
          isValid,
          isSubmitting,
          setFieldTouched,
          setFieldValue,
        }) => (
          <Layout>
            <Sidebar page={page} />
            <Main
              edit={edit}
              values={values}
              setFieldTouched={setFieldTouched}
              setFieldValue={setFieldValue}
            />
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

EditOrCreateForm.propTypes = {
  edit: PropTypes.bool,
  onComplete: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

EditOrCreateForm.defaultProps = {
  edit: false,
};

export default EditOrCreateForm;
