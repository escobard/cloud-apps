import { NotesProvider } from "providers";

import Home from "./Home";

describe(">> render()", () => {
  const response = {
    data: [
      {
        id: 1,
        user_id: 1,
        subject: "test subject",
        note: "test note",
        date: "03/22/20, 10:23 PM"
      }
    ]
  };
  it(">> snapshot is up to date", async () => {
    axios.get.mockResolvedValue(response);
    const { container } = render(
      <NotesProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Home />
        </MemoryRouter>
      </NotesProvider>
    );
    waitForDomChange(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
