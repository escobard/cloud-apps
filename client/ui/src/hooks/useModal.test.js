import { useModal } from "hooks";

describe("useModal hook", () => {
  it("> opens modal", () => {
    const { openModal } = renderHook(() => useModal());
    act(async () => {
      openModal();
    });
    expect(result.current.showModal).toEqual(true);
  })
  it("> closes modal", () => {
    const { closeModal } = renderHook(() => useModal());
    act(async () => {
      closeModal();
    });
    expect(result.current.showModal).toEqual(false);
  })
})
