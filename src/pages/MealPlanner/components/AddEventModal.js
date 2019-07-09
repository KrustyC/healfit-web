import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import Modal from 'uikit/blocks/Modal';
import Form, { validationSchema } from './Form';

const AddOrEditEventModal = ({ startTime, show, onConfirm, onClose }) => (
  <Modal large show={show} onCancel={onClose}>
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        day: startTime,
        type: '',
        start: startTime ? startTime.format('HH:mm') : '',
        end: startTime
          ? startTime
              .clone()
              .add(60, 'm')
              .format('HH:mm')
          : '',
        mealType: '',
        recipes: [],
      }}
      onSubmit={onConfirm}
    >
      {({ values, isValid, handleSubmit, setFieldValue }) => (
        <>
          <Modal.Header>Add Meal or Training</Modal.Header>
          <Modal.Body>
            <Form values={values} setFieldValue={setFieldValue} />
          </Modal.Body>
          <Modal.Footer>
            <Modal.Cancel />
            <Modal.Confirm disabled={!isValid} onClick={handleSubmit}>
              Create
            </Modal.Confirm>
          </Modal.Footer>
        </>
      )}
    </Formik>
  </Modal>
);

AddOrEditEventModal.propTypes = {
  show: PropTypes.bool.isRequired,
  startTime: PropTypes.object,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

AddOrEditEventModal.defaultProps = {
  startTime: null,
};

export default AddOrEditEventModal;
