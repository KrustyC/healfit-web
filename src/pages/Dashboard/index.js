import React from 'react';
import PropTypes from 'prop-types';
import withAuth from 'hoc/withAuth';
import { compose } from 'react-apollo';

import { withToastManager } from 'uikit/blocks/Toast';
import Navbar from 'uikit/organisms/navbars/DefaultNavbar';

const Dashboard = ({ account, toastManager }) => (
  <>
    <Navbar />
    <div>Welcome to your dashboard {account.firstName}!</div>
    <button
      type="button"
      onClick={() =>
        toastManager.add('Done', {
          appearance: 'error',
        })
      }
    >
      hello mate!
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
