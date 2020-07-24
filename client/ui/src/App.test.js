import { notes } from "./constants/catalog";
import App from "./App";

describe("App container", () => {
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
  // these may be obsolete after refactor
/*  describe(">> addNote()", () => {
    it(">> displays validation form errors", () => {
      const { getByRole, getByLabelText } = render(<App />);
      act(() => {
        fireEvent.click(getByRole("button"));
      });
      act(() => {
        fireEvent.click(getByLabelText("Submit"));
      });
      expect(getByLabelText("Alert"));
    });
    it(">> displays API validation form errors", async () => {
      const identifier = "unique test string";
      axios.post.mockRejectedValue(identifier);
      const { getByText, getByRole, getByLabelText } = render(<App />);
      act(() => {
        fireEvent.click(getByRole("button"));
      });
      act(() => {
        fireEvent.change(getByLabelText("Subject"), {
          target: { value: "subject test value" }
        });
        fireEvent.change(getByLabelText("Note *"), {
          target: { value: "random test sesntence to pass validation" }
        });
      });
      await act(async () => {
        fireEvent.click(getByLabelText("Submit"));
      });

      expect(getByLabelText("Alert"));
      expect(getByText("Request error: " + identifier));
    });
    it(">> displays message update and closes modal on submit success", async () => {
      const subjectValue = "subject test value";
      const noteValue = "random test sentence to pass validation";
      const response = {
        data: {
          note: {
            id: 20,
            user_id: 1,
            subject: subjectValue,
            note: noteValue,
            date: "03/24/20, 12:04 AM"
          },
          status: "test"
        },
        status: "test"
      };
      axios.post.mockResolvedValue(response);
      axios.get.mockResolvedValue([response]);
      const { getByRole, getByText, getByLabelText } = render(<App />);
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

  describe(">> renderNotes()", () => {
    it(">> renders notes in initial state", () => {
      const { getByText } = render(<App />);
      expect(getByText(notes.noNotes.subject));
    });

    it(">> renders notes in error state", async () => {
      axios.get.mockRejectedValue("TEST");
      const { rerender, getByText } = render(<App />);
      await act(async () => {
        rerender(<App />);
      });
      expect(getByText(notes.apiError.subject));
    });

    it(">> renders notes with data state", async () => {
      axios.get.mockResolvedValue(response);
      const { rerender, getByText } = render(<App />);
      await act(async () => {
        rerender(<App />);
      });
      expect(getByText(response.data[0].subject));
    });
  });*/

  describe(">> render()", () => {

    it(">> snapshot is up to date", () => {
      const { container } = render(<App />);
      expect(container).toMatchSnapshot();
    });
  });
});
