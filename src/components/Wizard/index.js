import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardContext from './context';

import Pages from './Pages';

export default class Wizard extends Component {
  static Page = ({ children }) => children;

  static Pages = Pages;

  static propTypes = {
    children: PropTypes.any.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    page: 0,
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

  handleSubmit = (values, bag) => {
    const { children } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;

    if (isLastPage) {
      return this.props.onSubmit(values, bag);
    }

    this.next(values);
    bag.setTouched({});
    return bag.setSubmitting(false);
  };

  render() {
    const { children } = this.props;
    const { page } = this.state;

    const isFirstPage = page === 0;
    const isLastPage = page === React.Children.count(children) - 1;

    const contextValue = {
      page,
      isFirstPage,
      isLastPage,
      onPrevious: this.previous,
      onSubmit: this.onSubmit,
    };

    return (
      <WizardContext.Provider value={contextValue}>
        {this.props.children({
          page,
          isFirstPage,
          isLastPage,
          onPrevious: this.previous,
          onSubmit: this.onSubmit,
        })}
      </WizardContext.Provider>
    );
  }
}
