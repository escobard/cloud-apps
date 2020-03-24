import { notes } from "./constants/catalog"
import App from "./App";

describe("renders without crashing", () => {
  afterEach(() => {
    cleanup();
  });
  const response ={
    data: [
      {
        id: 1,
        user_id: 1,
        subject: "test subject",
        note: "test note",
        date: "03/22/20, 10:23 PM"
      }
    ]
  }
  it(">> snapshot is up to date", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it(">> renders notes in initial state", () => {
    const { getByText } = render(<App />);
    expect(getByText(notes.noNotes.subject))
  });
  it(">> renders notes in error state", async () => {
    axios.get.mockRejectedValue("TEST")
    const { rerender, getByText } = render(<App />);
    await act(async()=>{
      rerender(<App/>)
    })
    expect(await getByText(notes.apiError.subject))
  });

  it(">> renders notes with data state", async () => {
    axios.get.mockResolvedValue(response)
    const { rerender, getByText } = render(<App />);
    await act(async()=>{
      rerender(<App/>)
    })
    expect(await getByText(response.data[0].subject))
  });

  it(">> displays a validation form error", () => {

  });
  it(">> user can send a note", () => {

  });
});
