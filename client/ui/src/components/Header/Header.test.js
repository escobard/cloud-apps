import { header } from "constants/catalog";
import Header from "./index";

const props = {
  id: "test",
  date: "February 23, 2020"
};

const { title, todayDate } = header;

describe("Header", () => {
  afterAll(() => {
    cleanup();
  });

  it(">> snapshot is up to date", () => {
    const { container } = render(<Header {...props} />);
    expect(container).toMatchSnapshot();
  });
  it(">> title and date are rendered", () => {
    props.date = todayDate;
    const { getByText } = render(<Header {...props} />);
    expect(getByText(title));
    expect(getByText(todayDate));
  });
});
