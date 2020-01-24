import React, { Component, Fragment, useState, useEffect } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Modal from "./components/Modal";

import { addNoteFields } from "./constants";
import { addNote, getNotes } from "./utils/requests";

import "./styles/global.scss";

const AppNew = () => {
  const [messageErrors, setMessageErrors] = useState([]),
    [title, setTitle] = useState("Post Form"),
    [message, setMessage] = useState(
      "Follow the placeholder instructions to validate data on the UI and API side"
    ),
    [status, setStatus] = useState(false),
    [show, setShow] = useState(false),
    [notes, setNotes] = useState([]);

  // TODO - refactor to standalone hook when working
  useEffect(async () => {
    const notes = await getNotes();
    setNotes(notes);
  }, []);

  /** Submits the POST request to the API
   * @name addNote
   * @dev this requests tests basic validation between UI and API
   * @param {string} subject, contains note's subject value
   * @param {string} note, contains note's note value
   * @returns /addNote route response, or validation message
   **/

  const addNote = async (subject, note) => {
    // triggers validation logic
    validateAddNote(subject, note);

    // only runs request, if no validation message are present
    if (messageErrors.length === 0) {
      const request = {
        subject,
        note
      };

      let response = await addNote(request);

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
        setStatus("red");

        const notes = await getNotes();

        // add timeout here to close out modal on note creation
        setTimeout(async () => {
          setNotes(notes);
          setShow(false);
          setStatus(false);
        }, 500);
      }
    }
  };

  /** Validates a form value
   * @dev can be split out into a validation class to re-use in api / ui layers
   * @param {*} condition, functional condition to validate / invalidate value
   * @param {string} error, string of error to add to this.state.message
   **/

  const validateField = (condition, error) => {
    if (condition) {
      this.setState({ messageErrors: this.state.messageErrors.push(error) });
    }
  };

  /** Validates addNote values
   * @name validateAddNote
   * @dev used to reduce clutter in makeDonation
   * @param {string} subject, contains random string value
   * @param {string} note, contains random string value with a length greater than 10
   **/

  const validateAddNote = (subject, note) => {
    validateField(
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
};

class App extends Component {
  state = {
    messageErrors: [],
    title: "Post Form",
    message:
      "Follow the placeholder instructions to validate data on the UI and API side",
    status: false,
    show: false,
    notes: []
  };

  async componentDidMount() {
    const notes = await getNotes();
    this.setState({ notes });
  }

  open = size => () => this.setState({ size, show: true });
  close = () => this.setState({ show: false, status: false });

  /** Submits the POST request to the API
   * @name addNote
   * @dev this requests tests basic validation between UI and API
   * @param {string} subject, contains note's subject value
   * @param {string} note, contains note's note value
   * @returns /addNote route response, or validation message
   **/

  addNote = async (subject, note) => {
    let { messageErrors } = this.state;

    // triggers validation logic
    this.validateAddNote(subject, note);

    // only runs request, if no validation message are present
    if (messageErrors.length === 0) {
      const request = {
        subject,
        note
      };

      let response = await addNote(request);

      // checks for API promise rejections
      if (!response.status) {
        return this.setState({
          title: "addNote() error(s)",
          message: response,
          status: "red"
        });
      } else if (response.data.note) {
        const {
          data: { status }
        } = response;

        this.setState({
          title: "addNote() added!",
          message: status,
          status: "green"
        });

        const notes = await getNotes();

        // add timeout here to close out modal on note creation
        setTimeout(async () => {
          this.setState({ notes });
          this.close();
        }, 500);
      }
    }
  };

  /** Resets the message array after form validation checks
   * @returns this.setState()
   **/

  emptyErrors = () => {
    this.setState({
      messageErrors: []
    });
  };

  /** Validates a form value
   * @dev can be split out into a validation class to re-use in api / ui layers
   * @param {*} value, property to validate
   * @param {*} condition, functional condition to validate / invalidate value
   * @param {string} error, string of error to add to this.state.message
   **/

  validateField = (value, condition, error) => {
    if (condition) {
      this.setState({ messageErrors: this.state.messageErrors.push(error) });
    }
  };

  /** Validates addNote values
   * @name validateAddNote
   * @dev used to reduce clutter in makeDonation
   * @param {string} subject, contains random string value
   * @param {string} note, contains random string value with a length greater than 10
   **/

  validateAddNote = (subject, note) => {
    let { messageErrors } = this.state;

    this.validateField(
      note,
      note.length < 25,
      "Note must contain more than 25 characters"
    );

    // sets messagesState
    if (messageErrors.length > 0) {
      this.setState({
        status: "red",
        title: "addNote() form error:",
        message: `Form contains the following error: ${messageErrors.join(
          ", "
        )}.`
      });
      this.emptyErrors();
    } else {
      this.setState({
        status: "green",
        title: "addNote() validated",
        message: `Adding note...`
      });
    }
  };

  /** Renders Notes based on API response
   * @name renderNotes
   * @dev used to render multiple notes
   * @param {array} data, contains random string value
   * @returns one or more <Note />
   **/

  renderNotes(id, data) {
    if (data.length === 0) {
      return <p>No notes</p>;
    }
    return data.map((object, index) => {
      return <Note key={id + index} id={`${id}-${index}`} data={object} />;
    });
  }

  render() {
    const id = "application";

    let { title, message, status, show, notes } = this.state;

    const note = {
      title: "Test title",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nulla sit amet nibh sagittis eleifend. Cras a lacus rutrum ipsum pretium scelerisque sed eu turpis. ",
      date: "9 am"
    };

    const formMessage = status
      ? {
          color: status,
          header: title,
          content: message
        }
      : null;

    return (
      <Fragment>
        <Header />
        <div className="divider" />
        <main id={id} className="application">
          <Modal
            id={id}
            title="Add Note"
            open={show}
            close={this.close}
            content={
              <Form
                id={id}
                message={formMessage}
                addNote={this.addNote}
                fields={addNoteFields}
              />
            }
          />
          {this.renderNotes(id, notes)}
          <Footer id={id} open={this.open()} />
        </main>
      </Fragment>
    );
  }
}

export default App;
