import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';
import Heading from 'uikit/elements/Heading';
import Carbohydrate from './Carbohydrate';
import Fat from './Fat';
import General from './General';
import Other from './Other';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Add at least two letters')
    .required('Please add a name'),
  category: Yup.string().required('Please add a category'),
  calories: Yup.number()
    .min(0, 'Use a positive number')
    .required('Please add the kcal of this ingridient'),
  nutrients: Yup.object().shape({
    cholesterol: Yup.number()
      .min(0, 'Use a positive number')
      .required('Please add cholesterol % of this ingridient'),
    fat: Yup.object().shape({
      monounsaturated: Yup.number()
        .min(0, 'Use a positive number')
        .required('Please add monounsaturated fat % of this ingridient'),
      saturated: Yup.number()
        .min(0, 'Use a positive number')
        .required('Please add saturated fat % of this ingridient'),
      polyunsaturated: Yup.number()
        .min(0, 'Use a positive number')
        .required('Please add polyunsaturated fat % of this ingridient'),
    }),
    carbohydrate: Yup.object().shape({
      fiber: Yup.number()
        .min(0, 'Use a positive number')
        .required('Please add fiber % of this ingridient'),
      sugar: Yup.number()
        .min(0, 'Use a positive number')
        .required('Please add sugar % of this ingridient'),
    }),
    potassium: Yup.number()
      .min(0, 'Use a positive number')
      .required('Please add potassium % of this ingridient'),
    protein: Yup.number()
      .min(0, 'Use a positive number')
      .required('Please add protein % of this ingridient'),
    sodium: Yup.number()
      .min(0, 'Use a positive number')
      .required('Please add sodium % of this ingridient'),
  }),
});

const initialValues = {
  name: '',
  category: '',
  calories: 0,
  nutrients: {
    cholesterol: 0,
    fat: {
      monounsaturated: 0,
      saturated: 0,
      polyunsaturated: 0,
    },
    carbohydrate: {
      fiber: 0,
      sugar: 0,
    },
    potassium: 0,
    protein: 0,
    sodium: 0,
  },
};

const AddIngridientForm = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({
      values,
      isSubmitting,
      isValid,
      handleSubmit,
      setFieldTouched,
      setFieldValue,
    }) => (
      <Form onSubmit={handleSubmit}>
        <Heading level="h3">BASIC INFO</Heading>
        <General
          values={values}
          setFieldTouched={setFieldTouched}
          setFieldValue={setFieldValue}
        />
        <div style={{ paddingTop: '5px', borderTop: '2px solid #EFEFEF' }}>
          <Heading level="h3">NUTRIENTS</Heading>
          <Other />
          <Fat />
          <Carbohydrate />
        </div>
        <Button
          type="submit"
          size="large"
          color="primary"
          loading={isSubmitting}
          disabled={isSubmitting || !isValid}
        >
          Add Ingridient
        </Button>
      </Form>
    )}
  </Formik>
);

AddIngridientForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddIngridientForm;
