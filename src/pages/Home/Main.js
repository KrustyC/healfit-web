import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import MainImage from 'assets/images/undrawn/chef.svg';
import Link from 'uikit/elements/Link';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';

const drop = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(-20px);
  }

  100% { 
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Main = styled.main``;

const Presentation = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 80%;
    margin: auto;
    min-height: 80vh;
    align-items: center;

    @media (max-width: ${theme.sizes.md}) {
      flex-direction: column;
    }
  `}
`;

const Introduction = styled.div`
  ${({ theme }) => css`
    flex: 1;

    @media (max-width: ${theme.sizes.md}) {
      text-align: center;
    }
  `}
`;

const IntroText = styled.div`
  ${({ theme }) => css`
    h1 {
      font-size: 44px;
      font-weight: 500;
      background: linear-gradient(to right, #494964, #6f6f89);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (max-width: ${theme.sizes.md}) {
        font-size: 30px;
      }
    }

    ${P} {
      margin-top: 5px;
      font-size: 22px;
      color: #585772;

      @media (max-width: ${theme.sizes.md}) {
        font-size: 18px;
      }
    }
  `}
`;

const Actions = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.padding.lg};

    a:first-of-type {
      margin-right: ${theme.margin.md};
    }

    @media (max-width: ${theme.sizes.md}) {
      padding-top: ${theme.padding.md};
    }
  `}
`;

const Cover = styled.div`
  ${({ theme }) => css`
    flex: 1;
    height: 60vh;

    svg {
      height: 100%;
      max-width: 100%;
      animation: ${drop} 0.75s ease;

      @media (max-width: ${theme.sizes.md}) {
        height: 70%;
      }
    }
  `}
`;

export default () => (
  <Main>
    <Presentation>
      <Introduction>
        <IntroText>
          <Heading level="h1" align="left" color="white">
            Meal Plan of the future
          </Heading>
          <P>
            Struggugling to keep up with your diet plan? Need a meal planner? We
            got you sorted
          </P>
        </IntroText>
        <Actions>
          <Link to="/auth/signin" size="large" component="button">
            Sign In
          </Link>
          <Link
            to="/auth/signup"
            color="primary"
            size="large"
            component="button"
          >
            Register
          </Link>
        </Actions>
      </Introduction>
      <Cover>
        <MainImage />
      </Cover>
    </Presentation>
  </Main>
);
