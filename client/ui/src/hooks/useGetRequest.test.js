import { useGetRequest } from "hooks";
import { getNotes } from "utils";

// TODO - retire axios mocks, use jest
describe("useGetRequest hook", () => {
  const body = { data: "test" };
  const response = body;
  it(">> updates state with request response", async () => {
    axios.get.mockResolvedValue(response);
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetRequest(getNotes)
    );

    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();

    expect(result.current.data).toEqual("test");
    expect(result.current.loading).toEqual(false);
  });
  it(">> does not attempt to update state if unmounted", async () => {
    axios.get.mockResolvedValue(response);
    const { result, unmount } = renderHook(() => useGetRequest(getNotes));
    await act(async () => {
      unmount();
    });
    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toEqual(true);
  });
});
