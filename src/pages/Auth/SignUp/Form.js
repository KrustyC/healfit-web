import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Formik, Field } from 'formik';
import * as Yup from 'yup';
import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';
import Link from 'uikit/elements/Link';
import P from 'uikit/elements/P';
import SvgEye from 'assets/icons/blind.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Please provide your email'),
  firstName: Yup.string().required('Please provide your First Name'),
  lastName: Yup.string().required('Please provide your Last Name'),
  password: Yup.string()
    .min(8, 'Password has to be longer than 8 characters!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must contain at least one upppercase character, one lowercase character, one special character and one number'
    )
    .required('Please provide your password'),
  acceptTermAndCondition: Yup.boolean()
    .oneOf([true], 'Please accept out T&Cs')
    .required('Please accept out T&Cs!'),
});

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  showPassword: false,
  acceptTermAndCondition: false,
};

const UserSignUpForm = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({
      values,
      isSubmitting,
      handleChange,
      isValid,
      handleBlur,
      handleSubmit,
      setFieldValue,
    }) => (
      <Form onSubmit={handleSubmit}>
        <Form.FormGroup>
          <Form.Label htmlFor="email">
            Email
            <Form.Input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="text"
              as={Field}
            />
          </Form.Label>
          <ErrorMessage name="email">
            {msg => <Form.Feedback>{msg}</Form.Feedback>}
          </ErrorMessage>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label htmlFor="firstName">
            First Name
            <Form.Input
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              type="text"
              as={Field}
            />
          </Form.Label>
          <ErrorMessage name="firstName">
            {msg => <Form.Feedback>{msg}</Form.Feedback>}
          </ErrorMessage>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label htmlFor="lastName">
            Last Name
            <Form.Input
              id="lastName"
              name="lastName"
              placeholder="Enter your Last Name"
              type="text"
              as={Field}
            />
          </Form.Label>
          <ErrorMessage name="lastName">
            {msg => <Form.Feedback>{msg}</Form.Feedback>}
          </ErrorMessage>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label htmlFor="password">
            Password
            <Form.Input
              id="password"
              as={Field}
              name="password"
              type={values.showPassword ? 'text' : 'password'}
              placeholder="*******"
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
        <Form.Checkbox
          name="acceptTermAndCondition"
          checked={values.acceptTermAndCondition}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <P size="small" style={{ margin: 0 }}>
            By clicking this button, you agree to{' '}
            <Link to="/legal/terms-and-conditions">
              Mailchimp{"'"}s Anti-spam Policy {'&'} Terms of Use.
            </Link>
          </P>
        </Form.Checkbox>
        {/* <Form.Feedback
          show={errors.acceptTermAndCondition && touched.acceptTermAndCondition}
        >
          {errors.acceptTermAndCondition}
        </Form.Feedback> */}
        <Button
          color="primary"
          type="submit"
          size="large"
          disabled={isSubmitting || !isValid}
          loading={isSubmitting}
          style={{ marginTop: '15px' }}
        >
          Sign Up
        </Button>
      </Form>
    )}
  </Formik>
);

UserSignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserSignUpForm;
