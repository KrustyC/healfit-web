import React from 'react';
import styled, { css } from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from 'uikit/blocks/Button';
import Heading from 'uikit/elements/Heading';
import Form from 'uikit/blocks/Form';
import Layout from './components/Layout';

const EnquiryForm = styled(Form)`
  width: 600px;
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primary};
    border-radius: 5px;
  `}
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  ${Form.FormGroup} {
    flex: 1;
    :first-child {
      margin-right: 10px;
    }
    ${Form.Input} {
      width: 100%;
    }
  }
`;

const Enquiry = () => (
  <Layout size="fullscreen" direction="column">
    <Heading level="h1" align="center">
      Still confused? Drop us a word, we{"'"}ll get back to you asap.
    </Heading>
    <Formik
      initialValues={{ email: '', name: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string()
          .email()
          .required('Required'),
      })}
    >
      {({
        values,
        touched,
        errors,
        // dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        // handleSubmit,
        // handleReset,
      }) => (
        <EnquiryForm>
          <Row>
            <Form.FormGroup>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Input
                id="name"
                placeholder="Enter your name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Form.Feedback show={errors.name && touched.name}>
                Write the fucking name
              </Form.Feedback>
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label htmlFor="name">Email</Form.Label>
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
          </Row>
          <Form.FormGroup style={{ width: '100%' }}>
            <Form.Label htmlFor="name">Message</Form.Label>
            <Form.Textarea
              id="content"
              placeholder="Tell us what is not clear..."
              rows="4"
              cols="50"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Form.Feedback show={errors.message && touched.message}>
              {errors.message}
            </Form.Feedback>
          </Form.FormGroup>

          <Button type="submit" size="large" disabled={isSubmitting}>
            Submit
          </Button>
        </EnquiryForm>
      )}
    </Formik>
  </Layout>
);
export default Enquiry;
