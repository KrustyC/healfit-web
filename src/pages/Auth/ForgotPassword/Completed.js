import React from 'react';
import posed from 'react-pose';
import styled, { css } from 'styled-components';
import P from 'uikit/elements/P';
import Link from 'uikit/elements/Link';

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

const Image = styled.img`
  ${({ theme }) => css`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin-bottom: ${theme.margin.md};
  `}
`;

export default () => (
  <Box initialPose="open" pose="closed">
    {/* eslint-disable-next-line */}
    <Image src={require('assets/icons/paper-plane.svg')} />
    <P align="center">
      We{"'"}ve sent an email to the provided address. Click the link in the
      email to reset your password. If you don{"'"}t see the email, check other
      places it might be, like your junk, spam, social or other folders.
    </P>
    <Link to="/auth/signin" component="button" color="primary">
      Back To Login
    </Link>
  </Box>
);
