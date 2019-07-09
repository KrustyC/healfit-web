import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import moment from 'moment';

import Modal from 'uikit/blocks/Modal';
import Button from 'uikit/blocks/Button';
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

const EditOrDeleteModal = ({ show, event, onEdit, onDelete, onClose }) => {
  const [wantToEdit, setOnWantToEdit] = useState(false);
  const onWantToEdit = () => setOnWantToEdit(true);

  const onCancel = () => {
    setOnWantToEdit(false);
    onClose();
  };

  const onSubmit = values => {
    setOnWantToEdit(false);
    onEdit(values);
  };

  return (
    <Modal large show={show} onCancel={onCancel}>
      {!wantToEdit ? (
        <>
          <Modal.Body>
            <p>What do you wanna do man? Eh?</p>

            <Button color="primary" onClick={onWantToEdit}>
              Edit
            </Button>
            <Button onClick={onDelete}>Delete</Button>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Cancel />
          </Modal.Footer>
        </>
      ) : (
        <Formik
          validationSchema={validationSchema}
          initialValues={getInitialValues(event)}
          onSubmit={onSubmit}
        >
          {({ values, isValid, handleSubmit, setFieldValue }) => (
            <Modal.Body>
              <Modal.Header>Edit Event </Modal.Header>
              <Modal.Body>
                <Form values={values} setFieldValue={setFieldValue} />
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
      )}
    </Modal>
  );
};

EditOrDeleteModal.propTypes = {
  event: PropTypes.object,
  show: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

EditOrDeleteModal.defaultProps = {
  event: null,
};

export default EditOrDeleteModal;
