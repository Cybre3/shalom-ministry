import React from 'react';
import Card from '../Card';
import './categoryCardNoPic.css';
import { NavLink } from 'react-router-dom';

class CategoryCardNoPic extends Card {
  render() {
    return (
      <NavLink to={`/${this.props.id}`} className="category-card" id={this.props.id}>
        {this.renderCategory(this.props.title)}
      </NavLink>
    );
  }
}

export default CategoryCardNoPic;
