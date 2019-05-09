import { EditorState } from 'draft-js';
import {
  convertToHTML as convertTo,
  convertFromHTML as convertFrom,
} from 'draft-convert';

export const convertToHTML = editorState =>
  convertTo(editorState.getCurrentContent());

export const convertFromHTML = (html = '') =>
  EditorState.createWithContent(convertFrom(html));

export const convertToPlain = editorState =>
  editorState.getCurrentContent().getPlainText();
