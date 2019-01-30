import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Empty, Option, Options, Wrapper } from './style';
import Input from '../Input';

class RemoteFilter extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    query: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  static defaultProps = {
    placeholder: 'Filter...',
  };

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      showList: false,
    };

    this.componentRef = React.createRef();
    this.textInputRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  onAddOption = selected => this.props.onSelect(selected);

  onInputChange = e => {
    const { value } = e.target;
    this.props.query(value).then(res => {
      this.setState({ list: res, showList: true });
    });
  };

  onSelect = item => () => {
    this.setState({ list: [], showList: false });
    this.props.onSelect(item);
  };

  handleClick = e => {
    if (this.componentRef.current.contains(e.target)) {
      // Clicking inside the component, so no action needs to be done
      return null;
    }
    return this.setState({ showList: false });
  };

  render() {
    const { placeholder } = this.props;
    const { showList, list } = this.state;

    return (
      <Wrapper ref={this.componentRef}>
        <Input
          onChange={this.onInputChange}
          ref={this.textInputRef}
          placeholder={placeholder}
        />
        <Options show={showList}>
          {list.length === 0 ? (
            <Empty>No options</Empty>
          ) : (
            list.map(item => (
              <Option key={item.id} onClick={this.onSelect(item)}>
                {item.name}
              </Option>
            ))
          )}
        </Options>
      </Wrapper>
    );
  }
}

RemoteFilter.Option = Option;

export default RemoteFilter;
