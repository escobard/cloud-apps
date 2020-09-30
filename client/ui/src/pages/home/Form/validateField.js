const validateField = (condition, error) => {
  if (condition) {
    return error;
  }
  return undefined;
};

export default validateField;
