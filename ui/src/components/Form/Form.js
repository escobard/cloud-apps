import React, { Fragment, useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";

import "./Form.scss";
import PropTypes from "prop-types";

/** Dynamically creates a form from the data provided via props.fields
 * @dev renders an infinite number of fields based on props.fields, very powerful and expandable
 * @param {string} id, inherited id from parent
 * @param {object[]} fields, contains form field data
 * @param {function} submit, form submit handler from parent
 * @param {object} message, contains status strings for form message
 * @returns {Component}, DynamicForm
 * */

const DynamicForm = ({ id, fields, submit, message }) => {
  const formId = `${id}-form`;

  const [formState, setFormState] = useState({});

  /** Submits the form, triggers POST request from parent
   * @name submitForm
   * @dev could be scrapped all together and just use submit callback, keeping for readability
   * */

  const submitForm = () => {
    const { subject, note } = formState;

    if (submit) {
      // sends empty strings if undefined to trigger validation
      const subjectValue = subject ? subject.value : "";
      const noteValue = note ? note.value : "";

      submit(subjectValue, noteValue);
    }
  };

  /** Handles the change of each field's input, when the user types into a field
   * @dev this also creates the input form state for each field
   * @param {string} value, new field value
   * @param {string} fieldKey, state.fieldKey, determines which state to update dynamically
   * */

  const inputChange = (value, fieldKey) => {
    setFormState(prevState => {
      return {
        ...prevState,
        [fieldKey]: {
          value
        }
      };
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
        return(
          <Form.Field key={index}>
            <label htmlFor={name}>{label}</label>
            <textarea
              id={name}
              name={name}
              onChange={e => {
                inputChange(e.target.value, name);
              }}
              placeholder={placeholder}
            />
          </Form.Field>
        )
      }

      return (
        <Form.Field key={index}>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            onChange={e => {
              inputChange(e.target.value, name);
            }}
            placeholder={placeholder}
          />
        </Form.Field>
      );
    });
  };

  // TODO - switch to material-ui to match desired look and feel
  return (
    <Form id={formId}>
      {message && message.status && (
        <Message
          aria-label={message.status === "red" ? "Alert": "Update"}
          color={message.status}
          header={message.title}
          content={message.message}
        />
      )}

      {renderFields(fields)}
      <Form.Field onClick={() => submitForm()} control={Button} aria-label="Submit">
        Add Note
      </Form.Field>
    </Form>
  );
};

DynamicForm.propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  submit: PropTypes.func.isRequired,
  message: PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
    status: PropTypes.any
  }).isRequired
};

export default DynamicForm;
