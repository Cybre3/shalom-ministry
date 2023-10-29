import React from 'react';
import Card from '../Card';
import './categoryCardNoPic.css';
import { NavLink } from 'react-router-dom';

class CategoryCardNoPic extends Card {
  render() {
    return (
      <NavLink
        to={`/${this.props.path || this.props.id}`}
        className="category-card block text-center h-80 w-52 bg-gray-500 pt-4 text-white text-lg rounded-md hover:cursor-pointer hover:-translate-y-3 hover:duration-300 hover:ease-out ease-in duration-300 z-20"
        id={this.props.id}
      >
        {this.renderCategory(this.props.title)}
      </NavLink>
    );
  }
}

export default CategoryCardNoPic;
