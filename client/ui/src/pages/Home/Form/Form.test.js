import { addNoteFields } from "constants/forms";
import Form from "./Form";

describe("Form", () => {
  let results;

  const testFunct = (subject, note) => {
    results = { subject, note };
  };

  const props = {
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

  it(">> validates form fields and displays errors", () => {
    const { findByText, getByLabelText } = render(<Form {...props} />);
    fireEvent.click(getByLabelText("Submit"));
    expect(findByText("Form error:"));
  });

  it(">> submits form and shows success message", async () => {
    const { findByText, getByLabelText } = render(<Form {...props} />);
    fireEvent.change(getByLabelText("Subject"), {
      target: { value: "subject test value" }
    });
    fireEvent.change(getByLabelText("Note *"), {
      target: { value: "random test sentence to pass validation" }
    });
    fireEvent.click(getByLabelText("Submit"));
    expect(findByText("Note added!"));
  });
});
