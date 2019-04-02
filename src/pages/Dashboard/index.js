import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { RootContext } from 'app/contexts/RootContext';
import { Helmet } from 'react-helmet';
import { UikButton } from '@duik';
import { withToastManager } from 'uikit/blocks/Toast';
import Navbar from 'components/navbars/LoggedNavbar';
import Drawer from 'components/drawers/LoggedDrawer';

const Dashboard = ({ toastManager }) => {
  const rootContext = useContext(RootContext);
  const { authUser } = rootContext;

  return (
    <>
      <Helmet>
        <title>Dashboard | Healfit</title>
        <meta name="description" content="Your Healfit dashboard" />
      </Helmet>
      <Navbar />
      <Drawer />
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
