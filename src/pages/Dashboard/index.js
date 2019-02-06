import React from 'react';
import PropTypes from 'prop-types';
import withAuth from 'helpers/withAuth';

const Dashboard = ({ authAccount }) => (
  <div>Welcome to your dashboard {authAccount.firstName}!</div>
);

Dashboard.propTypes = {
  authAccount: PropTypes.object.isRequired,
};

export default withAuth(Dashboard);
