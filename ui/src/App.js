import React, { Component, Fragment, useState, useEffect } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Modal from "./components/Modal";

import { addNoteFields } from "./constants";
import { addNote as addNoteRequest, getNotes } from "./utils/requests";

import "./styles/global.scss";

const App = () => {
  const id = "application";

  const [messageErrors, setMessageErrors] = useState([]),
    [title, setTitle] = useState("Post Form"),
    [message, setMessage] = useState(
      "Follow the placeholder instructions to validate data on the UI and API side"
    ),
    [status, setStatus] = useState(false),
    [show, setShow] = useState(false),
    [notes, setNotes] = useState([]);

  // TODO - make the properties consistent at the form level
  const formMessage = status
    ? {
        color: status,
        header: title,
        content: message
      }
    : null;

  // TODO - refactor to standalone hook when working
  useEffect(async () => {
    const notes = await getNotes();
    setNotes(notes);
    console.log("NOTES INIT", notes);
  }, []);

  /** Submits the POST request to the API
   * @name addNote
   * @dev this requests tests basic validation between UI and API
   * @param {string} subject, contains note's subject value
   * @param {string} note, contains note's note value
   * @returns /addNote route response, or validation message
   **/

  const addNote = async (subject, note) => {
    console.log("NOTE ADDNOTE", note);
    // triggers validation logic
    validateAddNote(subject, note);

    // only runs request, if no validation message are present
    if (messageErrors.length === 0) {
      const request = {
        subject,
        note
      };

      let response = await addNoteRequest(request);

      // checks for API promise rejections
      if (!response.status) {
        setTitle("addNote() error(s)");
        setMessage(response);
        return setStatus("red");
      } else if (response.data.note) {
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
          setShow(false);
         return  setStatus(false);
        }, 500);
      }
    }
  };

  // TODO refactor to util
  /** Validates a form value
   * @dev can be split out into a validation class to re-use in api / ui layers
   * @param {*} condition, functional condition to validate / invalidate value
   * @param {string} error, string of error to add to this.state.message
   **/

  const validateField = (value, condition, error) => {
    if (condition) {
      const errors = messageErrors;
      errors.push(error);
      setMessageErrors(errors);
    }
  };

  /** Validates addNote values
   * @name validateAddNote
   * @dev used to reduce clutter in makeDonation
   * @param {string} subject, contains random string value
   * @param {string} note, contains random string value with a length greater than 10
   **/

  const validateAddNote = (subject, note) => {
    console.log("NOTE", note);
    validateField(
      note,
      note.length < 25,
      "Note must contain more than 25 characters"
    );

    // sets messagesState
    if (messageErrors.length > 0) {
      setTitle("addNote() form error:");
      setMessage(
        `Form contains the following error: ${messageErrors.join(", ")}.`
      );
      setStatus("red");
      setMessageErrors([]);
    } else {
      setTitle("addNote() validated");
      setMessage("Adding note...");
      setStatus("green");
    }
  };

  /** Renders Notes based on API response
   * @name renderNotes
   * @dev used to render multiple notes
   * @param {string} id, contains inherited id
   * @param {array} data, contains random string value
   * @returns one or more <Note />
   **/

  const renderNotes = (id, data) => {
    if (data.length === 0) {
      return <p>No notes</p>;
    }
    return data.map((object, index) => {
      return <Note key={id + index} id={`${id}-${index}`} data={object} />;
    });
  };

  return (
    <Fragment>
      <Header />
      <div className="divider" />
      <main id={id} className="application">
        <Modal
          id={id}
          title="Add Note"
          open={show}
          close={() => (setShow(false), setStatus(false))}
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
        <Footer id={id} open={() => setShow(true)} count={notes.length}/>
      </main>
    </Fragment>
  );
};

export default App;
