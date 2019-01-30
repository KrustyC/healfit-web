import styled, { css } from 'styled-components';
import ContentEditable from 'react-contenteditable';
import { switchProp } from 'styled-tools';

const scrollbar = css`
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    border-top-right-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-top-right-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: #7ccafc;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #7ccafc;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  background: #fff;
  width: 100%;

  ${({ width }) =>
    width &&
    css`
      min-width: ${width};
      max-width: ${width};
    `}

  ${switchProp('size', {
    small: css`
      height: 30px;
      max-height: 30px;
    `,
    default: css``,
  })}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    border-radius: 3px;
    border: 2px solid ${theme.colors.border};
    transition: all 0.3s ease-in-out;

    ${switchProp('size', {
      small: css`
        min-height: 32px;
        max-height: 32px;
        padding: 1px 2px;
      `,
      default: css`
        padding: 0 ${theme.padding.sm};
        margin-bottom: 2px;
        max-height: 50px;
        min-height: 50px;
      `,
    })}

    ${({ focus }) =>
      focus &&
      css`
        outline: 0;
        border: 2px solid ${theme.colors.primary};
      `}
  `}
`;

export const BoxMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 2px;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
  ${scrollbar};
`;

export const Selector = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-wrap: no-wrap;

    ${({ focus }) =>
      focus &&
      css`
        border: 2px solid ${theme.colors.primary};
      `}
  `}
`;

export const Options = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  max-height: 200px;
  background: #fff;
  margin-top: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  box-shadow: -1px 3px 10px -1px #e6e6e6;
  z-index: 1000;
  ${({ show }) =>
    !show &&
    css`
      display: none;
    `}

  ::-webkit-scrollbar {
    width: 3px;
    border-top-right-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-top-right-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: #7ccafc;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #7ccafc;
  }
`;

export const Text = styled.span`
  ${({ theme }) => css`
    font-weight: normal;
    display: flex;
    align-items: center;

    ${switchProp('size', {
      small: css`
        font-size: 12px;
      `,
      default: css`
        font-size: font-size: ${theme.fontSize.regular};
      `,
    })}
  `}
`;

export const Empty = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-weight: 600;
    color: ${theme.colors.font};
  `}
`;

export const Option = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 ${theme.padding.sm};
    font-weight: 400;

    ${switchProp('size', {
      small: css`
        min-height: 35px;
      `,
      default: css`
        min-height: 50px;
      `,
    })}

    :nth-child(odd) {
      background-color: #f4f4f4;
    }

    cursor: pointer;
    :hover {
      background: #def2ff;
    }
  `}
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;

  cursor: pointer;
  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;
