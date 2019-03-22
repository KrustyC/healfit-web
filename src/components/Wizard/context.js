import { createContext } from 'react';

const WizardContext = createContext({
  activePage: null,
  setPages: null,
});

export default WizardContext;
