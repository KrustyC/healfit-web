import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { history } from 'app/router';
import P from 'uikit/elements/P';
import Button from 'uikit/blocks/Button';
import Alert from 'uikit/blocks/Alert';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Error = ({ reason }) => (
  <Box initialPose="open" pose="closed">
    <Alert type="error" style={{ margin: '0 20px' }}>
      {reason}
    </Alert>
    <P align="center">
      Ops! Looks like something went wrong! Please check the url or try to ask
      for a new token!
    </P>
    <Button size="large" onClick={() => history.push('/auth/forgot-password')}>
      Get New Token
    </Button>
  </Box>
);

Error.propTypes = {
  reason: PropTypes.string.isRequired,
};

export default Error;
