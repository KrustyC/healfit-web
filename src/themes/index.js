import { css, keyframes } from 'styled-components';
import { lighten, darken } from 'polished';

const FONT = '#49555f';
const WHITE = '#fff';
const PRIMARY = '#3BB2B8';
const ACCENT = '#2989D8';
const SUCCESS = '#5cb85c';
const INFO = '#33a9da';
const ERROR = '#d9534f';
const WARNING = '#f9d834';
const GREY = '#aaaaaa';
const DARK = '#000000';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 10,
};

export default {
  colors: {
    font: FONT,
    white: WHITE,

    // primary and accent/secondary
    primary: PRIMARY,
    accent: ACCENT,

    // success, warning, error
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    info: INFO,

    // greys
    dark: DARK,
    darkLt: lighten(0.18, DARK),
    darkLter: lighten(0.25, DARK),
    grey: GREY,
    greyLt: lighten(0.18, GREY),
    greyLter: lighten(0.25, GREY),

    // misc:
    border: '#efefef',
    light: WHITE,

    // @TODO use info so when refactoring colours the names don't go out of date
    lightBlue: '#5bc0de',
    lighterBlue: '#c4e5ef',
  },
  margin: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
  },
  dimensions: {
    navbarHeight: '70px',
    categoryNavHeight: '50px',
    containerWidth: {
      xsmall: '25vw',
      small: '35vw',
      default: '45vw',
      large: '70vw',
      fullscreen: '100vw',
    },
  },
  fonts: {
    default: 'Montserrat',
  },
  fontSize: {
    xsmall: '1rem',
    small: '1.2rem',
    regular: '1.6rem',
    large: '2.8rem',
    title: '5.4rem',
    h1: '4.4rem',
    h2: '3.6rem',
    h3: '2.8rem',
    h4: '1.8rem',
  },
  forms: {
    inputHeight: '2.3rem',
    inputPadding: '0.6rem',
    fontSize: '0.71rem',
    checkbox: {
      small: {
        size: '1.5em',
        font: '10px',
      },
      medium: {
        size: '2em',
        font: '14px',
      },
      large: {
        size: '3em',
        font: '20px',
      },
    },
  },
  spaces: {
    xsmall: '.6rem',
    small: '.75rem',
    regular: '1.5rem',
    large: '2.5rem',
  },
  padding: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
  },
  sizes: {
    xs: '767px', // less than - phones
    sm: '768px', // >= than - tablets
    md: '992px', // >= than - medium desktops
    lg: '1200px', // >= than - large desktops
  },
  zIndex: {
    foreground: 10002,
    background: 1,
  },
  borderRadius: '2px',
  duration: {
    easeInOut: '.15s',
  },
  transition: {
    easing: '.2s',
    easingQuick: '.1s',
  },
  shadows: {
    default: '0px 2px 4px 0px rgba(69, 69, 69, .17)',
    navbar: inverse =>
      `0 ${inverse ? '-2' : '1'}px 2px 0 rgba(70, 70, 70, 0.02)`,
    featureNavbar: '0 4px 10px 0 rgba(70, 70, 70, 0.25)',
  },
  util: {
    darkenOnHover: hex => darken(0.08, hex),
    darkenOnActive: hex => darken(0.14, hex),
    lighten: hex => lighten(0.14, hex),
  },
  media: Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;
    return acc;
  }, {}),
  animations: {
    grow: keyframes`
      transform: scale(1.1);light
    `,
    blink: keyframes`
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.15);
      }
      50% {
        transform: scale(1.1);
      }
      75% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    `,
    hover: keyframes`
      0% {
        transform: translate(0px, 0px);
      }
      50% {
        transform: translate(0px, -15px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    `,
    bounce: keyframes`
      0% {
        transform: translate(0px, 0px);
      }
      10% {
        transform: translate(0px, 2px);
      }
      50% {
        transform: translate(0px, -7px);
      }
      90% {
        transform: translate(0px, 4px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    `,
    fadeIn: keyframes`
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    `,
    fadeInUp: keyframes`
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }

      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    `,
    shake: keyframes`
      0% {
        transform: translateX(0px);
      }
      15% {
        transform: translateX(-3px);
      }
      25% {
        transform: translateX(3px);
      }
      45% {
        transform: translateX(-2px);
      }
      65% {
        transform: translateX(3px);
      }
      85% {
        transform: translateX(-2px);
      }
      100% {
        transform: translateX(0px);
      }
    `,
  },
};
