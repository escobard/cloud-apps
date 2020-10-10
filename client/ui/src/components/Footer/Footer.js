import React, { useContext } from "react";

import { useLocation } from "react-router-dom";

import { NotesContext } from "providers";

// TODO - fix constant absolute import to allow more readable imports
import { footer } from "constants/catalog";

import "./Footer.scss";

const Footer = () => {
  const { openModal, notes } = useContext(NotesContext);
  const { pathname } = useLocation();

  const hasNotes = notes && notes.length >= 1;
  const isHome = pathname === "/";

  return (
    <footer>
      {hasNotes && isHome ? (
        <>
          <p>
            {footer.withNotes} <span> {notes.length} </span>
          </p>
          <i
            aria-label="Add note"
            role="button"
            className="plus big icon"
            onClick={openModal}
            tabIndex={0}
            onKeyDown={e => {
              e.key === "Enter" && openModal();
            }}
          />
        </>
      ) : (
        <p>{footer.noNotes}</p>
      )}
    </footer>
  );
};

export default Footer;
