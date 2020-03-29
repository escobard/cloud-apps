import Modal from "./index";

describe("Modal component", () => {
  const TestComponent = () => (
    <>
      <h3>Test title</h3>
    </>
  );
  const props = {
    state: true,
    close: jest.fn(),
    data: {
      title: "Test string",
      content: <TestComponent />
    }
  };
  it(">> snapshot is up to date", () => {
    const { container } = render(<Modal {...props} />);
    expect(container).toMatchSnapshot();
  });
  it(">> renders title and content", () => {
    const { getByText } = render(<Modal {...props} />);
    expect(getByText("Test title"));
    expect(getByText(props.data.title));
  });
  it(">> triggers close on click", () => {
    const { getByLabelText } = render(<Modal {...props} />);
    fireEvent.click(getByLabelText("Back"));
    expect(props.close).toHaveBeenCalledTimes(1);
  });
  it(">> triggers close on enter key down", () => {
    const { getByLabelText } = render(<Modal {...props} />);
    fireEvent.keyDown(getByLabelText("Back"), {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    });
    expect(props.close).toHaveBeenCalledTimes(1);
  });
});
