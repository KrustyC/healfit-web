import React from 'react';
import PropTypes from 'prop-types';
import withAuth from 'hoc/withAuth';

const MealPlanner = ({ account }) => <div>Ciao {account.firstName}</div>;

MealPlanner.propTypes = {
  account: PropTypes.object.isRequired,
};

export default withAuth(MealPlanner);
