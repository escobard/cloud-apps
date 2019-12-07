import React from "react";

import "./Footer.scss";

const Footer = ({ id, notesTotal, open }) => {
  const footerId = `${id}-footer`;

  return (
    <footer id={footerId}>
      <p>
        COMPLETED <span>5</span>
      </p>
      <i aria-hidden="true" className="plus big icon" onClick={open} />
    </footer>
  );
};

export default Footer;
