import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./Footer.scss";

/** Footer Component
 * @name Footer
 * @param {string} id, inherited ID from parent
 * @param {number} count, number of notes
 * @param {function} open, parent function to open new note modal
 * @return {Component} Footer
 * */

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

Footer.propTypes = {
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  // this is a function
  open: PropTypes.bool.isRequired
};

export default Footer;
