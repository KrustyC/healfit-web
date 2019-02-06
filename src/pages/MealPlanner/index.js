import React from 'react';
import PropTypes from 'prop-types';
import withAuth from 'helpers/withAuth';

const MealPlanner = ({ currentAccount }) => (
  <div>Ciao {currentAccount.firstName}</div>
);

MealPlanner.propTypes = {
  currentAccount: PropTypes.object.isRequired,
};

export default withAuth(MealPlanner);
