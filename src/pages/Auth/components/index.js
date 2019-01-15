import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'uikit/elements/Link';
import P from 'uikit/elements/P';
import Form from 'uikit/blocks/Form';
import Alert from 'uikit/blocks/Alert';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

export const ImgSide = styled.div`
  ${({ theme, url }) => css`
    height: 100vh;
    flex: 7;
    background-image: url(${url});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: ${theme.sizes.md}) {
      display: none;
    }
  `}
`;

export const FormSide = styled.div`
  height: 100vh;
  min-height: min-content;
  flex: 4;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 3;
    min-height: min-content;

    @media (max-width: ${theme.sizes.sm}) {
      padding: ${theme.padding.md} 0;
    }
  `}
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 10;
  min-height: min-content;
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${theme.padding.sm} ${theme.padding.sm};
    display: flex;
    justify-content: center;
    align-items: center;

    ${Form} {
      width: 65%;
    }

    @media (max-width: ${theme.sizes.md}) {
      ${Form} {
        width: 85%;
      }
    }

    @media (max-width: ${theme.sizes.sm}) {
      ${Form} {
        width: 95%;
      }
    }
  `}
`;

const BottomDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${theme.padding.md};
    flex: 1;
    min-height: min-content;
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

export const StyledAlert = styled(Alert)`
  ${({ theme }) => css`
    width: 65%;
    margin-top: -${theme.margin.md};

    @media (max-width: ${theme.sizes.md}) {
      width: 85%;
    }

    @media (max-width: ${theme.sizes.md}) {
      margin-top: -${theme.margin.xs};
      width: 95%;
    }
  `}
`;
