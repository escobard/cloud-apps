const cleanSwaggerError = error => {
  console.log("Swagger validator error");
  console.log("Status: " + error.status);
  console.log("Message: " + error.message);

  let schemaPath;
  let missingProp;
  let fullError = error.message.split(/\r\n|\r|\n/g);
  let message = fullError[0];

  fullError.map(error => {
    if (error.includes("Schema path")) {
      schemaPath = error;
    }
    if (error.includes("Missing required")) {
      missingProp = error;
    }
  });

  return {
    status: error.status,
    message,
    schemaPath,
    missingProp
  };
};

module.exports = cleanSwaggerError;