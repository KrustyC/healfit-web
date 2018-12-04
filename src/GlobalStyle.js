import { createGlobalStyle, css } from 'styled-components';

/* eslint-disable global-require */
const GloablStyle = createGlobalStyle`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Karla';
      src: url(${require('assets/fonts/karla/Karla-Regular.ttf')})
        format('truetype');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'Karla';
      src: url(${require('assets/fonts/karla/Karla-Italic.ttf')})
        format('truetype');
      font-weight: 400;
      font-style: italic;
    }

    @font-face {
      font-family: 'Karla';
      src: url(${require('assets/fonts/karla/Karla-Bold.ttf')})
        format('truetype');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Karla';
      src: url(${require('assets/fonts/karla/Karla-BoldItalic.ttf')})
        format('truetype');
      font-weight: bold;
      font-style: italic;
    }

    *,
    ::after,
    ::before {
      box-sizing: inherit;
    }

    html {
      font-family: sans-serif;
      box-sizing: border-box;
      font-weight: 300;
      font-size: 62.5%;
    }

    body {
      background: ${theme.colors.primary};
      color: ${theme.colors.dark};
      font-size: ${theme.fontSize.regular};
      overflow-x: hidden;
      text-rendering: optimizeLegibility;
      margin: 0;
      padding: 0;
    }

    body,
    html,
    * {
      font-family: ${theme.fonts.default}, sans-serif;
    }
  `}
`;

export default GloablStyle;
