import React from 'react';
import posed from 'react-pose';
import styled, { css } from 'styled-components';
import P from 'uikit/elements/P';
import history from 'app/router/history';
import Button from 'uikit/blocks/Button';
import Svg from 'assets/icons/paper-plane.svg';

const Box = styled(
  posed.div({
    closed: {
      y: '0px',
      transition: {
        y: { type: 'spring', stiffness: 80, damping: 15 },
      },
    },
    open: {
      y: '100px',
    },
  })
)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled(Svg)`
  ${({ theme }) => css`
    height: 200px;
    width: 200px;
    margin-bottom: ${theme.margin.md};
  `}
`;

export default () => (
  <Box initialPose="open" pose="closed">
    <Image />
    <P align="center">Your password has been succesfully restored!</P>
    <Button size="large" onClick={() => history.push('/auth/signin')}>
      Back To Login
    </Button>
  </Box>
);
