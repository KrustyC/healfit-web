import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

export const Table = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
export const Body = styled.div`
  flex-direction: column;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    background: ${theme.colors.light};
    ${({ sticky }) =>
      sticky &&
      css`
        position: sticky;
        top: 0;
      `};
  `}
`;

export const Tr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 45px;

  :nth-child(even) {
    background: #efefef;
  }
`;

const Column = styled.div`
  display: flex;
  flex-basis: 0;
  flex-grow: ${({ flex }) => flex};
  flex-direction: ${prop('direction', 'row')};
  justify-content: ${prop('justify', 'center')};
  align-items: ${prop('align', 'center')};
  padding: 3px 5px;
`;

export const Th = styled(Column)`
  flex-basis: 0;
  padding: 5px;
  border-bottom: 2px solid #efefef;
  font-weight: bold;

  ${({ theme }) => css`
    input {
      width: 100%;
      font-weight: normal;
      padding: 1px 3px;
      border-radius: 3px;
      font-size: 12px;
      border 2px solid ${theme.colors.border};
      padding: 5px 4px;
      height: 32px;
      transition: all 0.3s ease-in-out;
      :focus {
        box-shadow: 0px 0px 5px #53B7F3;
        border-color: #53B7F3;
      }
    }
  `}
`;

export const SubHeaderContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: ${theme.margin.sm};
  `}
`;

export const SubHeader = styled.div`
  display: flex;
  flex-basis: 0;
  flex-grow: ${({ flex }) => flex};
  flex-direction: ${prop('direction', 'row')};
  ${({ theme }) => css`
    font-size: ${theme.fontSize.small};
  `}
`;

export const Td = styled(Column)`
  padding: 3px 5px;
  display: flex;
`;

Th.Row = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1px;

  i {
    font-size: 14px;
  }
`;

Th.Icon = styled.div``;
