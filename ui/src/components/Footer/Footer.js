import React from "react";

import "./Footer.scss";

const Footer = ({ id, count, open }) => {
  const footerId = `${id}-footer`;

  return (
    <footer id={footerId}>
      <p>
        COMPLETED <span>{count}</span>
      </p>
      <i aria-hidden="true" className="plus big icon" onClick={open} />
    </footer>
  );
};

export default Footer;
