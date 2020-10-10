import { api } from "./api";

describe("api utils", () => {
  const body = { data: "test" };
  const response = body;
  const reject = "test request rejected";
  const rejectError = "Request error: test request rejected";
  describe("api", () => {
    it(">> returns error if http request argument is missing", async () => {
      const request = await api();
      expect(request).toEqual("http request argument required");
    });
    it(">> returns error if url argument is missing", async () => {
      const request = await api("get");
      expect(request).toEqual("url argument required");
    });
    it(">> returns response when headers argument is passed", async () => {
      mockApi.get.mockResolvedValue(response);
      const request = await api("get", "/", { "": "" });
      expect(request).toEqual(response.data);
    });
    it(">> returns response when body argument is passed", async () => {
      mockApi.post.mockResolvedValue(response);
      const request = await api("post", "/", { "": "" }, body);
      expect(request).toEqual(response.data);
    });
    it(">> returns error when request is rejected", async () => {
      mockApi.get.mockRejectedValue(reject);
      const request = await api("get", "/");
      expect(request).toEqual(rejectError);
    });
  });
});
