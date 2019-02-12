import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import SvgUpload from 'assets/icons/uploading-archive.svg';

const Label = styled.label`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.02);
  cursor: pointer;
  display: flex;
  height: 300px;
  justify-content: center;
  outline: 3px dashed #ccc;
  outline-offset: 5px;
  position: relative;
  width: 300px;
`;

const Img = styled.img`
  ${({ theme, loaded }) => css`
    left: 50%;
    opacity: 0;
    max-height: 100%;
    max-width: 100%;
    transition: all 300ms ease-in;
    transform: translate(-50%, -50%);
    z-index: -1;

    ${loaded &&
      css`
        opacity: 1;
      `}
  `}
`;

const FileInput = styled.input.attrs({ type: 'file' })`
  display: none;
`;

export default class FileUploader extends Component {
  state = {
    active: false,
    imageSrc: '',
    loaded: false,
  };

  onDragEnter = () => {
    this.setState({ active: true });
  };

  onDragLeave = () => {
    this.setState({ active: false });
  };

  onDragOver = e => {
    e.preventDefault();
  };

  onDrop = e => {
    e.preventDefault();
    this.setState({ active: false });
    this.onFileChange(e, e.dataTransfer.files[0]);
  };

  onFileChange = (e, file) => {
    const uploadFile = file || e.target.files[0];

    const pattern = /image-*/;

    const reader = new window.FileReader();

    if (!uploadFile.type.match(pattern)) {
      alert('Invalid format');
      return;
    }

    this.setState({ loaded: false });

    reader.onload = () => {
      this.setState({
        imageSrc: reader.result,
        loaded: true,
      });
    };

    reader.readAsDataURL(uploadFile);
  };

  getFileObject = () => this.inputRef.files[0];

  getFileString = () => this.state.imageSrc;

  ref = inputRef => {
    this.inputRef = inputRef;
  };

  render() {
    const { loaded, active, imageSrc } = this.state;

    const { activeColor, baseColor, overlayColor } = this.props;

    const labelClass = `uploader ${loaded && 'loaded'}`;

    const borderColor = active ? activeColor : baseColor;

    const iconColor = active ? activeColor : loaded ? overlayColor : baseColor;

    return (
      <Label
        className={labelClass}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
        style={{ outlineColor: borderColor }}
      >
        <Img src={imageSrc} loaded={loaded} alt="upload-file" />
        <SvgUpload />
        <FileInput
          accept="image/*"
          onChange={this.onFileChange}
          ref={this.ref}
        />
      </Label>
    );
  }
}
