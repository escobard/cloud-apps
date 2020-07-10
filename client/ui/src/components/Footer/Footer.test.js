import { footer } from "constants/catalog";
import Footer from "./index";

describe("Footer", () => {
  afterAll(() => {
    cleanup();
  });

  const props = {
    count: 0,
    open: jest.fn(),
    hasError: true
  };

  it(">> snapshot is up to date", () => {
    const { container } = render(<Footer {...props} />);
    expect(container).toMatchSnapshot();
  });

  it(">> should display no notes when count is 0", () => {
    const { getByText } = render(<Footer {...props} />);
    expect(getByText(footer.noNotes));
  });

  it(">> should display completed notes and count if count is not 0", () => {
    props.count = 1;
    const { getByText } = render(<Footer {...props} />);
    expect(getByText(footer.withNotes));
    expect(getByText(props.count.toString()));
  });

  it(">> should trigger open function on click", () => {
    const { getByRole } = render(<Footer {...props} />);
    fireEvent.click(getByRole("button"));
    expect(props.open).toHaveBeenCalledTimes(1);
  });
});
