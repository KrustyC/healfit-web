import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { DrawerContext } from 'app/contexts/DrawerContext';

import { withRouter } from 'react-router-dom';

const Drawer = React.memo(({ children }) => {
  const { onCloseMenu } = useContext(DrawerContext);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (drawerRef && !drawerRef.current.contains(e.target)) {
        onCloseMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onCloseMenu]);

  return <div ref={drawerRef}>{children}</div>;
});

Drawer.propTypes = {
  children: PropTypes.any.isRequired,
};

export default withRouter(Drawer);
