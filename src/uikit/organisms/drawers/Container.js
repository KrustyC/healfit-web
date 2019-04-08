import React, { useContext, useEffect, useRef } from 'react';
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
  }, []);

  return <div ref={drawerRef}>{children}</div>;
});

export default withRouter(Drawer);
