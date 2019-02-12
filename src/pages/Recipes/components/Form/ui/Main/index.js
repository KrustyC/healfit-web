import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Wizard from 'components/Wizard';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Preview from './Preview';

const MainContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    grid-area: main;
    padding: 0 ${theme.padding.md};
    width: ${theme.dimensions.containerWidth.large};
    width: 50vw;

    h1 {
      padding: ${theme.padding.md} 0;
    }

    @media (max-width: ${theme.sizes.md}) {
      width: 100%;
    }
  `}
`;

const Main = ({ values, setFieldTouched, setFieldValue }) => (
  <MainContainer>
    <Wizard.Pages>
      <Step1
        values={values}
        setFieldTouched={setFieldTouched}
        setFieldValue={setFieldValue}
      />
      <Step2
        values={values}
        setFieldTouched={setFieldTouched}
        setFieldValue={setFieldValue}
      />
      <Step3
        values={values}
        setFieldTouched={setFieldTouched}
        setFieldValue={setFieldValue}
      />
      <Preview value={values} />
    </Wizard.Pages>
  </MainContainer>
);

Main.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default Main;
