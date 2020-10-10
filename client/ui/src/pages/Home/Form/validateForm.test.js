import validateForm from "pages/Home/Form/validateForm";

import { addNoteFields } from "constants/forms";

describe("validateForm util", () => {
  const trueCondition = [
    {
      condition: true,
      error: addNoteFields[0].errors[0]
    }
  ];

  const falseCondition = [
    {
      condition: false,
      error: addNoteFields[1].errors[0]
    }
  ];

  it(">> pushes error to array if condition is met", () => {
    const results = validateForm(trueCondition);
    expect(results).toEqual(["Subject must contain more than 5"]);
  });

  it(">> does not pushe error to array if condition not met", () => {
    const results = validateForm(falseCondition);
    expect(results).toEqual([]);
  });
});
