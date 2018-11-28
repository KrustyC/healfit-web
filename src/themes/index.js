import { lighten, darken } from 'polished';

const WHITE = '#fff';
const PRIMARY = '#F4976C';
const ACCENT = '#B4DFE5';
const SUCCESS = '#5cb85c';
const INFO = '#33a9da';
const ERROR = '#d9534f';
const WARNING = '#f9d834';
const GREY = '#aaaaaa';
const DARK = '#000000';

export default {
  colors: {
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
      xsmall: '25rem',
      small: '40rem',
      default: '55rem',
      large: '70rem',
      fullscreen: '100%',
    },
  },
  fonts: {
    default: 'Quicksand',
  },
  fontSize: {
    xsmall: '0.45rem',
    small: '0.6rem',
    regular: '1rem',
    large: '1.4rem',
    title: '2.75rem',
    h1: '2.5rem',
    h2: '1.5rem',
    h3: '1.2rem',
    h4: '.9rem',
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
  sizes: {
    xs: '767px', // less than - phones
    sm: '768px', // >= than - tablets
    md: '992px', // >= than - medium desktops
    lg: '1200px', // >= than - large desktops
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
  zIndex: {
    foreground: 10002,
    background: 1,
  },
  borderRadius: '2px',
  duration: {
    easeInOut: '.15s',
  },
  util: {
    darkenOnHover: hex => darken(0.08, hex),
    darkenOnActive: hex => darken(0.14, hex),
  },
};
