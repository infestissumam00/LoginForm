import React from 'react';
import PropTypes from 'prop-types';

import './checkboxStyle.scss';

const Checkbox = ({ testId, label, selected, disabled, onChange }) => {
  const handleChange = event => {
    event.preventDefault();
    onChange(event.target.checked);
  };

  return (
    <label className="checkbox-container" data-test={testId}>
      <p className="label">{label}</p>
      <input type="checkbox" checked={selected} onChange={handleChange} disabled={disabled} />
      <span className="checkmark"> </span>
    </label>
  );
};

Checkbox.defaultProps = {
  testId: '',
  disabled: false,
};

Checkbox.propTypes = {
  testId: PropTypes.string,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
