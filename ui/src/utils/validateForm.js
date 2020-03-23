import { validateField } from "./validateField";

/** Validates addNote values
 * @dev used to reduce clutter in makeDonation
 * @param {array<object>} fields, contains condition and error fields
 * @return {array} checks if form has errors
 **/

export const validateForm = (fields) => {
  let errors = [];

  fields.map((field)=>{
    const { condition, error } = field;
    const fieldError = validateField(condition, error);
    fieldError && errors.push(fieldError)
  });

  return errors;
};