import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ToastController extends Component {
  static propTypes = {
    autoDismiss: PropTypes.bool,
    autoDismissTimeout: PropTypes.number,
  };

  static defaultProps = {
    autoDismiss: true,
    autoDismissTimeout: 5000,
  };

  componentDidMount() {
    const { autoDismiss, autoDismissTimeout, onDismiss } = this.props;

    if (autoDismiss) {
      this.timeout = setTimeout(onDismiss, autoDismissTimeout);
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    const { Toast, ...rest } = this.props;

    return <Toast {...rest} />;
  }
}
