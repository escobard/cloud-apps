import React from "react";
import PropTypes from "prop-types";

import { header } from "constants/catalog";

import "./Header.scss";

/** Header Component
 * @name Header
 * @param {string} id, inherited ID from parent
 * @param {string} date, today's date
 * @return {Component} Header
 * */

const Header = ({ id, date }) => (
  <nav id={`${id}-navigation`}>
    <i aria-hidden="true" className="bars big icon" />
    <h1>{header.title}</h1>
    <p>{date}</p>
  </nav>
);

Header.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string
};

Header.defaultProps = {
  date: header.todayDate
};

export default Header;
