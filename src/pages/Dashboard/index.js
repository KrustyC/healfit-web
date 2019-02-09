import React from 'react';
import PropTypes from 'prop-types';
import withAuth from 'hoc/withAuth';
import { compose } from 'react-apollo';

import { withToastManager } from 'uikit/blocks/Toast';

const Dashboard = ({ account, toastManager }) => (
  <>
    <div>Welcome to your dashboard {account.firstName}!</div>
    <button
      type="button"
      onClick={() =>
        toastManager.add('Done', {
          appearance: 'error',
        })
      }
    >
      Ciao
    </button>
  </>
);

Dashboard.propTypes = {
  account: PropTypes.object.isRequired,
};

export default compose(
  withAuth,
  withToastManager
)(Dashboard);
