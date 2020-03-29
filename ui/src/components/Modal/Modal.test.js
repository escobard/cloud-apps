import Modal from "./index";

describe(">> Modal component", () => {
  const TestComponent = () => (
    <>
      <h3>Test</h3>
    </>
  );
  const props = {
    state: true,
    close: jest.fn(),
    data: {
      title: "Test title",
      content: <TestComponent />
    }
  };
  it(">> snapshot is up to date", () => {
    const { container } = render(<Modal {...props} />);
    expect(container).toMatchSnapshot();
  });
});
