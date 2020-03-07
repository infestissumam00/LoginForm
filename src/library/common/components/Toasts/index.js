import React from 'react';

const Toast = () => {
  return (
    <div aria-live="polite" aria-atomic="true" className="position-fixed" style={{ minHeight: '200px', right: '20px' }}>
      <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <img src="..." className="rounded mr-2" alt="..." />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  );
};

export default Toast;
