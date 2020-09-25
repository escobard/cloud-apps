import { useNotes } from "hooks";

describe("useNotes hook", () => {

  const note = {
    title: "Note title",
    note: "Note description"
  };
  const postNotesBody = note;
  const postNotesResponse = postNotesBody;
  const getNotesBody = { notes: [note] };
  const getNotesResponse = getNotesBody;

  it(">> getNotes()", async () => {
    axios.get.mockResolvedValue(getNotesResponse);

    const { result } = renderHook(() => useNotes());

    expect(result.current.loading).toEqual(false);

    actHook(() => {
      result.current.getNotes();
    });

    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();

    expect(result.current.notes).toEqual(getNotesBody.notes);
    expect(result.current.loading).toEqual(false);
  });

  it(">> addNote()", async () => {
    const { result } = renderHook(() => useNotes());

    expect(result.current.loading).toEqual(false);

    actHook(() => {
      result.current.addNote(note);
    });

    expect(result.current.loading).toEqual(true);
    expect(result.current.note).toEqual(note);

    axios.post.mockResolvedValue(postNotesResponse);
    axios.get.mockResolvedValue(getNotesResponse);
    await waitForNextUpdate();

    expect(result.current.notes).toEqual(getNotesBody.notes);
    expect(result.current.loading).toEqual(false);
  });
});
