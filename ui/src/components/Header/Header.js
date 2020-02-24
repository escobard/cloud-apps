import React from "react";

import "./Header.scss";

/** Header Component
 * @name Header
 * @param {string} id, inherited ID from parent
 * @param {string} date, today's date
 * @return {Component} Header
 * */

const Header = ({ id, date  }) => (
  <nav id={`${id}-navigation`}>
    <i aria-hidden="true" className="bars big icon" />
    <h1>
      Your Notes
    </h1>
    <p>{date}</p>
  </nav>
);

export default Header;
