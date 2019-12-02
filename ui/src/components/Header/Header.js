import React from "react";

import "./Header.scss"

// needs to all sections as anchor links
// look for css highlight options when section is selected
const Header = () => (
    <nav id="navigation">
        <i aria-hidden="true" className="bars big icon"></i>
        <h1>Your <br/>
            Notes</h1>
        <p>Nov 5, 2019</p>
    </nav>
);

export default Header;
