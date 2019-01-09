import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAuth } from 'app/apollo/auth';

class Logout extends Component {
  static propTypes = {
    clearUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.clearUser();
  }

  render() {
    return <h1>Hope to see you back soon :)!</h1>;
  }
}

export default withAuth(Logout);
