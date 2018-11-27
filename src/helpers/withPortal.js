import React, { Component } from "react";
import ReactDOM from "react-dom";

export default (WrappedComponent, rootElement) => {
  class Portal extends Component {
    constructor(props) {
      super(props);

      this.rootSelector = document.getElementById(rootElement);
      this.container = document.createElement("div");
    }

    componentDidMount() {
      this.rootSelector.appendChild(this.container);
    }

    componentWillUnmount() {
      this.rootSelector.removeChild(this.container);
    }

    render() {
      return ReactDOM.createPortal(
        <WrappedComponent {...this.props} />,
        this.container
      );
    }
  }

  return Portal;
};
