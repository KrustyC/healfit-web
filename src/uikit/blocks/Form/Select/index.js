import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectContext from './context';
import { Wrapper } from './style';
import SelectorBox from './SelectorBox';
import OptionsList from './OptionsList';
import Option from './Option';

class Select extends Component {
  static propTypes = {
    multi: PropTypes.bool,
    withoutInput: PropTypes.bool,
    width: PropTypes.string,
    size: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.objectOf(Option)).isRequired,
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };

  static defaultProps = {
    placeholder: 'Select...',
    size: 'regular',
    width: 'auto',
    withoutInput: false,
    multi: false,
    onBlur: null,
    onFocus: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const valueLabelMapping = new Map();
    nextProps.children.forEach(({ props: { value, label } }) => {
      valueLabelMapping.set(value, label);
    });

    return {
      ...prevState,
      valueLabelMapping,
    };
  }

  constructor(props) {
    super(props);

    const valueLabelMapping = new Map();
    props.children.forEach(({ props: { value, label } }) => {
      valueLabelMapping.set(value, label);
    });

    this.state = {
      showList: false,
      focus: false,
      query: '',
      valueLabelMapping,
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

  onAddOption = selected => {
    if (this.props.multi) {
      return this.props.onChange([...this.props.value, selected]);
    }
    this.props.onChange(selected);
    return this.setState({ showList: false });
  };

  onRemoveOption = toRemove => () => {
    const { value } = this.props;

    const index = value.findIndex(item => item.value === toRemove);
    const newValue = [
      ...value.slice(0, index),
      ...value.slice(index + 1, value.length),
    ];
    this.props.onChange(newValue);
  };

  onRemoveAll = () => {
    if (this.props.multi) {
      this.props.onChange([]);
    } else {
      this.props.onChange({});
    }
    this.setState({ showList: false });
  };

  onInputChange = e =>
    this.setState({
      query: e.target.value,
      showList: true,
    });

  onFocus = () => {
    const { multi } = this.props;
    this.setState({ showList: true, focus: true });

    if (multi) {
      this.textInputRef.current.getEl().focus();
      // this.textInputRef.current.htmlEl.focus()
      if (this.props.onFocus) {
        this.props.onFocus();
      }
    }
  };

  onBlur = () => {
    this.setState({ focus: false });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  isOptionSelected = value => {
    if (!this.props.multi) {
      return false;
    }

    return (
      this.props.value.findIndex(
        item => JSON.stringify(item.value) === JSON.stringify(value)
      ) > -1
    );
  };

  filterChildren = () => {
    const { query } = this.state;
    return this.props.children.filter(
      ({ props: { value, label } }) =>
        !this.isOptionSelected(value) &&
        label.toLowerCase().includes(query.toLowerCase())
    );
  };

  handleClick = e => {
    if (this.componentRef.current.contains(e.target)) {
      // Clicking inside the component, so no action needs to be done
      return null;
    }
    return this.setState({ showList: false });
  };

  render() {
    const { multi, size, placeholder, value, withoutInput, width } = this.props;
    const { showList } = this.state;

    const context = {
      ...this.state,
      size,
      width,
      withoutInput,
      multi,
      selected: value,
      placeholder,
      onAddOption: this.onAddOption,
      onRemoveOption: this.onRemoveOption,
      onRemoveAll: this.onRemoveAll,
      onInputChange: this.onInputChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      isOptionSelected: this.isOptionSelected,
      onSelect: this.onAddOption,
    };

    return (
      <SelectContext.Provider value={context}>
        <Wrapper ref={this.componentRef} size={size} width={width}>
          <SelectorBox size={size} ref={this.textInputRef} width={width} />
          <OptionsList show={showList}>{this.filterChildren()}</OptionsList>
        </Wrapper>
      </SelectContext.Provider>
    );
  }
}

Select.Option = Option;

export default Select;
