import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { validateInput } from 'library/utilities/Validators';

const Dropdown = ({
  value,
  field,
  label,
  testId,
  options,
  isMulti,
  validators,
  placeholder,
  isSearchable,
  isDisabled,
  onChange,
}) => {
  const [error, setError] = useState(null);

  const handleChange = selectedOption => {
    const inputError = validateInput(validators, selectedOption);
    setError(inputError);
    onChange(selectedOption, field, inputError);
  };

  return (
    <div className="app-dropdown">
      {label !== '' ? <label>{label}</label> : null}
      <Select
        data-test={testId}
        value={value}
        options={options}
        isMulti={isMulti}
        isDisabled={isDisabled}
        placeholder={placeholder}
        isSearchable={isSearchable}
        onChange={handleChange}
      />
      {error && error.error && <span className="text-danger">{error.message}</span>}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  isMulti: PropTypes.bool,
  placeholder: PropTypes.string,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  validators: PropTypes.array,
  value: PropTypes.array,
  testId: PropTypes.string,
  field: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  isMulti: false,
  placeholder: 'Please select',
  isSearchable: false,
  isDisabled: false,
  validators: [],
  testId: '',
  field: '',
  value: [],
  label: '',
};
