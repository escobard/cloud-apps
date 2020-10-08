import { NotesProvider } from "providers";

import { notes } from "./constants/catalog";
import App from "./App";

describe("User flows", () => {
  afterEach(() => {
    cleanup();
  });
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
  describe(">> add note", () => {
    it(">> displays message update and closes modal on submit success", async () => {
      const subjectValue = "subject test value";
      const noteValue = "random test sentence to pass validation";
      mockApi.post.mockResolvedValue(response);
      mockApi.get.mockResolvedValue(response);
      const { getByRole, getByText, getByLabelText, rerender } = render(
        <NotesProvider>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </NotesProvider>
      );
      await act(async () => {
        rerender(
          <NotesProvider>
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>
          </NotesProvider>
        );
      });
      act(() => {
        fireEvent.click(getByRole("button"));
      });
      act(() => {
        fireEvent.change(getByLabelText("Subject"), {
          target: { value: subjectValue }
        });
        fireEvent.change(getByLabelText("Note *"), {
          target: { value: noteValue }
        });
      });
      await act(async () => {
        fireEvent.click(getByLabelText("Submit"));
      });
      expect(getByLabelText("Update"));
      expect(getByText("Note added!"));
      await waitForElementToBeRemoved(() => getByLabelText("Back"));
    });
  });

  describe(">> render notes", () => {
    it(">> renders notes in initial state", () => {
      const { getByText } = render(
        <NotesProvider>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </NotesProvider>
      );
      waitForDomChange(() => {
        expect(getByText(notes.noNotes.subject));
      });
    });

    it(">> renders notes in error state", async () => {
      mockApi.get.mockRejectedValue("TEST");
      const { rerender, getByText } = render(
        <NotesProvider>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </NotesProvider>
      );
      await act(async () => {
        rerender(
          <NotesProvider>
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>
          </NotesProvider>
        );
      });
      expect(getByText(notes.apiError.subject));
    });

    it(">> renders notes with data state", async () => {
      mockApi.get.mockResolvedValue(response);
      const { rerender, getByText } = render(
        <NotesProvider>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </NotesProvider>
      );
      await act(async () => {
        rerender(
          <NotesProvider>
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>
          </NotesProvider>
        );
      });
      expect(getByText(response.data[0].subject));
    });
  });
});
