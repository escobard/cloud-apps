import DynamicForm from "./index";
import { addNoteFields } from "constants/forms";

describe("Form", () => {
  const testFunct = jest.fn();
  const props = {
    id: "test-id",
    message: {
      title: "test title",
      message: "test message",
      status: false
    },
    addNote: testFunct,
    fields: addNoteFields
  }
  it(">> snapshot is up to date", () => {
    const { container } = render(<DynamicForm {...props} />);
    expect(container).toMatchSnapshot();
  });
});
