import React from 'react';

function ErrorMessage({ error }) {
  return (
    <div className="alert alert-danger" style={{ zIndex: 1 }}>
      {error}
    </div>
  );
}

export default ErrorMessage;
