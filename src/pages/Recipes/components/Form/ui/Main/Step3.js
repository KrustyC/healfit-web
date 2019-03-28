import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wizard from 'components/Wizard';
import Editor from 'uikit/organisms/Editor';
import Heading from 'uikit/elements/Heading';

export default class Step3 extends Component {
  static propTypes = {
    values: PropTypes.shape({
      method: PropTypes.object.isRequired,
    }).isRequired,
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
  };

  state = {
    touched: false,
  };

  onChange = ({ value }) => {
    const { touched } = this.state;

    if (!touched) {
      this.setState({ touched: true });
      this.props.setFieldTouched('method');
    }

    this.props.setFieldValue('method', value);
  };

  render() {
    const { method: value } = this.props.values;
    return (
      <Wizard.Page>
        <Heading level="h1" noPadding>
          Ingredients
        </Heading>
        <Editor
          placeholder="Write your recipe method..."
          value={value}
          onChange={this.onChange}
        />
      </Wizard.Page>
    );
  }
}
