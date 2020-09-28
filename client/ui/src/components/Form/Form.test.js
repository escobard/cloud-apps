import Form from "./index";
import { addNoteFields } from "Constants";

describe("Form", () => {
  let results;

  const testFunct = (subject, note) => {
    results = { subject, note };
  };

  const props = {
    id: "test-id",
    message: {
      title: "test title",
      message: "test message",
      status: false
    },
    submit: testFunct,
    fields: addNoteFields
  };

  it(">> snapshot is up to date", () => {
    const { container } = render(<Form {...props} />);
    expect(container).toMatchSnapshot();
  });

  it(">> renders essential elements", () => {
    const { getByLabelText } = render(<Form {...props} />);
    expect(getByLabelText("Subject"));
    expect(getByLabelText("Note *"));
    expect(getByLabelText("Submit"));
  });

});
