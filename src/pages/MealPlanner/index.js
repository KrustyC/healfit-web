import React from 'react';
import PropTypes from 'prop-types';
import withAuth from 'helpers/withAuth';

const MealPlanner = ({ currentUser }) => (
  <div>Ciao {currentUser.firstName}</div>
);

MealPlanner.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default withAuth(MealPlanner);
