import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor as SlateEditor } from 'slate-react';
import { Value } from 'slate';
import Lists from '@convertkit/slate-lists';

import BoldSvg from 'assets/icons/bold-text.svg';
import ItalicSvg from 'assets/icons/italic-text.svg';
import UnderlineSvg from 'assets/icons/underline-text.svg';

import MarkHotkey from './MarkHotkey';
import { Container, Toolbar, ToolbarButton } from './style';

const plugins = [
  MarkHotkey({ key: 'b', type: 'bold' }),
  MarkHotkey({ key: 'i', type: 'italic' }),
  MarkHotkey({ key: 'u', type: 'underline' }),
  Lists(),
];

export default class Editor extends Component {
  static propTypes = {
    readOnly: PropTypes.bool,
    value: PropTypes.object,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    placeholder: 'Type something...',
    readOnly: false,
    value: Value.fromJSON({}),
    onChange: () => null,
  };

  ref = editor => {
    this.editor = editor;
  };

  toggleOrderedList = event => {
    event.preventDefault();
    this.editor.toggleList({ type: 'ordered-list' });
  };

  onClickMark = (event, type) => {
    event.preventDefault();
    this.editor.toggleMark(type);
  };

  renderMark = (props, editor, next) => {
    const { mark, attributes } = props;

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{props.children}</strong>;
      case 'italic':
        return <em {...attributes}>{props.children}</em>;
      case 'underline':
        return <u {...attributes}>{props.children}</u>;
      default:
        return next();
    }
  };

  hasMark = type => {
    const { value } = this.props;
    return value.activeMarks.some(mark => mark.type === type);
  };

  renderMarkButton = (type, Icon) => {
    const isActive = this.hasMark(type);

    return (
      <ToolbarButton
        active={isActive}
        onMouseDown={event => this.onClickMark(event, type)}
      >
        <Icon />
      </ToolbarButton>
    );
  };

  render() {
    const { placeholder, value, readOnly } = this.props;
    return (
      <Container>
        {!readOnly && (
          <Toolbar>
            {this.renderMarkButton('bold', BoldSvg)}
            {this.renderMarkButton('italic', ItalicSvg)}
            {this.renderMarkButton('underline', UnderlineSvg)}
            <ToolbarButton onMouseDown={this.toggleOrderedList}>
              <BoldSvg />
            </ToolbarButton>
          </Toolbar>
        )}
        <SlateEditor
          ref={this.ref}
          placeholder={placeholder}
          value={value}
          readOnly={readOnly}
          plugins={plugins}
          onChange={this.props.onChange}
          renderMark={this.renderMark}
        />
      </Container>
    );
  }
}
