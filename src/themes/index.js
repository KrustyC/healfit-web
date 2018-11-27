import { lighten, darken } from 'polished';

const WHITE = '#fff';
const PRIMARY = '#2e6da4';
const ACCENT = '#ec971f';
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
  navbar: {
    border: {
      color: PRIMARY,
    },
    brand: {
      image: {
        width: '100px',
        height: '35px',
        marginTop: '5px',
      },
    },
    collapseBreakPoint: '1000px',
    colors: {
      text: PRIMARY,
      background: WHITE,
    },
    dropdown: {
      marginTop: '60px',
    },
    height: '50px',
    item: {
      default: {
        color: PRIMARY,
        background: WHITE,
      },
      hover: {
        background: darken(0.04, WHITE),
      },
    },
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
