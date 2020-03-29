import Modal from "./index";

describe(">> Modal component", () => {
  it(">> snapshot is up to date", () => {
    const { container } = render(<Modal />);
    expect(container).toMatchSnapshot();
  });
});
