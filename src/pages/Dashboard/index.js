import React from 'react';
import PropTypes from 'prop-types';
import { withAuth } from 'app/apollo/auth';

const Dashboard = ({ currentUser }) => (
  console.log('dashboard'),
  <div>Welcome to your dashboard {currentUser.firstName}</div>
);

Dashboard.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default withAuth(Dashboard);
