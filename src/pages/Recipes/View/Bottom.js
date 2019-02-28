import React from 'react';
import styled, { css } from 'styled-components';
import { Hr } from './shared';

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: ${theme.margin.lg} 0;
    padding: ${theme.padding.md} 0;
    border-top: 2px solid ${theme.colors.border};
  `}
`;

const Circle = styled.div`
  ${({ theme }) => css`
    text-transform: uppercase;
    background: ${theme.colors.primary};
    color: ${theme.colors.light};
    font-size: ${theme.fontSize.large};
    font-weight: bold;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.margin.sm};
  `}
`;

const Author = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.padding.xs};
  `}
`;

const Bookmark = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.padding.xs};
  `}
`;

const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Bottom = () => (
  <Container>
    <Row>
      <Circle>d</Circle>
      <Author>
        <b>Created by</b>
        Davide Crestini
        <Hr />
      </Author>
    </Row>
    <Bookmark>
      <b>Save this recipe for later</b>
    </Bookmark>
  </Container>
);

export default Bottom;
