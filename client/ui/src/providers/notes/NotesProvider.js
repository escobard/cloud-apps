import React from "react";

import { useModal } from "hooks";

export const NotesContext = React.createContext([{}, () => {}]);

const NotesProvider = ({ children }) => {
  const { showModal, openModal, closeModal, renderModal } = useModal();

  return (
    <NotesContext.Provider
      value={{ showModal, openModal, closeModal, renderModal }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
