import axios from 'axios';
import { addNote, getNotes } from "./api"

jest.mock('axios');

describe("api util", () => {
  const body = {data: "test"};
  const response = body;
  const reject = "test request rejected";
  const rejectError = "Response error: test request rejected";
  describe("addNote", () => {
    it("successful request, note added", async () => {
      axios.post.mockResolvedValue(response)
      const request = await addNote(body);
      expect(request).toEqual(response)
    });
    it("rejected request, note addition failed", async () => {
      axios.post.mockRejectedValueOnce(reject)
      const request = await addNote(body);
      expect(request).toEqual(rejectError)
    });
  });
  describe("getNotes", () => {
    it("successful request, notes fetched", async () => {
      axios.get.mockResolvedValue(response)
      const request = await getNotes(body);
      expect(request).toEqual(response.data)
    });
    it("rejected request, no notes fetched", async () => {
      axios.get.mockRejectedValueOnce(reject)
      const request = await getNotes(body);
      expect(request).toEqual(rejectError)
    });
  });
});