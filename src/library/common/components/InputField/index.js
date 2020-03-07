import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { validateInput } from 'library/utilities/Validators';

const InputField = ({ type, validators, onChange, label, field, testId, inputValue, placeholder, extraProps }) => {
  const [error, setError] = useState(null);

  const handleChange = event => {
    const { value } = event.target;
    const inputError = validateInput(validators, value);
    setError(inputError);
    onChange(value, field, inputError);
  };

  return (
    <div className="input-field">
      {label !== '' ? <label htmlFor="inputField">{label}</label> : null}
      {type === 'textarea' ? (
        <textarea
          {...extraProps}
          className="form-control rounded-0"
          data-test={testId}
          aria-describedby="inputField"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
      ) : (
        <input
          {...extraProps}
          type={type}
          className="form-control rounded-1"
          data-test={testId}
          aria-describedby="inputField"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
      )}
      {error && error.error && <span className="text-danger">{error.message}</span>}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validators: PropTypes.array,
  label: PropTypes.string,
  testId: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.string,
  extraProps: PropTypes.object,
};

InputField.defaultProps = {
  validators: [],
  label: '',
  testId: '',
  placeholder: '',
  field: '',
  type: 'text',
  extraProps: {},
};

export default InputField;
