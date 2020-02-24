import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { footer } from "constants/catalogue";

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
          {footer.withNotes} <span> {count} </span>
        </Fragment>
      ) : (
        footer.noNotes
      )}
    </p>
    <i role="button" className="plus big icon" onClick={open} />
  </footer>
);

Footer.propTypes = {
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  open: PropTypes.func.isRequired
};

export default Footer;
