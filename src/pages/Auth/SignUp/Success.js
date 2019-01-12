import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  ${({ theme }) => css`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.border};
    margin-bottom: ${theme.margin.md};
  `}
`;

export default () => (
  <Container>
    {/* eslint-disable-next-line global-require */}
    <Image src={require('assets/icons/egg.svg')} />
    <Heading level="h2">Cracking!</Heading>
    <P>Shortly you{"'"}ll receive an email to confirm you email address! </P>
  </Container>
);
