import React, { useContext } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Redirect } from 'react-router-dom';
import { RootContext } from 'app/contexts/RootContext';
import Logo from 'assets/icons/logo.svg';
import Link from 'uikit/elements/Link';
import Button from 'uikit/blocks/Button';
import MainImage from 'assets/images/undrawn/chef.svg';

import Footer from 'uikit/organisms//footers/HomeFooter';
import Hero from './Hero';
import Features from './Features';
import MealPlan from './MealPlan';
// import Cta from './Cta';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Header = styled.header`
  display: flex;
  width: 80%;
  margin: auto;
  height: 10vh;
  align-items: center;
`;

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

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  flex: 1;
  svg {
    height: 50px;
    width: 50px;
  }
`;

const LogoTitle = styled.h4`
  font-weight: 400;
  margin-left: ${({ theme }) => theme.margin.sm};
`;

const Nav = styled.div`
  flex: 2;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const NavLink = styled.li`
  /* font-size: 18px; */
`;

const End = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
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

    p {
      margin-top: 5px;
      font-size: 22px;
      color: #585772;

      @media (max-width: ${theme.sizes.md}) {
        font-size: 18px;
      }
    }
  `}
`;

const Cta = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.padding.lg};

    button:first-of-type {
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
      filter: drop-shadow(0px 1px 2px black);
      animation: ${drop} 1.5s ease;

      @media (max-width: ${theme.sizes.md}) {
        height: 70%;
      }
    }
  `}
`;

const Home = () => {
  const { amILoggedIn } = useContext(RootContext);

  if (amILoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Header>
        <LogoContainer>
          <Logo />
          <LogoTitle>Healfit</LogoTitle>
        </LogoContainer>
        <Nav>
          <NavLinks>
            <NavLink>
              <Link to="/">Specs</Link>
            </NavLink>
            <NavLink>
              <Link to="/">Products</Link>
            </NavLink>
            <NavLink>
              <Link to="/">ContLinkct</Link>
            </NavLink>
          </NavLinks>
        </Nav>
        <End />
      </Header>
      <Main>
        <Presentation>
          <Introduction>
            <IntroText>
              <h1>Lapop for the future</h1>
              <p>
                The new 14 inch bezeless display offering a 4k display woth
                touch screen
              </p>
            </IntroText>
            <Cta>
              <Button>Sign In</Button>
              <Button color="primary">Register</Button>
            </Cta>
          </Introduction>
          <Cover>
            <MainImage />
          </Cover>
        </Presentation>
      </Main>
      {/* <Hero />
      <Features />
      <Cta />
      <MealPlan />
      <Footer /> */}
    </>
  );
};

export default Home;
