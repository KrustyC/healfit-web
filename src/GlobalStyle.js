import { createGlobalStyle, css } from 'styled-components';
import './font.scss';

/* eslint-disable global-require */
const GloablStyle = createGlobalStyle`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Montserrat';
      font-display: swap;
      src: url(${require('assets/fonts/montserrat/Montserrat-Light.ttf')})
        format('truetype');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      font-display: swap;
      src: url(${require('assets/fonts/montserrat/Montserrat-Regular.ttf')})
        format('truetype');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      font-display: swap;
      src: url(${require('assets/fonts/montserrat/Montserrat-Italic.ttf')})
        format('truetype');
      font-weight: 400;
      font-style: italic;
    }

    @font-face {
      font-family: 'Montserrat';
      font-display: swap;
      src: url(${require('assets/fonts/montserrat/Montserrat-SemiBold.ttf')})
        format('truetype');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      font-display: swap;
      src: url(${require('assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf')})
        format('truetype');
      font-weight: bold;
      font-style: italic;
    }


    *,
    ::after,
    ::before {
      box-sizing: inherit;
    }

    html, body {
      font-family: sans-serif;
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
    }

    body {
      background: ${theme.colors.white};
      color: ${theme.colors.font};
      font-size: ${theme.fontSize.regular};
      overflow-x: hidden;
      text-rendering: optimizeLegibility;
      margin: 0;
      padding: 0;
    }

    body,
    html,
    * {
      font-family: '${theme.fonts.default}', Helvetica, sans-serif;
    }

    a {
      text-decoration: none !important;
    }
  `}
`;

export default GloablStyle;
