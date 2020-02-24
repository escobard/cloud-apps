import React from "react";

import "./Header.scss";

/** Header Component
 * @name Header
 * @param {string} id, inherited ID from parent
 * @return {Component} Header
 * */

const Header = ({ id }) => (
  <nav id={`${id}-navigation`}>
    <i aria-hidden="true" className="bars big icon" />
    <h1>
      Your <br />
      Notes
    </h1>
    <p>Nov 5, 2019</p>
  </nav>
);

export default Header;
