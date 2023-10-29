import React from 'react';
import CategoryCardNoPic from '../common/CategoryCard/CategoryCardNoPic';

function CategoryLinks(props) {
  return (
    <div className="home-category-cards relative -mt-16 hidden w-full justify-center space-x-4 duration-1000 xl:flex">
      <CategoryCardNoPic title="Events" id="events" />
      <CategoryCardNoPic title="Give" id="give" path="give/new" />
      <CategoryCardNoPic title="Get Involved" id="get-involved" />
      <CategoryCardNoPic title="Testimonies" id="testimonies" />
    </div>
  );
}

export default CategoryLinks;