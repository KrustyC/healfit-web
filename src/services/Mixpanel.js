import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.MIX_PANEL_TOKEN);

const envCheck = process.env.NODE_ENV === 'production';

const actions = {
  identify: id => {
    if (envCheck) {
      mixpanel.identify(id);
    }
  },
  alias: id => {
    if (envCheck) {
      mixpanel.alias(id);
    }
  },
  track: (name, props) => {
    if (envCheck) {
      mixpanel.track(name, props);
    }
  },
  people: {
    set: props => {
      if (envCheck) {
        mixpanel.people.set(props);
      }
    },
  },
};

// eslint-disable-next-line
export const Mixpanel = actions;
