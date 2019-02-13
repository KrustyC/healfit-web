import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';
import Button from 'uikit/blocks/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Img = styled.img`
  ${({ theme }) => css`
    margin-bottom: ${theme.margin.md};
    height: ${prop('height', '300px')};
    width: ${prop('width', '100%')};
    border: 1px solid ${theme.colors.border};
  `}
`;

const FileInput = styled.input.attrs({ type: 'file' })`
  display: none;
`;

export default class FileUploader extends Component {
  state = {
    imgSrc: null,
  };

  onFileChange = (e, file) => {
    const uploadFile = file || e.target.files[0];
    const pattern = /image-*/;
    const reader = new window.FileReader();

    if (!uploadFile.type.match(pattern)) {
      // eslint-disable-next-line
      return alert('Invalid format');
    }

    reader.onload = () => this.setState({ imgSrc: reader.result });
    return reader.readAsDataURL(uploadFile);
  };

  ref = inputRef => {
    this.inputRef = inputRef;
  };

  onClick = () => this.inputRef.click();

  render() {
    const { active, imgSrc } = this.state;
    const { width, height, ...rest } = this.props;

    return (
      <Wrapper {...rest} active={active}>
        <Img src={imgSrc} width={width} height={height} />
        <Button onClick={this.onClick} type="button">
          Choose Image
        </Button>
        <FileInput
          accept="image/*"
          onChange={this.onFileChange}
          ref={this.ref}
        />
      </Wrapper>
    );
  }
}
