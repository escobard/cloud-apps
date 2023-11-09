import React, { useContext } from "react";

import { NotesContext } from "../../providers";

import { Note } from "../../components";

import "../../styles/global.scss";

import Form from "./Form";
import { addNoteFields, notes as noteCatalog } from "../../constants";

const Home = () => {
  const { renderModal, notes, updateNotes } = useContext(NotesContext);

  const renderNotes = (id, data) => {
    const hasData = Array.isArray(data) && data.length > 0;
    const hasNoData = !Array.isArray(data) && data.length > 0;

    if (hasData) {
      return data.map((note) => {
        return <Note key={note.subject} data={note} />;
      });
    }

    if (hasNoData) {
      noteCatalog.apiError.note = data;
      return <Note data={noteCatalog.apiError} />;
    }

    return <Note data={noteCatalog.noNotes} />;
  };

  return (
    <>
      <main className="home">
        {renderModal({
          title: "Add note",
          content: <Form submit={updateNotes} fields={addNoteFields} />,
        })}
        {notes && renderNotes("notes", notes)}
      </main>
    </>
  );
};

export default Home;
