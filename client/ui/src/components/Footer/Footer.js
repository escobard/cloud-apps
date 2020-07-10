import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { footer } from "constants/catalog";

import "./Footer.scss";

/** Footer Component
 * @param {number} count, number of notes
 * @param {function} open, parent function to open new note modal
 * @param {boolean} hasError, has errors
 * @return {Component} Footer
 * */

const Footer = ({ count, open, hasError }) => (
  <footer className={hasError ? "error" : undefined}>
    <p>
      {count >= 1 ? (
        <>
          {footer.withNotes} <span> {count} </span>
        </>
      ) : (
        <>{footer.noNotes}</>
      )}
    </p>
    <i role="button" className="plus big icon" onClick={open} />
  </footer>
);

Footer.propTypes = {
  count: PropTypes.number,
  open: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired
};

Footer.defaultProps = {
  count: 0
};

export default Footer;
