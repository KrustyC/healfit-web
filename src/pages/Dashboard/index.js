import React from 'react';
import PropTypes from 'prop-types';
import { withAuth } from 'app/apollo/auth';

const Dashboard = ({ authUser }) => (
  <div>Welcome to your dashboard {authUser.firstName}</div>
);

Dashboard.propTypes = {
  authUser: PropTypes.object.isRequired,
};

export default withAuth(Dashboard);
