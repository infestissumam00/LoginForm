import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ styleClass, disabled, testId, value, onClick, loading, type, icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      data-test={testId}
      type={type}
      className={`btn rounded-1 ${styleClass}`}>
      {!loading && value && <span className={icon && 'pr-3 font-weight-bold'}>{value}</span>}
      {!loading && icon && <span className={`fa ${icon}`} />}
      {loading && <span className="fa fa-spinner fa-pulse" />}
    </button>
  );
};

export default Button;

Button.propTypes = {
  styleClass: PropTypes.string,
  testId: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
  styleClass: 'btn-success',
  testId: '',
  value: '',
  icon: '',
  loading: false,
  disabled: false,
};
