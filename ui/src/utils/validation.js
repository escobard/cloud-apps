/** Validates a form value
 * @name validateField
 * @dev can be split out into a validation class to re-use in api / ui layers
 * @param {*} condition, functional condition to validate / invalidate value
 * @param {string} error, string of error to add to this.state.message
 * @param {array} errors, array of errors to update
 **/

export const validateField = (condition, error, errors) => {
    if (condition) {
      errors.push(error);
      return { errors };
    }
    return errors
};