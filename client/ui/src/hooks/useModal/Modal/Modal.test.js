import Modal from "./index";

describe("Modal component", () => {
  const props = {
    title: <h2>Test title</h2>,
    content: <div>Test content</div>,
    showModal: true,
    closeModal: jest.fn()
  };
  it(">> snapshot is up to date", () => {
    const { container } = render(<Modal {...props} />);
    expect(container).toMatchSnapshot();
  });
  it(">> renders title and content", () => {
    const { getByText } = render(<Modal {...props} />);
    expect(getByText("Test title"));
    expect(getByText("Test content"));
  });
  it(">> triggers closeModal on click", () => {
    const { getByLabelText } = render(<Modal {...props} />);
    fireEvent.click(getByLabelText("Back"));
    expect(props.closeModal).toHaveBeenCalledTimes(1);
  });
  it(">> triggers closeModal on enter key down", () => {
    const { getByLabelText } = render(<Modal {...props} />);
    fireEvent.keyDown(getByLabelText("Back"), {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    });
    expect(props.closeModal).toHaveBeenCalledTimes(1);
  });
});
