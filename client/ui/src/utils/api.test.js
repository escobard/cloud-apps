import { addNote, getNotes, api } from "./api";

describe("api utils", () => {
  const body = { data: "test" };
  const response = body;
  const reject = "test request rejected";
  const rejectError = "Request error: test request rejected";
  describe("addNote", () => {
    it(">> successful request, note added", async () => {
      axios.post.mockResolvedValue(response);
      const request = await addNote(body);
      expect(request).toEqual(response);
    });
    it(">> rejected request, note addition failed", async () => {
      axios.post.mockRejectedValue(reject);
      const request = await addNote(body);
      expect(request).toEqual(rejectError);
    });
  });
  describe("getNotes", () => {
    it(">> successful request, notes fetched", async () => {
      axios.get.mockResolvedValue(response);
      const request = await getNotes();
      expect(request).toEqual(response.data);
    });
    it(">> rejected request, no notes fetched", async () => {
      axios.get.mockRejectedValue(reject);
      const request = await getNotes();
      expect(request).toEqual(rejectError);
    });
  });
  describe("api", () => {
    it(">> returns error if http request type argument is missing", async () => {
      const request = await api();
      expect(request).toEqual("http request type argument required");
    });
    it(">> returns response when url argument is passed", async () => {
      const request = await api('get');
      expect(request).toEqual("url argument required");
    });
    it(">> returns response when headers argument is passed", async () => {
      axios.get.mockResolvedValue(response);
      const request = await api('get', '/', {'':""});
      expect(request).toEqual(response.data);
    });
    it(">> returns response when body argument is passed", async () => {
      axios.post.mockResolvedValue(response);
      const request = await api('post', '/', {'':""}, body);
      expect(request).toEqual(response.data);
    });
    it(">> returns error when request is rejected", async () => {
      axios.get.mockRejectedValue(reject);
      const request = await api('get', '/');
      expect(request).toEqual(rejectError);
    });
  });
});
