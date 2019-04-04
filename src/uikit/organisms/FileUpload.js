import PropTypes from 'prop-types';

const FileUploader = ({ children, onLoad }) => {
  const onShowUploadWidget = () => {
    const options = {
      upload_preset: process.env.CLOUDINARY_PRESET,
    };

    window.cloudinary.openUploadWidget(options, (error, res) => {
      if (error) {
        return null;
      }
      return onLoad(res[0].public_id);
    });
  };

  return children({ onShowUploadWidget });
};

FileUploader.propTypes = {
  children: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default FileUploader;
