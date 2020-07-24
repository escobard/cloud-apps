import { useModal } from "hooks";

describe("useModal hook", () => {
  it("> opens modal", () => {
    const { result } = renderHook(() => useModal());

    actHook(() => {
      result.current.openModal();
    });

    expect(result.current.showModal).toEqual(true);
  });
    it("> closes modal", () => {
    const { result } = renderHook(() => useModal());
      actHook(() => {
        result.current.closeModal();
      });
    expect(result.current.showModal).toEqual(false);
  });
});
