import { useAlert } from "hooks";

describe("useAlert hook", () => {
  it(">> sets alert", () => {
    const message = {
      title: "Note added!",
      message: status,
      status: "green"
    };
    const { result } = renderHook(() => useAlert());

    actHook(() => {
      result.current.setAlert(message);
    });

    expect(result.current.alert).toEqual(message);
  });
});
