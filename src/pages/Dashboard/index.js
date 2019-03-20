import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { RootContext } from 'app/contexts/RootContext';

import { UikButton } from '@duik';
import { withToastManager } from 'uikit/blocks/Toast';
import Navbar from 'components/navbars/DefaultNavbar';

const Dashboard = ({ toastManager }) => {
  const rootContext = useContext(RootContext);
  const { authUser } = rootContext;

  return (
    <>
      <Navbar />
      <div>Welcome to your dashboard {authUser.firstName}!</div>

      <UikButton
        onClick={() =>
          toastManager.add('Done', {
            appearance: 'error',
          })
        }
      >
        Hello
      </UikButton>
    </>
  );
};

Dashboard.propTypes = {
  toastManager: PropTypes.object.isRequired,
};

export default compose(withToastManager)(Dashboard);
