import React, { useState } from "react";
import { Button, Form as SemanticForm, Message } from "semantic-ui-react";

import PropTypes from "prop-types";

import useAlert from "hooks/useAlert";

import { addNoteFields } from "constants/forms";
import validateForm from "./validateForm";
import "./Form.scss";

const Form = ({ fields, submit }) => {
  const [formState, setFormState] = useState({});
  const { alert, setAlert } = useAlert();

  const submitForm = () => {
    const { subject, note } = formState;

    // sends empty strings if fields are empty to trigger validation
    const subjectValue = subject ? subject.value : "";
    const noteValue = note ? note.value : "";

    const conditions = [
      {
        condition: subjectValue.length < 5,
        error: addNoteFields[0].errors[0]
      },
      {
        condition: noteValue.length < 25,
        error: addNoteFields[1].errors[0]
      }
    ];

    const errors = validateForm(conditions);

    if (errors.length > 0) {
      return setAlert({
        title: "Form error:",
        message: `Form contains the following error(s): ${errors.join(", ")}.`,
        status: "red"
      });
    }
    setAlert({
      title: "Note added!",
      message: "",
      status: "green"
    });

    return submit(subjectValue, noteValue);
  };

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

  const renderFields = formFields => {
    return formFields.map(field => {
      const { name, label, placeholder } = field;

      if (name === "note") {
        return (
          <SemanticForm.Field key={name + label}>
            <label htmlFor={name}>{label}</label>
            <textarea
              id={name}
              name={name}
              onChange={e => {
                inputChange(e.target.value, name);
              }}
              placeholder={placeholder}
            />
          </SemanticForm.Field>
        );
      }

      return (
        <SemanticForm.Field key={name + label}>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            onChange={e => {
              inputChange(e.target.value, name);
            }}
            placeholder={placeholder}
          />
        </SemanticForm.Field>
      );
    });
  };

  return (
    <SemanticForm className="form" onSubmit={() => submitForm()}>
      {alert && alert.status && (
        <Message
          aria-label={alert.status === "red" ? "Alert" : "Update"}
          color={alert.status}
          header={alert.title}
          content={alert.message}
        />
      )}

      {renderFields(fields)}
      <SemanticForm.Field control={Button} aria-label="Submit">
        Add Note
      </SemanticForm.Field>
    </SemanticForm>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      errors: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired,
  submit: PropTypes.func.isRequired
};

export default Form;
