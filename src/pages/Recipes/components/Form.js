import React from 'react';
import * as Yup from 'yup';

import MultiStepForm from './MultiStepForm';

import Step1 from './ui/Step1';
import Step2 from './ui/Step2';
import Step3 from './ui/Step3';

const validateStep1 = Yup.object().shape({
  title: Yup.string().required('PHave to decide a title'),
  servings: Yup.number().required('PHave to decide a number'),
});

const validateStep2 = {
  ...validateStep1,
  ...Yup.object().shape({
    ingridients: Yup.string().required('Please add an ingridient'),
  }),
};

export default () => (
  <MultiStepForm
    initialValues={{
      title: '',
      servings: '',
      ingridients: '',
      steps: '',
    }}
    onSubmit={(values, actions) => {
      console.log(values, actions);
    }}
  >
    <Step1 validationSchema={validateStep1} />
    <Step2 validationSchema={validateStep2} />
    <Step3 />
  </MultiStepForm>
);
