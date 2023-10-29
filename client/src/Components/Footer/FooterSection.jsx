import React from 'react';
import { NavLink } from 'react-router-dom';

function FooterSection(props) {
  return (
    <div className="my-6 space-y-2 text-sm lg:text-lg">
      <NavLink to={props.path}>
        <h2 className="text-lg font-bold">{props.header}</h2>
      </NavLink>

      {props.list.map((item) => (
        <div key={item.title} className="flex justify-center gap-1">
          <h5>{item.title}</h5>
          <p>{item.data}</p>
        </div>
      ))}
    </div>
  );
}

export default FooterSection;
