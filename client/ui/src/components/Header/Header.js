import React from "react";
import PropTypes from "prop-types";

import { header } from "../../constants/catalog";

import "./Header.scss";

const Header = ({ date }) => (
  <nav>
    <i aria-label="Menu" className="bars big icon" />
    <h1>{header.title}</h1>
    <p>{date}</p>
  </nav>
);

Header.propTypes = {
  date: PropTypes.string,
};

Header.defaultProps = {
  date: header.todayDate,
};

export default Header;
