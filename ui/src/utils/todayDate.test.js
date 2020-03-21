import { todayDate } from "utils";

describe("todayDate util", () => {
  it(">> should return today's date, in the proper format", () => {
    const date = todayDate();
    expect(date).toEqual(
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    );
  });
});
