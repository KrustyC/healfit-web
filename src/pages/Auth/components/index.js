import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'uikit/elements/Link';
import P from 'uikit/elements/P';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

export const ImgSide = styled.div`
  ${({ url }) => css`
    height: 100vh;
    flex: 7;
    ${'' /* visibility: hidden; */}
    background-image: url(${url});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `}
`;

export const FormSide = styled.div`
  height: 100vh;
  flex: 4;
  /* flex: 1; //4 */
  /* flex: 4; */
  display: grid;
  grid-template-rows: 25% 65% 10%;
`;

export const Frame = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 25% auto;
`;

export const FormContainer = styled.div`
  ${({ theme: { padding }, show }) => css`
    flex-direction: column;
    padding: ${padding.sm} ${padding.sm}; /*  Use rem from theme*/
    display: ${show ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
  `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const BottomDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${theme.padding.md};
  `}
`;

export const Bottom = () => (
  <BottomDiv>
    <P size="small" color="muted" align="center">
      &copy; 2019 Healfit. All Rights Reserved. <br />
      <Link to="/cookie">Cookie Preferences</Link>,{' '}
      <Link to="/privacy-policy">Privacy</Link>, and{' '}
      <Link to="/terms-and-conditions">Terms {'&'} Conditions</Link>.
    </P>
  </BottomDiv>
);
