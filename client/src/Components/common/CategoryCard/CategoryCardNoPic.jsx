import React from 'react';
import Card from '../Card';
import './categoryCardNoPic.css';

class CategoryCardNoPic extends Card {
  render() {
    return (
      <div className="category-card" id={this.props.id}>
        {this.renderCategory(this.props.title)}
      </div>
    );
  }
}

export default CategoryCardNoPic;
