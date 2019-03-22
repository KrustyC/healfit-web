import React from 'react';
import HtmlToReact, { Parser } from 'html-to-react';

const isValidNode = node => {
  if (node.name === 'p') {
    const { children } = node;

    if (children.length === 0) {
      return false;
    }

    if (children.length === 1) {
      /**
       * If there's only one child and it's empty, or has one child only
       * which only contains text, then the item should not
       * be rendered
       */
      if (!children[0].children && children[0].data.length > 0) {
        return true;
      }

      return children[0].children.length > 0;
    }

    return true;
  }

  return true;
};

const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

const processingInstructions = [
  {
    shouldProcessNode: () => true,
    processNode: processNodeDefinitions.processDefaultNode,
  },
];

const htmlToReactParser = new Parser();

export default html =>
  htmlToReactParser.parseWithInstructions(
    html,
    isValidNode,
    processingInstructions
  );
