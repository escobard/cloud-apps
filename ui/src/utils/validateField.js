/** Validates a form value
 * @name validateField
 * @param {*} condition, functional condition to validate / invalidate value
 * @param {string} error, string of error to add to this.state.message
 * @return {string} error
 * */

export const validateField = (condition, error) => {
  if (condition) {
    return error;
  }
  return undefined;
};
