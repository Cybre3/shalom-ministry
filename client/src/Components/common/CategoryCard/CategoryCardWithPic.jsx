import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../Card';
import './categoryCardWithPic.css';

class CategoryCardWithPic extends Card {
  render() {
    return (
      <div className="category-card">
        {this.renderPicture(this.props.title, this.props.image)}
        {this.renderCategory(this.props.title)}
        {this.renderDescription(this.props.description)}
        <NavLink>Learn More{'>'}</NavLink>
      </div>
    );
  }
}

export default CategoryCardWithPic;
