import React from 'react';
import styled, { css } from 'styled-components';

import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';
import Layout from './components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

const Div = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  padding: 2rem;

  ${({ theme, hideOnSmallScreen }) =>
    hideOnSmallScreen &&
    css`
      @media (max-width: ${theme.sizes.md}) {
        display: none;
      }
    `}
`;

const Descritpion = styled(P)`
  ${({ theme }) => css`
    color: white;
    max-width: 600px;

    @media (max-width: ${theme.sizes.md}) {
      display: none;
    }
  `}
`;

const Img = styled.img`
  ${({ theme }) => css`
    max-height: 300px;
    margin-bottom: ${theme.spaces.small};
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

const Header = () => (
  <Layout coloured size="fullscreen" height="80vh" direction="column">
    <Container>
      <Div center hideOnSmallScreen>
        {/* eslint-disable-next-line */}
        <Img src={require('assets/images/undrawn/healthy-habit.svg')} />
      </Div>
      <Div>
        <TitleRow>
          {/* eslint-disable-next-line */}
          <img src={require('assets/icons/logo.svg')} />
          <Heading level="title" style={{ color: 'white' }}>
            Healfit
          </Heading>
        </TitleRow>
        <Heading
          level="h4"
          align="left"
          style={{ fontStyle: 'italic', color: 'white' }}
        >
          Keep yourself fit, by tracking your food and your progress
        </Heading>
        <Descritpion>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less.
        </Descritpion>
      </Div>
    </Container>
  </Layout>
);

export default Header;
