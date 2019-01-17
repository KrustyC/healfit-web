import React from 'react';
import styled, { css } from 'styled-components';

import Heading from 'uikit/elements/Heading';
import Link from 'uikit/elements/Link';
import P from 'uikit/elements/P';

const FooterDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    border-top: 1px solid ${theme.colors.border};
    padding: ${theme.padding.md} 0;
  `}
`;

const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.padding.md};
    width: ${theme.dimensions.containerWidth.large};
    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
    }
  `}
`;

const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: ${theme.spaces.regular};
    width: 100%;

    @media (max-width: ${theme.sizes.md}) {
      grid-template-columns: 1fr;
    }
  `}
`;

const Section = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.fontSize.small};

    > a {
      margin: ${theme.margin.sm} 0;
    }

    @media (max-width: ${theme.sizes.md}) {
      padding-top: ${theme.padding.md};
    }
  `}
`;

const Hr = styled.hr`
  ${({ theme }) => css`
    border: 0;
    border-top: 1px solid ${theme.colors.border};
    width: 100%;
    margin: ${theme.margin.md} 0;
  `}
`;

const Bottom = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    img {
      width: 30px;
      height: 30px;
      margin-right: ${theme.margin.md};
    }
  `}
`;

export default () => (
  <FooterDiv>
    <Box>
      <Grid>
        <Section>
          <Heading level="h4">About</Heading>
          <Link to="/legal/cookies">Cookies</Link>
          <Link to="/legal/terms-and-conditions">Terms and Conition</Link>
          <Link to="/legal/privacy-policy">Privacy Policy</Link>
        </Section>
        <Section>
          <Heading level="h4">Help</Heading>
          <Link to="/why-healfit">Why Healfit</Link>
          <Link to="/contact">Contact Us</Link>
        </Section>
        <Section>
          <Heading level="h4">More</Heading>
          <P size="small">
            This website uses icons made by{' '}
            <Link to="https://www.flaticon.com/authors/popcorns-arts">
              Icon Pond
            </Link>{' '}
            from <Link to="https://www.flaticon.com/">www.flaticon.com</Link> is
            licensed by{' '}
            <Link to="http://creativecommons.org/licenses/by/3.0/">
              CC 3.0 BY
            </Link>
          </P>
        </Section>
      </Grid>
      <Hr />
      <Bottom>
        {/* eslint-disable-next-line */}
        <img src={require('assets/icons/logo.svg')} />
        <P size="small">© 2019 Healfit. All Rights Reserved.</P>
      </Bottom>
    </Box>
  </FooterDiv>
);
