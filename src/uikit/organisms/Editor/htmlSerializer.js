import React from 'react';
import Html from 'slate-html-serializer';

const BLOCK_TAGS = {
  p: 'paragraph',
  blockquote: 'quote',
  ol: 'ol',
  li: 'li',
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
      if (obj.object === 'block') {
        switch (obj.type) {
          case 'paragraph':
            return <p className={obj.data.get('className')}>{children}</p>;
          case 'list-item-child':
            return children;
          case 'list-item':
            return <li>{children}</li>;
          case 'ordered-list':
            return <ol>{children}</ol>;
          default:
            return undefined;
        }
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
  {
    deserialize(el, next) {
      // const type = MARK_TAGS[el.tagName.toLowerCase()];
      // if (type) {
      //   return {
      //     object: 'mark',
      //     type,
      //     nodes: next(el.childNodes),
      //   };
      // }
      // return next();
    },
    serialize(obj, children) {
      return null;
      if (obj.object === 'string') {
        return <p>{children}</p>;
        const x = children.split('\n').reduce((array, text, i) => {
          if (i !== 0) array.push(<br key={i} />);
          array.push(text);
          console.log(text);
          return array;
        }, []);
        console.log(x);
        return x;
      }
      console.log('fucking here');
      return undefined;
    },
  },
];

export default new Html({ rules });
