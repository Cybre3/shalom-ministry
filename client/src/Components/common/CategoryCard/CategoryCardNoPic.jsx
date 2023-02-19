import React from 'react';
import Card from '../Card';
import './categoryCardNoPic.css';

class CategoryCardNoPic extends Card {
  render() {
    const divImage = `url(${this.props.bgImage})`;
    return (
      <div className="category-card" style={{ backgroundImage: { divImage } }}>
        {this.renderCategory(this.props.title)}
      </div>
    );
  }
}

export default CategoryCardNoPic;
