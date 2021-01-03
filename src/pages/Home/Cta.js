import React from 'react';
import styled from 'styled-components';

import Heading from 'uikit/elements/Heading';
import history from 'app/router/history';
import Button from 'uikit/blocks/Button';
import P from 'uikit/elements/P';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 600px;
`;

const Skrew = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  overflow: hidden;
  background: ${({ theme: { colors } }) => colors.primary};
  transform: skew(0deg, -2deg);
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
  height: 100%;
  width: 100%;
`;

const Cta = () => (
  <Container>
    <Skrew />
    <Div>
      <Heading level="h1" align="center" color="white">
        Are you looking for new recipes?
      </Heading>
      <P align="center" color="white">
        We have hundreds of healthy and tasty recipes! And if you like add your
        own one, you can do that as well!
      </P>

      <Button size="large" onClick={() => history.push('/recipes')}>
        View Recipes
      </Button>
    </Div>
  </Container>
);

export default Cta;
