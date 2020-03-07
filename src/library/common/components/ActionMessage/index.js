import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ActionMessage = ({ message, type, backRoute }) => {
  const displayStyle = () => {
    if (type === 'Error') {
      return 'alert-danger';
    }

    if (type === 'Success') {
      return 'alert-success';
    }

    if (type === 'warning') {
      return 'alert-warning';
    }
  };

  return (
    <div>
      <div className={`alert ${displayStyle()}`} role="alert">
        <strong>{type}!</strong> {message}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {backRoute && (
        <NavLink className="btn btn-primary mt-2" to={backRoute}>
          <i className="fa fa-arrow-circle-o-left mr-2" aria-hidden="true" />
          Go Back
        </NavLink>
      )}
    </div>
  );
};

ActionMessage.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  backRoute: PropTypes.string,
};

ActionMessage.defaultProps = {
  type: null,
  message: null,
  backRoute: null,
};

export default ActionMessage;
