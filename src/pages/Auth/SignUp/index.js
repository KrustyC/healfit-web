import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import Container from 'uikit/blocks/Container';
import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';

const USER_TYPE = 1;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Please provide your email'),
  firstName: Yup.string().required('Please provide your First Name'),
  lastName: Yup.string().required('Please provide your Last Name'),
  password: Yup.string().required('Please provide your password'),
});

const SignupMutation = gql`
  mutation signup(
    $email: String!
    $firstName: String!
    $lastName: String!
    $type: Int!
    $password: String!
  ) {
    signup(
      input: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        type: $type
        password: $password
      }
    ) {
      firstName
    }
  }
`;

const SignUp = () => (
  <Container size="large">
    <Mutation mutation={SignupMutation}>
      {signup => (
        <Formik
          initialValues={{
            email: '',
            password: '',
            firstName: '',
            lastName: '',
          }}
          onSubmit={values => {
            signup({ variables: { ...values, type: USER_TYPE } })
              .then(res => console.log('Success', res))
              .catch(err => console.log('Error', err));
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            touched,
            errors,
            // dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            // handleReset,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.FormGroup>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Feedback show={errors.email && touched.email}>
                  {errors.email}
                </Form.Feedback>
              </Form.FormGroup>
              <Form.FormGroup>
                <Form.Label htmlFor="firstName">First Name</Form.Label>
                <Form.Input
                  id="firstName"
                  placeholder="Enter your first name"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Feedback show={errors.firstName && touched.firstName}>
                  {errors.firstName}
                </Form.Feedback>
              </Form.FormGroup>
              <Form.FormGroup>
                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                <Form.Input
                  id="lastName"
                  placeholder="Enter your Last Name"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Feedback show={errors.lastName && touched.lastName}>
                  {errors.lastName}
                </Form.Feedback>
              </Form.FormGroup>
              <Form.FormGroup>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Password
                  id="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Form.Feedback show={errors.password && touched.password}>
                  {errors.password}
                </Form.Feedback>
              </Form.FormGroup>
              <Button type="submit" size="large" disabled={isSubmitting}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </Mutation>
  </Container>
);

export default SignUp;
