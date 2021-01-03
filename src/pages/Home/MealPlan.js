import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';

import Schedule from 'assets/images/undrawn/schedule.svg';

const drop = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(-80px);
  }

  100% { 
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Container = styled.main``;

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

const Cover = styled.div`
  ${({ theme }) => css`
    flex: 1;
    height: 60vh;

    svg {
      height: 100%;
      max-width: 100%;
      filter: drop-shadow(0px 1px 2px black);
      animation: ${drop} 1.5s ease;

      @media (max-width: ${theme.sizes.md}) {
        height: 70%;
      }
    }
  `}
`;

const MealPlan = () => (
  <Container>
    <Presentation>
      <Introduction>
        <IntroText>
          <Heading level="h1" align="left" color="white">
            Stregthen your personal health with our Meal Planner
          </Heading>
          <P>
            Join today and start using the Meal Planner to decide ahead what you
            are going to eat during the rest of the week! It{"'"}s easy, and
            free, forever!
          </P>
        </IntroText>
      </Introduction>
      <Cover>
        <Schedule />
      </Cover>
    </Presentation>
  </Container>
);

export default MealPlan;
