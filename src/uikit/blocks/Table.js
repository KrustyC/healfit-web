import React from 'react';
import PropTypes from 'prop-types';
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

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 20px;
  font-weight: bold;
  color: #bfbfbf;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
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
  flex-direction: column;
  flex-basis: 0;
  flex-grow: ${({ flex }) => flex};
  justify-content: center;
  align-items: center;
  padding: 3px 5px;
`;

export const Th = styled(Column)`
  flex-basis: 0;
  padding: 5px;
  border-bottom: 2px solid #efefef;
  font-weight: bold;
  justify-content: flex-start;

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

export const Td = styled(Column)`
  padding: 3px 5px;
  display: flex;
  flex-direction: ${prop('direction', 'row')};
  justify-content: ${prop('justify', 'center')};
  align-items: ${prop('align', 'center')};
  text-align: center;
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
