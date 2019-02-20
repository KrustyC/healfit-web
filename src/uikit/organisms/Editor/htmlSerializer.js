import React from 'react';
import Html from 'slate-html-serializer';

const BLOCK_TAGS = {
  p: 'paragraph',
  blockquote: 'quote',
};

const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underline',
};

const rules = [
  {
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: 'block',
          type,
          data: {
            className: el.getAttribute('class'),
          },
          nodes: next(el.childNodes),
        };
      }
      return next();
    },
    serialize(obj, children) {
      if (obj.object === 'block' && obj.type === 'paragraph') {
        return <p className={obj.data.get('className')}>{children}</p>;
      }
      return undefined;
    },
  },
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: 'mark',
          type,
          nodes: next(el.childNodes),
        };
      }
      return next();
    },
    serialize(obj, children) {
      if (obj.object === 'mark') {
        switch (obj.type) {
          case 'bold':
            return <strong>{children}</strong>;
          case 'italic':
            return <em>{children}</em>;
          case 'underline':
            return <u>{children}</u>;
          default:
            return undefined;
        }
      }
      return undefined;
    },
  },
];

export default new Html({ rules });
