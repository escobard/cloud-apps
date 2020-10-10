const cleanError = (error, type) => {
  const checkType = type || "Promise rejection error";

  console.error(type);
  console.error(`Status:${error.status}`);
  console.error(`Message: ${error.message}`);

  return {
    type: checkType,
    status: error.status,
    description: error.message,
  };
};

export default cleanError;
