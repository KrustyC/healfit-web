import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardContext from './context';

import Pages from './Pages';

export default class Wizard extends Component {
  static Page = ({ children }) => children;

  static Pages = Pages;

  static propTypes = {
    children: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    page: 0,
    pages: null,
  };

  next = values =>
    this.setState(({ page, pages }) => ({
      page: Math.min(page + 1, pages - 1),
      values,
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0),
    }));

  handleSubmit = (values, bag) => {
    const { page, pages } = this.state;
    const isLastPage = page === pages - 1;

    if (isLastPage) {
      return this.props.onSubmit(values, bag);
    }

    this.next(values);
    bag.setTouched({});
    return bag.setSubmitting(false);
  };

  setPages = pages => this.setState({ pages });

  render() {
    const { page, pages } = this.state;

    const contextValue = {
      page,
      setPages: this.setPages,
    };

    return (
      <WizardContext.Provider value={contextValue}>
        {this.props.children({
          page,
          isFirstPage: page === 0,
          isLastPage: page === pages - 1,
          onPrevious: this.previous,
          onSubmit: this.handleSubmit,
        })}
      </WizardContext.Provider>
    );
  }
}
