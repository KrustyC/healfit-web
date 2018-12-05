import React from 'react';
import styled, { css } from 'styled-components';

import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';
import Layout from './components/Layout';

/* eslint-disable global-require */
const features = [
  {
    img: require('assets/images/undrawn/healthy-habit.svg'),
    title: 'Create your recipes',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales sodales. Aenean ut ante tempus, feugiat risus et, hendrerit leo. Pellentesque imperdiet ipsum id urna rhoncus elementum sit amet quis nulla.',
  },
  {
    img: require('assets/images/undrawn/healthy-habit.svg'),
    title: 'Create your meal plan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales sodales. Aenean ut ante tempus, feugiat risus et, hendrerit leo. Pellentesque imperdiet ipsum id urna rhoncus elementum sit amet quis nulla.',
  },
  {
    img: require('assets/images/undrawn/healthy-habit.svg'),
    title: 'Track your progress',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies sodales sodales. Aenean ut ante tempus, feugiat risus et, hendrerit leo. Pellentesque imperdiet ipsum id urna rhoncus elementum sit amet quis nulla.',
  },
];
/* eslint-enable global-require */

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
`;

const Box = styled.div`
  ${({ theme }) => css`
    padding: ${theme.padding.md};
  `}
`;

const ImgContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.margin.sm};
  `}
`;

const Image = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 3px solid green;
`;

const Features = () => (
  <Layout size="fullscreen">
    <Grid>
      {features.map(({ img, title, content }) => (
        <Box key={title}>
          <ImgContainer>
            <Image src={img} />
          </ImgContainer>
          <Heading level="h3" align="center">
            {title}
          </Heading>
          <P>{content}</P>
        </Box>
      ))}
    </Grid>
  </Layout>
);

export default Features;
