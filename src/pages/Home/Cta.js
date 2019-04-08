import React from 'react';
import styled from 'styled-components';
import history from 'app/router/history';
import Button from 'uikit/blocks/Button';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #fff;
  padding: ${({ theme: { padding } }) => padding.md};
  min-height: 60vh;
  background: ${({ theme: { colors } }) => colors.primary};
`;

const Cta = () => (
  <Container>
    <Heading level="h1" align="center" color="white">
      Try Healfit, it{"'"}s easy!
    </Heading>
    <P align="center" color="white">
      And it{"'"}s free as well, how can you not try it?
    </P>

    <Button size="large" onClick={() => history.push('/auth/signup')}>
      GET STARTED
    </Button>
  </Container>
);

export default Cta;
