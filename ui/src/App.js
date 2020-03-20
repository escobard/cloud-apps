import React, { Fragment, useState, useEffect } from "react";

import { addNoteFields, notes as noteCatalog } from "./constants";
import { useGetRequest } from "hooks/useGetRequest";
import { addNote as addNoteRequest, getNotes, validateField } from "utils";

import Header from "components/Header";
import Form from "components/Form";
import Footer from "components/Footer";
import Note from "components/Note";
import Modal from "components/Modal";

import "./styles/global.scss";

const App = () => {
  const id = "application";

  const [title, setTitle] = useState("");

  const [message, setMessage] = useState("");

  const [status, setStatus] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [notes, setNotes] = useState([]);

  const formMessage = status
    ? {
        status,
        title,
        message
      }
    : null;

  const { data: fetchedNotes } = useGetRequest(getNotes);

  useEffect(() => {
    setNotes(fetchedNotes);
  }, [fetchedNotes]);

  /** Validates addNote values
   * @name validateAddNote
   * @dev used to reduce clutter in makeDonation
   * @param {string} subject, contains random string value
   * @param {string} note, contains random string value with a length greater than 10
   * */

  const validateAddNote = (subject, note) => {
    let errors = [];

    let subjectError = validateField(
      subject.length < 5,
      "Subject must contain more than 5"
    );

    subjectError && errors.push(subjectError);

    let noteError = validateField(
      note.length < 25,
      "Note must contain more than 25 characters"
    );

    noteError && errors.push(noteError);

    if (errors.length > 0) {
      setTitle("Note form error:");
      setMessage(`Form contains the following error(s): ${errors.join(", ")}.`);
      setStatus("red");
    }

    return errors.length > 0;
  };

  /** Submits the POST request to the API
   * @name addNote
   * @dev this requests tests basic validation between UI and API
   * @param {string} subject, contains note's subject value
   * @param {string} note, contains note's note value
   * @returns /addNote route response, or validation message
   * */

  const addNote = async (subject, note) => {
    const hasErrors = validateAddNote(subject, note);

    if (!hasErrors) {
      const request = {
        // TODO - this should come from authentication token after phase 4
        user_id: 1,
        subject,
        note
      };

      const response = await addNoteRequest(request);

      if (!response.status) {
        setTitle("Note form error(s)");
        setMessage(response);
        return setStatus("red");
      }

      if (response.data.note) {
        const {
          data: { status }
        } = response;

        setTitle("Note added!");
        setMessage(status);
        setStatus("green");

        const notes = await getNotes();

        // add timeout here to close out modal on note creation
        setTimeout(async () => {
          setNotes(notes);
          setShowModal(false);
          return setStatus(false);
        }, 500);
      }
    }
  };

  /** Renders Notes based on API response
   * @name renderNotes
   * @dev used to render multiple notes
   * @param {string} id, contains inherited id
   * @param {array} data, contains array of note objects
   * @returns  no note message || one or more <Note />
   * */

  const renderNotes = (id, data) => {
    console.log("data", notes);

    // with data
    if (Array.isArray(data) && data.length > 0){
      return data.map((object, index) => {
        return <Note key={id + index} id={`${id}-${index}`} data={object} />;
      });
    }

    // error
    if(!Array.isArray(data) && data.length > 0){
      noteCatalog.apiError.note = data;
      return <Note id={`${id}-no-notes`} data={noteCatalog.apiError} />
    }

    // no data / initial
    return <Note id={`${id}-no-notes`} data={noteCatalog.noNotes} />;

  };
  return (
    <Fragment>
      <Header id={id} />
      <div className="divider" />
      <main id={id} className="application">
        <Modal
          id={id}
          title="Add Note"
          open={showModal}
          // TODO - reset errors to default on close
          close={() => setShowModal(false) && setStatus(false)}
          content={
            <Form
              id={id}
              message={formMessage}
              addNote={addNote}
              fields={addNoteFields}
            />
          }
        />
        {renderNotes(id, notes)}
      </main>
      <Footer id={id} open={() => setShowModal(true)} count={notes.length} hasError={!Array.isArray(notes)}/>
    </Fragment>
  );
};

export default App;
