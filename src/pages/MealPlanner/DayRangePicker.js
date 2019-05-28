import 'react-dates/initialize';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const DayPickerRange = ({ startDate, endDate, onDatesChange }) => {
  const [focusedInput, setFocusedinput] = useState('startDate');
  const onFocusChange = newFocusedInput =>
    setFocusedinput(!newFocusedInput ? 'startDate' : newFocusedInput);

  return (
    <div>
      <DayPickerRangeController
        withFullScreenPortal
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
        endDateOffset={day => day.add(7, 'days')}
        onDatesChange={onDatesChange}
        onFocusChange={onFocusChange}
      />
    </div>
  );
};

DayPickerRange.propTypes = {};

export default DayPickerRange;
