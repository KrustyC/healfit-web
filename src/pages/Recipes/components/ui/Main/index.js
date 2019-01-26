import React from 'react';
import styled from 'styled-components';
import Wizard from '../../Wizard';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Preview from './Preview';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  grid-area: main;
`;

export default () => (
  <MainContainer>
    <Wizard.Pages>
      <Step1 />
      <Step2 />
      <Step3 />
      <Preview />
    </Wizard.Pages>
  </MainContainer>
);
