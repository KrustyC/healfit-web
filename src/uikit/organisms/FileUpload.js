import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'uikit/blocks/Button';

export default class FileUploader extends Component {
  static propTypes = {
    onLoad: PropTypes.func.isRequired,
  };

  onShowUploadWidget = () => {
    const options = {
      upload_preset: process.env.CLOUDINARY_PRESET,
      cropping: true,
    };

    window.cloudinary.openUploadWidget(options, (error, res) => {
      if (error) {
        return console.log(error);
      }
      return this.props.onLoad(res[0].public_id);
    });
  };

  render() {
    return (
      <Button onClick={this.onShowUploadWidget} type="button">
        Choose Image
      </Button>
    );
  }
}
