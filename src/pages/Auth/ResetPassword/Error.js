import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import P from 'uikit/elements/P';
import Link from 'uikit/elements/Link';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Error = ({ reason }) => (
  <Box initialPose="open" pose="closed">
    {/* eslint-disable-next-line */}
    <Alert type="error">{reason}</Alert>
    <P align="center">
      Your password has been succesfully reset! Now you are ready to login and
      enjoy Healfit! @TODO BETTER COPY
    </P>
    <Link to="/auth/signin" component="button" color="primary">
      Back To Home
    </Link>
  </Box>
);

Error.propTypes = {
  reason: PropTypes.string.isRequired,
};

export default Error;
