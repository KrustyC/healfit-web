import { useEffect, useContext } from 'react';
import { RootContext } from 'app/contexts/RootContext';

const Logout = () => {
  const rootContext = useContext(RootContext);

  useEffect(() => {
    rootContext.onLogout();
  }, []);

  return null;
};

export default Logout;
