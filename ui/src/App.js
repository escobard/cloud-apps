import React, { Component, Fragment } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Modal from "./components/Modal";

import { addNoteFields } from "./constants";
import { addNote } from "./utils/requests";

import "./styles/global.scss";

class App extends Component {
  state = {
    messageErrors: [],
    addNoteTitle: "Post Form",
    addNoteMessage:
      "Follow the placeholder instructions to validate data on the UI and API side",
    addNoteStatus: null
  };

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  /** Submits the POST request to the API
   * @name addNote
   * @dev this requests tests basic validation between UI and API
   * @param {string} subject, contains note's subject value
   * @param {string} description, contains note's description value
   * @returns /addNote route response, or validation errors
   **/

  addNote = async (subject, description) => {
    let { messageErrors } = this.state;

    // triggers validation logic
    this.validateAddNote(subject, description);

    // only runs request, if no validation errors are present
    if (messageErrors.length === 0) {
      const request = {
        subject,
        description,
      };

      let response = await addNote(request);

      // checks for API promise rejections
      if (!response.status) {
        return this.setState({
          addNoteTitle: "addNote() error(s)",
          addNoteMessage: response,
          addNoteStatus: "red"
        });
      } else if (response.data.result === "validated") {
        const {
          data: { status }
        } = response;

        this.setState({
          addNoteTitle: "addNote() validated!",
          addNoteMessage: status,
          addNoteStatus: "green"
        });
      }
    }
  };

  /** Validates a form value
   * @dev can be split out into a validation class to re-use in api / ui layers
   * @param {*} value, property to validate
   * @param {*} condition, functional condition to validate / invalidate value
   * @param {string} error, string of error to add to this.state.errors
   **/

  validateField = (value, condition, error) => {
    if (condition) {
      this.setState({ messageErrors: this.state.messageErrors.push(error) });
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

  /** Validates addNote values
   * @name validateaddNote
   * @dev used to reduce clutter in makeDonation
   * @param {string} subject, contains random string value
   * @param {string} description, contains random string value with a length greater than 10
   **/

  validateAddNote = (subject, description) => {
    let { messageErrors } = this.state;

    this.validateField(
      description,
      description.length < 25,
      "Description Length must be greater than 25"
    );

    // sets messagesState
    if (messageErrors.length > 0) {
      this.setState({
        addNoteStatus: "red",
        addNoteTitle: "addNote() form error(s)",
        addNoteMessage: `Form contains the following error(s): ${messageErrors.join(
          ", "
        )}.`
      });
      this.emptyErrors();
    } else {
      this.setState({
        addNoteStatus: "green",
        addNoteTitle: "addNote() validated",
        addNoteMessage: `Adding note...`
      });
    }
  };

  render() {
    const id = "application";

    let { addNoteTitle, addNoteMessage, addNoteStatus, open } = this.state;

    const note = {
      title: "Test title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nulla sit amet nibh sagittis eleifend. Cras a lacus rutrum ipsum pretium scelerisque sed eu turpis. ",
      date: "9 am"
    };

    return (
      <Fragment>
        <Header />
        <div className="divider" />
        <main id={id} className="application">
          <Modal
            id={id}
            title="Add Note"
            open={open}
            close={this.close}
            content={
              <Form id={id} addNote={this.addNote} fields={addNoteFields} />
            }
          />
          <Note data={note} id={id} />
          <Footer id={id} show={this.show()} />
        </main>
      </Fragment>
    );
  }
}

export default App;
