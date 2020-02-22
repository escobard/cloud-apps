import React, { Fragment } from "react";

import "./Footer.scss";

/** Footer Component
 * @name Footer
 * @param {string} id, inherited ID from parent
 * @param {number} count, number of notes
 * @param {function} open, parent function to open new note modal
 * @return {Component} Footer
 **/

const Footer = ({ id, count, open }) => (
  <footer id={`${id}-footer`}>
    <p>
      {count >= 1 ? (
        <Fragment>
          COMPLETED <span> {count} </span>
        </Fragment>
      ) : (
        "NO NOTES"
      )}
    </p>
    <i aria-hidden="true" className="plus big icon" onClick={open} />
  </footer>
);

export default Footer;
