import { useGetRequest } from "hooks";
import { getNotes } from "utils"

describe("useGetRequest hook", () => {
  const body = {data: "test"};
  const response = body;
  const reject = "test request rejected";
  it(">> updates state with request response", async () => {
    axios.get.mockResolvedValueOnce(response)
    const { result, waitForNextUpdate } = renderHook(() => useGetRequest(getNotes));

    expect(result.current.data).toEqual([])
    expect(result.current.loading).toEqual(true)

    await waitForNextUpdate();

    expect(result.current.data).toEqual('test')
    expect(result.current.loading).toEqual(false)
  });
  it(">> does not update sstate with request response if unmounted", () => {});
  it(">> returns error in case of request rejections", () => {});
});