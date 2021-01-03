import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import moment from 'moment';

import Modal from 'uikit/blocks/Modal';
import Form, { validationSchema } from './Form';

const getInitialValues = event => {
  const eventStartTime = moment(event.startTime);
  const eventEndTime = moment(event.endTime);
  return {
    day: eventStartTime,
    type: event.__typename === 'MealEvent' ? 'meal' : 'workout',
    start: eventStartTime.format('HH:mm'),
    end: eventEndTime.format('HH:mm'),
    mealType: event.mealType || '',
    recipes: event.recipes || [],
  };
};

const EditEventModal = ({ event, onConfirm, onClose }) => (
  <Modal large show onCancel={onClose}>
    <Formik
      validationSchema={validationSchema}
      initialValues={getInitialValues(event)}
      onSubmit={onConfirm}
    >
      {({ values, isValid, handleSubmit, setFieldValue }) => (
        <Modal.Body>
          <Modal.Header>Edit Event </Modal.Header>
          <Modal.Body>
            <Form edit values={values} setFieldValue={setFieldValue} />
          </Modal.Body>
          <Modal.Footer>
            <Modal.Cancel />
            <Modal.Confirm disabled={!isValid} onClick={handleSubmit}>
              Edit
            </Modal.Confirm>
          </Modal.Footer>
        </Modal.Body>
      )}
    </Formik>
  </Modal>
);

EditEventModal.propTypes = {
  event: PropTypes.object,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

EditEventModal.defaultProps = {
  event: null,
};

export default EditEventModal;
