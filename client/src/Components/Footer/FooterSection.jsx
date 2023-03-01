import React from 'react';

function FooterSection(props) {
  return (
    <div className="footer-section">
      <h4 className="footer-section-header">{props.header}</h4>
      {props.list ? (
        props.list.map((item) => (
          <React.Fragment key={item.title}>
            <h5 href={item.link}>{item.title}</h5>
            <p>{item.data}</p>
          </React.Fragment>
        ))
      ) : (
        <p>Coming Soon...</p>
      )}
    </div>
  );
}

export default FooterSection;
