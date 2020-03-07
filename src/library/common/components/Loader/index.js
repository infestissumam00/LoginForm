import React from 'react';

const Loader = () => (
  <div className="d-flex h-100 w-100 justify-content-center align-items-center">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Loader;
