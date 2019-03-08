import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import BookmarkIcon from 'assets/icons/bookmark.svg';
import { Hr } from './shared';

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: ${theme.margin.md} 0;
    padding: ${theme.padding.lg} 0;
    border-top: 2px solid ${theme.colors.border};
    @media (max-width: ${theme.sizes.md}) {
      padding: ${theme.padding.md} ${theme.padding.sm};
    }
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
    @media (max-width: ${theme.sizes.md}) {
      padding: ${theme.padding.xs};
    }
  `}
`;

const Bookmark = styled.div`
  ${({ theme, bookmarked }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.padding.xs};

    @media (max-width: ${theme.sizes.md}) {
      b {
        display: none;
      }
    }

    svg {
      height: 25px;
      width: 25px;
      path {
        stroke: ${theme.colors.primary};
        stroke-width: 20;
        /* stroke-linejoin: round; */
        stroke-linecap: butt;
      }
      fill: ${bookmarked ? theme.colors.primary : theme.colors.light};
    }
  `}
`;

const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Bottom = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const onBookmark = () => {
    // Call Api
    setBookmarked(!bookmarked);
  };

  return (
    <Container>
      <Row>
        <Circle>d</Circle>
        <Author>
          <b style={{ marginBottom: '1rem' }}>Created by</b>
          Davide Crestini
          <Hr css="margin-top: 2rem;" />
        </Author>
      </Row>
      <Bookmark bookmarked={bookmarked}>
        <b>Save this recipe for later</b>
        <BookmarkIcon onClick={onBookmark} />
      </Bookmark>
    </Container>
  );
};

export default Bottom;
