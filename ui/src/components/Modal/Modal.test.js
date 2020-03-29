import Modal from "./index";

describe(">> render()", () => {
  it(">> snapshot is up to date", () => {
    const { container } = render(<Modal />);
    expect(container).toMatchSnapshot();
  });
});
