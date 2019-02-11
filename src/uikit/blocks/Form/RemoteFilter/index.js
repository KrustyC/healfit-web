import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { Empty, Option, Options, Wrapper } from './style';
import Input from '../Input';

class RemoteFilter extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
    labelField: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    emptyMessage: PropTypes.string,
    placeholder: PropTypes.string,
    query: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  static defaultProps = {
    placeholder: 'Filter...',
    emptyMessage: 'No Options Avaialable',
  };

  constructor(props) {
    super(props);

    this.state = {
      value: '',
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
    this.setState({ value, showList: value.length > 0 });
    this.onExecuteQuery(value);
  };

  onSelect = item => () => {
    this.setState({ showList: false });
    this.props.onSelect(item);
  };

  onExecuteQuery = debounce(value => this.props.query(value), 150);

  handleClick = e => {
    if (this.componentRef.current.contains(e.target)) {
      // Clicking inside the component, so no action needs to be done
      return null;
    }
    return this.setState({ showList: false });
  };

  render() {
    const { placeholder, list, labelField, emptyMessage } = this.props;
    const { showList, value } = this.state;

    return (
      <Wrapper ref={this.componentRef}>
        <Input
          value={value}
          onChange={this.onInputChange}
          ref={this.textInputRef}
          placeholder={placeholder}
        />
        <Options show={showList}>
          {list.length === 0 ? (
            <Empty>{emptyMessage}</Empty>
          ) : (
            list.map(item => (
              <Option key={item.id} onClick={this.onSelect(item)}>
                {item[labelField]}
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
