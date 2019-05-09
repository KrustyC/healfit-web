import React from 'react';
import PropTypes from 'prop-types';
import { Editor as DraftEditor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Toolbar from './Toolbar';

const Editor = ({ readOnly, value, placeholder, onChange }) => (
  <>
    {!readOnly && <Toolbar editorState={value} onChange={onChange} />}
    <DraftEditor
      readOnly={readOnly}
      placeholder={placeholder}
      editorState={value}
      onChange={onChange}
    />
  </>
);

Editor.propTypes = {
  readOnly: PropTypes.bool,
  value: PropTypes.object,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Editor.defaultProps = {
  placeholder: 'Type something...',
  readOnly: false,
  value: EditorState.createEmpty(),
  onChange: () => null,
};

export default Editor;
