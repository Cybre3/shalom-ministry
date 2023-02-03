import React from 'react';

const CustomInput = ({ name, label, error, ...rest }) => {
  return (
    <div className="inputbox">
      <input {...rest} name={name} id={name} />
      <i>{label}</i>
      {error && <div className="alert alert-danger" style={{zIndex: 5, position: 'relative'}}>{error}</div>}
    </div>
  );
};

export default CustomInput;