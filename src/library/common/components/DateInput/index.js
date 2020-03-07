import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';

import { validateInput } from 'library/utilities/Validators';

import './dateInputStyles.scss';

const DateInput = ({ label, field, value, validators, disabled, onChange }) => {
  const [error, setError] = useState(null);

  const handleChange = date => {
    const inputError = validateInput(validators, date);
    setError(inputError);
    onChange(date, field, inputError);
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <DatePicker disabled={disabled} value={value} onChange={handleChange} />
      {error && error.error && <span className="text-danger">{error.message}</span>}
    </div>
  );
};

DateInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.string,
  value: PropTypes.string,
  validators: PropTypes.array,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

DateInput.defaultProps = {
  label: '',
  field: '',
  value: '',
  validators: '',
  disabled: false,
};

export default DateInput;
