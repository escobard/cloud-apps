import React from "react";

import { useModal, useNotes } from "hooks";

export const NotesContext = React.createContext([{}, () => {}]);

const NotesProvider = ({ children }) => {
  const { showModal, openModal, closeModal, renderModal } = useModal();
  const { loading, notes, note, getNotes, addNotes } = useNotes();

  return (
    <NotesContext.Provider
      value={{
        showModal,
        openModal,
        closeModal,
        renderModal,
        loading,
        notes,
        note,
        getNotes,
        addNotes
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
