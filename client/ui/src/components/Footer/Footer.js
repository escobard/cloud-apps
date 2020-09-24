import React, { useContext } from "react";
import PropTypes from "prop-types";
import { HomeContext } from "providers/home";

import { footer } from "constants/catalog";

import "./Footer.scss";

const Footer = ({ count, hasError }) => {

  const { openModal } = useContext(HomeContext);

  return (
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
      <i role="button" className="plus big icon" onClick={openModal} />
    </footer>
  );
};

Footer.propTypes = {
  count: PropTypes.number,
  hasError: PropTypes.bool.isRequired
};

Footer.defaultProps = {
  count: 0
};

export default Footer;
