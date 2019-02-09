import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import withAuth from 'hoc/withAuth';

class Logout extends Component {
  static propTypes = {
    clearAccount: PropTypes.func.isRequired,
  };

  state = {
    redirect: false,
  };

  componentDidMount() {
    this.props.clearAccount().then(() => this.setState({ redirect: true }));
  }

  render() {
    const { redirect } = this.state;
    return redirect ? <Redirect to="" /> : null;
  }
}

export default withAuth(Logout);
