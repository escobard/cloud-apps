import React, { useState, useEffect, useContext } from "react";

import { addNote as addNoteRequest, getNotes } from "utils";

import { NotesContext } from "providers/notes";

import { useGetRequest } from "hooks";

import Form from "components/Form";
import Note from "components/Note";

import "styles/global.scss";

import { addNoteFields, notes as noteCatalog } from "../../constants";

const Home = () => {
  // TODO move to provider
  const [notes, setNotes] = useState([]);

  const { data: fetchedNotes } = useGetRequest(getNotes);
  const { renderModal, closeModal } = useContext(NotesContext);

  // TODO - remove after context refactor, should be unecessary
  useEffect(() => {
    setNotes(fetchedNotes);
  }, [fetchedNotes]);

  // TODO move to provider
  const addNote = async (subject, note) => {
    const request = {
      // TODO - this should come from authentication token after phase 4
      user_id: 1,
      subject,
      note
    };

    await addNoteRequest(request);

    // TODO - update with openModal when refactored
    setTimeout(() => {
      closeModal();
    }, 500);
  };

  const renderNotes = (id, data) => {
    // with data
    if (Array.isArray(data) && data.length > 0) {
      return data.map((object, index) => {
        return <Note key={id + index} id={`${id}-${index}`} data={object} />;
      });
    }

    // error
    if (!Array.isArray(data) && data.length > 0) {
      noteCatalog.apiError.note = data;
      return <Note id={`${id}-no-notes`} data={noteCatalog.apiError} />;
    }

    // initial
    return <Note id={`${id}-no-notes`} data={noteCatalog.noNotes} />;
  };

  return (
      <>
          <main className="home">
            {renderModal({
              title: "Add note",
              content: <Form submit={addNote} fields={addNoteFields} />
            })}
            {notes && renderNotes("notes", notes)}
          </main>
      </>
  );
};

export default Home;
