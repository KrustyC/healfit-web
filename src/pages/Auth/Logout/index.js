import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import withAuth from 'helpers/withAuth';

class Logout extends Component {
  static propTypes = {
    clearUser: PropTypes.func.isRequired,
  };

  state = {
    redirect: false,
  };

  componentDidMount() {
    this.props.clearUser().then(() => this.setState({ redirect: true }));
  }

  render() {
    const { redirect } = this.state;
    return redirect ? <Redirect to="" /> : null;
  }
}

export default withAuth(Logout);
