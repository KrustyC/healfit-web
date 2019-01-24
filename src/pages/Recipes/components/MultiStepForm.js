import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Button from 'uikit/blocks/Button';

export default class MultiStepForm extends Component {
  static Page = ({ children }) => children;

  static propTypes = {
    children: PropTypes.any.isRequired,
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    page: 0,
    values: this.props.initialValues,
  };

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0),
    }));

  validationSchema = () => {
    const { page } = this.state;
    const { children } = this.props;
    const activePage = React.Children.toArray(children)[page];

    return activePage.props.validationSchema || {};
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;

    if (isLastPage) {
      return onSubmit(values, bag);
    }

    this.next(values);
    bag.setTouched({});
    return bag.setSubmitting(false);
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validationSchema={activePage.props.validationSchema || {}}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, isSubmitting, handleChange, isValid }) => (
          <form onSubmit={handleSubmit}>
            {React.cloneElement(activePage, { values, handleChange })}
            <Button size="large" disabled={page === 0} onClick={this.previous}>
              Previous
            </Button>
            <Button
              size="large"
              type="submit"
              color="primary"
              disabled={isLastPage || !isValid}
            >
              Next
            </Button>
            {isLastPage && (
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            )}
          </form>
        )}
      </Formik>
    );
  }
}
