import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { RichUtils } from 'draft-js';

import BoldSvg from 'assets/icons/bold-text.svg';
import ItalicSvg from 'assets/icons/italic-text.svg';
import UnderlineSvg from 'assets/icons/underline-text.svg';
import ListSvg from 'assets/icons/list.svg';

const Row = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 2px solid ${theme.colors.border};
    margin-bottom: ${theme.margin.sm};
  `}
`;

const Button = styled.button.attrs({ type: 'button' })`
  ${({ theme, active }) => css`
    display: flex;
    height: 30px;
    align-items: flex-start;
    justify-content: center;
    width: 30px;
    border: none;
    outline: none;
    border-color: ${theme.colors.primary};
    background: ${theme.colors.white};
    cursor: pointer;
    :hover {
      background: ${theme.colors.primary};
      svg {
        fill: ${theme.colors.white};
      }
    }

    svg {
      height: 13px;
      width: 13px;
      fill: ${theme.colors.primary};
    }

    ${active &&
      css`
        background: ${theme.colors.primary};
        svg {
          fill: ${theme.colors.white};
        }
      `}
  `}
`;

const Toolbar = ({ editorState, onChange }) => {
  const onInlineStyleToggle = inlineStyle =>
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));

  const onToggleBlockType = blockType =>
    onChange(RichUtils.toggleBlockType(editorState, blockType));

  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <Row>
      <Button onClick={() => onInlineStyleToggle('BOLD')}>
        <BoldSvg />
      </Button>
      <Button onClick={() => onInlineStyleToggle('ITALIC')}>
        <ItalicSvg />
      </Button>
      <Button onClick={() => onInlineStyleToggle('UNDERLINE')}>
        <UnderlineSvg />
      </Button>
      <Button
        active={blockType === 'ordered-list-item'}
        onClick={() => onToggleBlockType('ordered-list-item')}
      >
        <ListSvg />
      </Button>
    </Row>
  );
};

Toolbar.propTypes = {
  editorState: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Toolbar;
