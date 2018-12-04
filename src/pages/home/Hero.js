import React from 'react';
import styled from 'styled-components';

import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';
import Layout from './components/Layout';

const Div = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  padding: 2rem;
`;

const Descritpion = styled(P)`
  color: white;
  max-width: 600px;
`;

const Img = styled.img`
  max-height: 300px;
  margin-bottom: ${({ theme }) => theme.spaces.small};
`;

const Header = () => (
  <Layout size="fullscreen" coloured height="70vh">
    <Div>
      <Heading level="title" style={{ color: 'white' }}>
        Keep it Fit
      </Heading>
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
    <Div center>
      {/* eslint-disable-next-line */}
      <Img src={require('assets/images/undrawn/healthy-habit.svg')} />
    </Div>
  </Layout>
);

export default Header;
