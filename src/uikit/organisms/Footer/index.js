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

const SectionDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.fontSize.small};

    a {
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

const Section = ({ title, children }) => (
  <SectionDiv>
    <Heading level="h4">{title}</Heading>
    {children}
  </SectionDiv>
);

export default () => (
  <FooterDiv>
    <Box>
      <Grid>
        <Section title="About">
          <Link to="/cookies">Cookies</Link>
          <Link to="/terms">Terms and Conition</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </Section>
        <Section title="About">
          <Link to="/cookies">Cookies</Link>
          <Link to="/terms">Terms and Conition</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </Section>
        <Section title="Help">
          <Link to="/why-healfit">Why Healfit</Link>
          <Link to="/contact">Contact Us</Link>
        </Section>{' '}
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
