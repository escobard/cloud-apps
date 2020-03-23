import DynamicForm from "./index";
import { addNoteFields } from "Constants";

describe("Form", () => {
  const testFunct = jest.fn();

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
    const { container } = render(<DynamicForm {...props} />);
    expect(container).toMatchSnapshot();
  });

  it(">> validates fields", () => {
    const { getByLabelText } = render(<DynamicForm {...props} />);
    expect(getByLabelText("Subject"))
    expect(getByLabelText("Note *"))
    expect(getByLabelText("Submit"))
  });
  it(">> displays alert message", () => {
    props.message.status = "red";
    const { getByText, getByLabelText } = render(<DynamicForm {...props} />);
    expect(getByText(props.message.title))
    expect(getByText(props.message.message))
    expect(getByLabelText("Alert"))
  });
  it(">> displays update message", () => {
    props.message.status = "green";
    const { getByLabelText } = render(<DynamicForm {...props} />);
    expect(getByLabelText("Update"))
  });
  it(">> submits field values", () => {});
  it(">> submits empty values if fields are empty", () => {});
});
