import React from 'react';
import styled, { css } from 'styled-components';
import posed from 'react-pose';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';
import Egg from 'assets/icons/egg.svg';

const Container = styled(
  posed.div({
    closed: {
      y: 0,
      opacity: 1,
      delay: 300,
      transition: {
        y: { type: 'spring', stiffness: 300, damping: 500 },
        default: { duration: 300 },
      },
    },
    open: {
      y: 50,
      opacity: 0,
      transition: { duration: 150 },
    },
  })
)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled(Egg)`
  ${({ theme }) => css`
    height: 200px;
    width: 200px;
    margin-bottom: ${theme.margin.md};
  `}
`;

export default () => (
  <Container initialPose="open" pose="closed">
    <Image />
    <Heading level="h2">Cracking!</Heading>
    <P align="center">
      Shortly you{"'"}ll receive an email to confirm you email address!{' '}
    </P>
  </Container>
);
