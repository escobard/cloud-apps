import validateField from "pages/home/Form/validateField";

const validateForm = (fields) => {
  let errors = [];

  fields.map( (field) => {
    const { condition, error } = field;
    const fieldError = validateField(condition, error);
    fieldError && errors.push(fieldError)
  });

  return errors;
};

export default validateForm;
