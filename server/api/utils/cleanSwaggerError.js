const cleanSwaggerError = error => {
  const type = "Swagger validation error"
  console.log(type);
  console.log("Status: " + error.status);
  console.log("Message: " + error.message);

  let fullError = error.message.split(/\r\n|\r|\n/g);

  return {
    type,
    status: error.status,
    message: fullError[0],
    dataPath: fullError[2],
    schemaPath: fullError[3],
    description: fullError[4]
  };
};

export default cleanSwaggerError;
