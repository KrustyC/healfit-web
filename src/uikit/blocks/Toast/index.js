import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToastController from './ToastController';
import ToastContainer from './ToastContainer';
import ToastElement from './ToastElement';

import generateUEID from './generateUEID';

const ToastContext = React.createContext({
  add: () => null,
  remove: () => null,
  toasts: [],
});

const NOOP = () => {};

export class ToastProvider extends Component {
  static propTypes = {
    autoDismissTimeout: PropTypes.number,
    children: PropTypes.any.isRequired,
    placement: PropTypes.string,
    transitionDuration: PropTypes.number,
  };

  static defaultProps = {
    autoDismissTimeout: 5000,
    placement: 'bottom-center',
    transitionDuration: 220,
  };

  state = {
    toasts: [],
  };

  add = (content, options = {}, cb = NOOP) => {
    const id = generateUEID();
    const callback = () => cb(id);

    this.setState(({ toasts }) => {
      const toast = Object.assign({}, { content, id }, options);
      return { toasts: [...toasts, toast] };
    }, callback);
  };

  remove = (id, cb = NOOP) => {
    const callback = () => cb(id);

    this.setState(state => {
      const toasts = state.toasts.filter(t => t.id !== id);
      return { toasts };
    }, callback);
  };

  // avoid creating a new fn on every render
  onDismiss = id => () => this.remove(id);

  render() {
    const { children, ...props } = this.props;
    const { toasts } = this.state;
    const context = {
      add: this.add,
      remove: this.remove,
      toasts,
    };

    return (
      <ToastContext.Provider value={context}>
        {children}
        <ToastContainer {...props}>
          {toasts.map(({ content, id, ...rest }) => (
            <ToastController
              key={id}
              Toast={ToastElement}
              onDismiss={this.onDismiss(id)}
              {...props}
              {...rest}
            >
              {content}
            </ToastController>
          ))}
        </ToastContainer>
      </ToastContext.Provider>
    );
  }
}

export const withToastManager = Comp => props => (
  <ToastContext.Consumer>
    {context => <Comp toastManager={context} {...props} />}
  </ToastContext.Consumer>
);
