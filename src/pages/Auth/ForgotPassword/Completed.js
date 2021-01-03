import React from 'react';
import posed from 'react-pose';
import styled, { css } from 'styled-components';
import P from 'uikit/elements/P';
import Button from 'uikit/blocks/Button';
import history from 'app/router/history';
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
    border-radius: 50%;
    margin-bottom: ${theme.margin.md};

    @media (max-width: ${theme.sizes.md}) {
      height: 150px;
      width: 150px;
    }
  `}
`;

export default () => (
  <Box initialPose="open" pose="closed">
    <Image />
    <P align="center">
      We{"'"}ve sent an email to the provided address. Click the link in the
      email to reset your password. If you don{"'"}t see the email, check other
      places it might be, like your junk, spam, social or other folders.
    </P>
    <Button size="large" onClick={() => history.push('/auth/signin')}>
      Back To Login
    </Button>
  </Box>
);
