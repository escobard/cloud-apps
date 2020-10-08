import { useNotes } from "hooks";

describe("useNotes hook", () => {
  const note = {
    title: "Note title",
    note: "Note description"
  };

  const postNotesResponse = { data: note };
  const getNotesBody = { data: { notes: [note] } };
  const getNotesResponse = getNotesBody;

  it(">> getNotes()", async () => {
    mockApi.get.mockResolvedValue(getNotesResponse);

    const { result, waitForNextUpdate } = renderHook(() => useNotes());

    expect(result.current.loading).toEqual(true);
    expect(result.current.notes).toEqual(undefined);

    actHook(() => {
      result.current.getNotes();
    });
    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();
    expect(result.current.notes).toEqual(getNotesBody.data);
    expect(result.current.loading).toEqual(false);
  });

  it(">> addNote()", async () => {
    mockApi.post.mockResolvedValue(postNotesResponse);

    const { result, waitForNextUpdate } = renderHook(() => useNotes());

    expect(result.current.loading).toEqual(true);
    expect(result.current.notes).toEqual(undefined);

    actHook(() => {
      result.current.addNote(note);
    });
    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();
    expect(result.current.note).toEqual(note);
    expect(result.current.loading).toEqual(false);
  });
});
