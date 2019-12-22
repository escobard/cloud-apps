const Validation = require("../utils/validation");

/** Utility to validate postForm request values
 * @dev using fail fast design patterns
 */

module.exports = async (req, res, next) => {
    let { note } = req.body;

    let validation = new Validation();

    // null case values validation
    validation.exists(note, "Note property must exist");

    // rejects request in case of null values
    let nullErrors = validation.getErrors();

    if (nullErrors.length >= 1) {
        console.error("Null validation errors:", nullErrors);
        return res.status(400).json({
            status: "Null validation errors:",
            errors: nullErrors.join(", ")
        });
    }

    // data type validation
    validation.isString(note, "Note must be a string");

    let dataTypeErrors = validation.getErrors();

    if (dataTypeErrors.length >= 1) {
        console.error("Data type validation errors:", dataTypeErrors);
        return res.status(400).json({
            status: "Data type validation errors:",
            errors: dataTypeErrors.join(", ")
        });
    }

    // business logic validation
    validation.customValidation(
        note.length < 25,
        "Note length must be greater than 10"
    );

    let businessErrors = validation.getErrors();

    if (businessErrors.length >= 1) {
        console.error("Business Logic validation errors:", businessErrors);
        return res.status(400).json({
            status: "Business Logic validation errors:",
            errors: dataTypeErrors.join(", ")
        });
    }

    next();
};
