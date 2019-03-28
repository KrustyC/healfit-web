import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Form, Formik } from 'formik';
import html from 'uikit/organisms/Editor/htmlSerializer';

import Wizard from 'components/Wizard';
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

const recipeCategories = [
  { id: 1, name: 'Breakfast' },
  { id: 2, name: 'Lunch' },
  { id: 3, name: 'Appetizers' },
  { id: 4, name: 'Soups' },
  { id: 5, name: 'Shake' },
  { id: 6, name: 'Fish' },
  { id: 7, name: 'Vegetarian' },
  { id: 8, name: 'Beef' },
  { id: 9, name: 'Poultry' },
  { id: 10, name: 'Pork' },
  { id: 11, name: 'Vegetables' },
  { id: 12, name: 'Salads' },
  { id: 13, name: 'Vegan' },
];

const recipeLevels = [
  { id: 1, name: 'Beginner' },
  { id: 2, name: 'Intermidiate' },
  { id: 3, name: 'Chef' },
];

const globalData = {
  recipeLevels,
  recipeCategories,
};

const EditOrCreateForm = ({ edit, initialValues, onComplete }) => {
  const onSubmit = values => {
    const preparedData = {
      ...values,
      level: globalData.recipeLevels.find(
        ({ id }) => parseInt(values.level, 10) === parseInt(id, 10)
      ),
      category: {
        id: values.category.value,
        name: values.category.label,
      },
      method: html.serialize(values.method),
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
};

EditOrCreateForm.defaultProps = {
  edit: false,
};

export default EditOrCreateForm;
