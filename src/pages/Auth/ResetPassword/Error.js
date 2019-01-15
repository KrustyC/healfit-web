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
`;

const Error = ({ reason }) => (
  <Box initialPose="open" pose="closed">
    <Alert type="error">{reason}</Alert>
    <P align="center">
      Your password has been succesfully reset! Now you are ready to login and
      enjoy Healfit! @TODO BETTER COPY
    </P>
    <Button size="large" onClick={() => history.push('/auth/signin')}>
      Back To Login
    </Button>
  </Box>
);

Error.propTypes = {
  reason: PropTypes.string.isRequired,
};

export default Error;
