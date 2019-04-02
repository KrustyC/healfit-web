import React from 'react';
import styled, { css } from 'styled-components';

import LoginImg from 'assets/images/landing.jpg';
import P from 'uikit/elements/P';

const Container = styled.div`
  ${({ theme, url }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    padding: ${theme.padding.lg} 0;
    background-image: url(${url});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `}
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 50px;
    height: 50px;
  }
`;

const Title = styled.span`
  font-size: 4rem;
  color: rgba(32, 48, 60, 1);
  letter-spacing: 0.03rem;
`;

const Descritpion = styled(P)`
  font-size: 1.6rem;
  color: rgba(32, 48, 60, 1);
`;

const Header = () => (
  <Container url={LoginImg}>
    <TitleRow>
      <Title>Healfit</Title>
    </TitleRow>
    <Descritpion>
      Your best shape is just a few steps away. It{"'"}s easy, with Healfit!
    </Descritpion>
  </Container>
);

export default Header;
