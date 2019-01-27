import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Item = styled.button`
  background: green;
  ${({ active }) =>
    active &&
    css`
      background: red;
    `}
`;

export default class Multichoice extends Component {
  static Item = Item;

  state = {
    selected: null,
  };

  onSelect = i => e => {
    e.preventDefault();
    console.log('selected');
    this.setState({ selected: i });
    // this.props.selected()
  };

  render() {
    // const { selected } = this.state;
    const { children, selected } = this.props;
    console.log(children, selected);
    return (
      <Container>
        {React.Children.map(children, (child, i) =>
          React.cloneElement(child, {
            active: selected === i,
            onClick: this.onSelect(i),
          })
        )}
      </Container>
    );
  }
}
