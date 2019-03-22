import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';
import SvgEye from 'assets/icons/blind.svg';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password has to be longer than 8 characters!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must contain at least one upppercase character, one lowercase character, one special character and one number'
    )
    .required('Please provide your password!'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required'),
});

const SignInForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      password: '',
      passwordConfirm: '',
      showPassword: false,
      showRepeatPassword: false,
    }}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({ isValid, isSubmitting, handleSubmit, values, setFieldValue }) => (
      <Form onSubmit={handleSubmit}>
        <Form.FormGroup>
          <Form.Label htmlFor="name">
            Password
            <Form.Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter a new password"
              as={Field}
            />
            <i>
              <SvgEye
                onClick={() =>
                  setFieldValue('showPassword', !values.showPassword)
                }
              />
            </i>
          </Form.Label>
          <ErrorMessage name="password">
            {msg => <Form.Feedback>{msg}</Form.Feedback>}
          </ErrorMessage>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label htmlFor="name">
            Repeat Password
            <Form.Input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              placeholder="Repeat your password"
              as={Field}
            />
            <i>
              <SvgEye
                onClick={() =>
                  setFieldValue(
                    'showRepeatPassword',
                    !values.showRepeatPassword
                  )
                }
              />
            </i>
          </Form.Label>
          <ErrorMessage name="passwordConfirm">
            {msg => <Form.Feedback>{msg}</Form.Feedback>}
          </ErrorMessage>
        </Form.FormGroup>
        <Button
          type="submit"
          size="large"
          color="primary"
          loading={isSubmitting}
          disabled={isSubmitting || !isValid}
        >
          Reset Password
        </Button>
      </Form>
    )}
  </Formik>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
