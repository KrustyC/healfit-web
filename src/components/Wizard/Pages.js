import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardContext from './context';

export default class Pages extends Component {
  static contextType = WizardContext;

  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  componentDidMount() {
    const pages = React.Children.count(this.props.children);
    this.context.setPages(pages);
  }

  render() {
    const { children } = this.props;
    const { page } = this.context;
    const activePage = React.Children.toArray(children)[page];
    return React.cloneElement(activePage);
  }
}
