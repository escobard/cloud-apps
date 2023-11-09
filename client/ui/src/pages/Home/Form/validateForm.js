import validateField from "./validateField";

const validateForm = (fields) => {
  const errors = [];

  fields.map((field) => {
    const { condition, error } = field;
    const fieldError = validateField(condition, error);
    return fieldError && errors.push(fieldError);
  });

  return errors;
};

export default validateForm;
