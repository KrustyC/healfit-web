import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Input from './Input';

const Row = styled(Input)`
  display: flex;
  justify-content: space-between;

  ${({ focus }) =>
    focus &&
    css`
      border: 2px solid black;
    `}
`;

const StyledPassword = styled.input`
  border: none;
  outline: none;
  width: calc(100% - 30px);
`;

const Button = styled.span`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
`;

const Icon = styled.img`
  width: 18px;
`;

export default class Password extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    onBlur: () => null,
  };

  state = {
    showPassword: false,
    focus: false,
  };

  togglePasswordVisibility = e => {
    e.preventDefault();
    this.setState(({ showPassword }) => ({ showPassword: !showPassword }));
  };

  onFocus = () => this.setState({ focus: true });

  onBlur = e => {
    this.setState({ focus: false });
    this.props.onBlur(e);
  };

  render() {
    const { showPassword, focus } = this.state;
    const { value, ...rest } = this.props;

    return (
      <Row as="div" focus={focus}>
        <StyledPassword
          value={value}
          type={showPassword ? 'text' : 'password'}
          {...rest}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <Button
          onClick={this.togglePasswordVisibility}
          tabIndex="0"
          role="button"
        >
          {!showPassword ? (
            <Icon
              alt="show password"
              // eslint-disable-next-line global-require
              src={require('assets/icons/visibility-button.svg')}
            />
          ) : (
            <Icon
              alt="show password"
              // eslint-disable-next-line global-require
              src={require('assets/icons/blind.svg')}
            />
          )}
        </Button>
      </Row>
    );
  }
}
