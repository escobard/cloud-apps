import React from "react";

import "./Header.scss";

const Header = () => (
  <nav id="navigation">
    <i aria-hidden="true" className="bars big icon" />
    <h1>
      Your <br />
      Notes
    </h1>
    <p>Nov 5, 2019</p>
  </nav>
);

export default Header;
