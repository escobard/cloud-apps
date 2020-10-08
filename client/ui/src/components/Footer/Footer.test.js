import { footer } from "constants/catalog";
import { NotesProvider } from "providers";

import Footer from "./index";

describe("Footer", () => {
  const note = {
    title: "Note title",
    note: "Note description"
  };
  const getNotesBody = { data: [note, note, note] };

  afterAll(() => {
    cleanup();
  });

  it(">> snapshot is up to date", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />{" "}
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it(">> should display no notes when count is 0", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );
    expect(getByText(footer.noNotes));
  });

  it(">> should display completed notes and count if count is not 0", async () => {
    mockApi.get.mockResolvedValue(getNotesBody);
    const { getByText } = render(
      <NotesProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Footer />
        </MemoryRouter>
      </NotesProvider>
    );
    await waitForDomChange();
    expect(getByText(footer.withNotes));
  });
});
