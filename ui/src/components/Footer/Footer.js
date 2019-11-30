import React from "react";

import "./Footer.scss";

const Footer = ({ id, notesTotal }) => {
    const footerId = `${id}-footer`;

    return (
        <footer id={footerId}>
            <p>
                COMPLETED <span id={`${footerId}-counter`}>5</span>
            </p>
        </footer>
    );
};

export default Footer;
