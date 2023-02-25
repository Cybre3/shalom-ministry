import React from 'react';

function FooterSection(props) {
  return (
    <div className="footer-section">
      <h4 className="footer-section-header">{props.header}</h4>
      {props.list
        ? props.list.map((item) => (
            <a key={item.title} href={item.link}>
              {item.title}
            </a>
          ))
        : <p>Coming Soon...</p>}
    </div>
  );
}

export default FooterSection;
