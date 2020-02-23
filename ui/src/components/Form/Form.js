import React, { Fragment, useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";

import "./Form.scss";

/** Dynamically creates a form from the data provided via props.fields
 * @name DynamicForm
 * @dev renders an infinite number of fields based on props.fields, very powerful and expandable
 * @param {string} id, inherited id from parent
 * @param {object[]} fields, contains form field data
 * @param {function} addNote, form submit handler from parent
 * @param {object} message, contains status strings for form message
 * @returns {Component}, DynamicForm
 * */

const DynamicForm = ({ id, fields, addNote, message }) => {
  const formId = `${id}-form`;

  const [formState, setFormState] = useState({});

  /** Submits the form, triggers POST request from parent
   * @name submitForm
   * @dev could be scrapped all together and just use addNote callback, keeping for readability
   * */

  const submitForm = () => {
    const { subject, note } = formState;

    if (addNote) {
      // sends empty strings if undefined to trigger validation
      const subjectValue = subject ? subject.value : "";
      const noteValue = note ? note.value : "";

      addNote(subjectValue, noteValue);
    }
  };

  /** Handles the change of each field's input, when the user types into a field
   * @dev this also creates the input form state for each field
   * @param {string} value, new field value
   * @param {string} fieldKey, state.fieldKey, determines which state to update dynamically
   * */

  const inputChange = (value, fieldKey) => {
    setFormState({
      ...formState,
      [fieldKey]: {
        value
      }
    });
  };

  /** Dynamically renders all fields, based on props.fields
   * @param {object[]} fields, each object contains field name, label, placeholder, error
   * @returns {Component} Form.Input || Form.TextArea
   * */

  const renderFields = fields => {
    return fields.map((field, index) => {
      const { name, label, placeholder } = field;

      // add conditional for input vs textfield

      if (name === "note") {
        return (
          <Form.TextArea
            key={index}
            name={name}
            label={label}
            onChange={e => {
              inputChange(e.target.value, name);
            }}
            placeholder={placeholder}
          />
        );
      }

      return (
        <Form.Input
          key={index}
          name={name}
          label={label}
          onChange={e => {
            inputChange(e.target.value, name);
          }}
          placeholder={placeholder}
        />
      );
    });
  };

  return (
    // TODO - switch to material-ui just for form to match desired look and feel
    <Fragment>
      {fields ? (
        <Form id={formId}>
          {message && (
            <Message
              color={message.status}
              header={message.title}
              content={message.message}
            />
          )}

          {renderFields(fields)}
          <Form.Field onClick={() => submitForm()} control={Button}>
            Add Note
          </Form.Field>
        </Form>
      ) : (
        <p>Form has no input props!</p>
      )}
    </Fragment>
  );
};

export default DynamicForm;
