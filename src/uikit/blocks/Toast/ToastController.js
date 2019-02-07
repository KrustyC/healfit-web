import React, { Component } from 'react';

export default class ToastController extends Component {
  static defaultProps = {
    autoDismiss: false,
  };

  state = {
    autoDismissTimeout: this.props.autoDismissTimeout,
  };

  static getDerivedStateFromProps({ autoDismiss, autoDismissTimeout }) {
    if (!autoDismiss) {
      return null;
    }

    const timeout =
      typeof autoDismiss === 'number' ? autoDismiss : autoDismissTimeout;

    return { autoDismissTimeout: timeout };
  }

  componentDidMount() {
    const { autoDismiss, onDismiss } = this.props;
    const { autoDismissTimeout } = this.state;

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
    const { Toast, ...props } = this.props;
    const { autoDismissTimeout } = this.state;

    return <Toast autoDismissTimeout={autoDismissTimeout} {...props} />;
  }
}
