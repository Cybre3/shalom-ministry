import React, { Component } from 'react';

class Card extends Component {
  renderCategory = (label) => {
    return <h2 className="card-name">{label}</h2>;
  };

  renderPicture = (label, source) => {
    return <img src={source} alt={label} className="card-pic" />;
  };

  renderDescription = (desciption) => {
    return <p className="card-desciption">{desciption}</p>;
  };
}

export default Card;
