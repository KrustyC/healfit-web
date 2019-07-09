import styled, { css } from 'styled-components';
import Link from 'uikit/elements/Link';

export const Day = styled.div`
  ${({ theme }) => css`
    display: flex;
    span:first-of-type {
      margin-right: ${theme.margin.sm};
      font-weight: bold;
    }
  `}
`;

export const Times = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.margin.sm} 0;
  `}
`;

export const TimeContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    &:first-of-type {
      margin-right: ${theme.margin.sm};
    }

    span {
      display: block;
      margin-bottom: ${theme.margin.xs} !important;
      font-weight: bold;
    }
  `}
`;

export const RecipesGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${theme.margin.sm};
    grid-row-gap: ${theme.margin.sm};
  `}
`;

export const Recipe = styled.div`
  display: flex;
`;

export const RecipePicture = styled.img`
  height: 70px;
  width: 70px;
`;

export const RecipeInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: ${theme.padding.xs};
    padding-top: ${theme.padding.xs};
    padding-bottom: ${theme.padding.xs};
  `}
`;

export const RecipeAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const RecipeTitle = styled(Link)`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${theme.fontSize.small};
  `}
`;

export const Calories = styled.div`
  ${({ theme }) => css`
    span:first-of-type {
      font-weight: bold;
    }
    span:nth-of-type(2) {
      font-size: ${theme.fontSize.xs};
    }
  `}
`;
