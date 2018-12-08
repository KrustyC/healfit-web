import React from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-styled-carousel';

import Container from 'uikit/blocks/Container';
import Layout from './components/Layout';

/* eslint-disable global-require */
const testimonials = [
  {
    name: 'Davide Crestini',
    job: 'Software Developer',
    quote: `I've been looking for a while to an app like Keep It Fit one but I
    couldn't find any. Now that I found this it makes my life much easier,
    as I can finally plan my meals througut the week nad keep track of wether
    I'm following it or not.`,
    picture: require('assets/images/people/person1.jpeg'),
  },
  {
    name: 'Beatrice Cox',
    job: 'Graphic Designer',
    quote: `I've been looking for a while to an app like Keep It Fit one but I
    couldn't find any. Now that I found this it makes my life much easier,
    as I can finally plan my meals througut the week nad keep track of wether
    I'm following it or not.`,
    picture: require('assets/images/people/person3.jpeg'),
  },
  {
    name: 'Alessandro Frullani',
    job: 'Mechanical Engineer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sem pretium, iaculis ipsum vitae, rhoncus nulla. Integer euismod sodales dui pellentesque bibendum. Donec id imperdiet lorem. ',
    picture: require('assets/images/people/person2.jpeg'),
  },
  {
    name: 'Luca Moretti',
    job: 'Financial Manager',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sem pretium, iaculis ipsum vitae, rhoncus nulla. Integer euismod sodales dui pellentesque bibendum. Donec id imperdiet lorem. ',
    picture: require('assets/images/people/person4.jpeg'),
  },
];
/* eslint-enable global-require */

const TestimonialCard = styled.div`
  ${({ theme }) => css`
    margin: 0px 10px;
    background: white;
    padding: ${theme.padding.md};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

const CardTop = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-column-gap: 20px;
    margin-bottom: ${theme.margin.sm};
  `}
`;

const UserInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

const Hr = styled.hr`
  ${({ theme }) => css`
    border-top: 1px;
    border-color: ${theme.colors.border};
    margin: 5px 0px 10px 0px;
    width: 100%;
  `}
`;

const Name = styled.span`
  font-weight: bold;
  width: auto;
  text-align: right;
`;

const Job = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.small};
    font-style: italic;
    text-align: right;
  `}
`;

const Quote = styled.div`
  display: flex;
  font-style: italic;
`;

const TestimonialImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50px;
  border: 2px solid green;
  object-fit: cover;
`;

const Testimonials = () => (
  <Layout coloured size="fullscreen">
    <Container size="default">
      <Slider cardsToShow={1} showArrows={false}>
        {testimonials.map(({ name, job, quote, picture }) => (
          <TestimonialCard key={name}>
            <CardTop>
              <TestimonialImg src={picture} />
              <Quote>
                <q>{quote}</q>
              </Quote>
            </CardTop>
            <Hr />
            <UserInfo>
              <Name>{name}</Name>
              <Job>{job}</Job>
            </UserInfo>
          </TestimonialCard>
        ))}
      </Slider>
    </Container>
  </Layout>
);

export default Testimonials;
