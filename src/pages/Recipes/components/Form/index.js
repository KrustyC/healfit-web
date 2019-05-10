import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Form, Formik } from 'formik';
import { convertToHTML } from 'uikit/organisms/Editor/utils';
import withGlobalData from 'hoc/withGlobalData';

import Wizard from 'uikit/organisms/Wizard';
import Bottom from './ui/Bottom';
import Main from './ui/Main';
import Sidebar from './ui/Sidebar';

import validationSchema from './validationSchema';

const Layout = styled(Form)`
  ${({ theme }) => css`
    display: grid;
    width: ${theme.dimensions.containerWidth.fullscreen};
    height: calc(100vh - 70px);
    grid-template-areas:
      'sidebar main'
      'sidebar footer';
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 100px;

    @media (max-width: ${theme.sizes.md}) {
      grid-template-areas:
        'main'
        'footer';
      grid-template-columns: 1fr;
      grid-template-rows: auto 13vh;
    }
  `}
`;

const EditOrCreateForm = ({ globalData, edit, initialValues, onComplete }) => {
  const onSubmit = values => {
    const preparedData = {
      ...values,
      level: globalData.recipeLevels.find(({ id }) => values.level === id),
      category: {
        id: values.category.value,
        name: values.category.label,
      },
      method: convertToHTML(values.method),
    };
    onComplete(preparedData);
  };

  return (
    <Wizard onSubmit={onSubmit}>
      {({ page, isLastPage, isFirstPage, onPrevious, onWizardSubmit }) => (
        <Formik
          initialValues={initialValues}
          isInitialValid={edit}
          validationSchema={validationSchema[page]}
          onSubmit={onWizardSubmit}
          validateOnBlur
          validateOnChange
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
                globalData={globalData}
              />
              <Bottom
                edit={edit}
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
};

EditOrCreateForm.propTypes = {
  edit: PropTypes.bool,
  onComplete: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  globalData: PropTypes.object.isRequired,
};

EditOrCreateForm.defaultProps = {
  edit: false,
};

export default withGlobalData(EditOrCreateForm);
