import React, { Fragment, useState, useEffect } from "react";

import { addNoteFields } from "./constants";
import { errors } from "./constants/catalog";
import { useGetRequest } from "./hooks/useGetRequest";
import { addNote as addNoteRequest, getNotes, validateField } from "./utils";

import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Modal from "./components/Modal";

import "./styles/global.scss";

const App = () => {
  const id = "application";

  const [messageErrors, setMessageErrors] = useState([]);

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
    const { errors } = validateField(
      note.length < 25,
      "Note must contain more than 25 characters",
      messageErrors
    );

    errors && setMessageErrors(errors);

    if (messageErrors.length > 0) {
      setTitle("addNote() form error:");
      setMessage(
        `Form contains the following error: ${messageErrors.join(", ")}.`
      );
      setStatus("red");
      setMessageErrors([]);
    }
  };

  /** Submits the POST request to the API
   * @name addNote
   * @dev this requests tests basic validation between UI and API
   * @param {string} subject, contains note's subject value
   * @param {string} note, contains note's note value
   * @returns /addNote route response, or validation message
   * */

  const addNote = async (subject, note) => {
    validateAddNote(subject, note);

    if (messageErrors.length === 0) {
      const request = {
        subject,
        note
      };

      const response = await addNoteRequest(request);

      if (!response.status) {
        setTitle("addNote() error(s)");
        setMessage(response);
        return setStatus("red");
      }
      if (response.data.note) {
        const {
          data: { status }
        } = response;

        setTitle("addNote() added!");
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
    // TODO - improve look and feel on no notes
    if (data.length === 0) {
      const noNotes = errors.noNotes;
      noNotes.icon = "exclamation";
      return <Note id={`${id}-no-notes`} data={noNotes} />;
    }
    return data.map((object, index) => {
      return <Note key={id + index} id={`${id}-${index}`} data={object} />;
    });
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
      <Footer id={id} open={() => setShowModal(true)} count={notes.length} />
    </Fragment>
  );
};

export default App;
