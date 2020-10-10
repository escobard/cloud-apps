import validateField from "pages/Home/Form/validateField";

describe("validation util", () => {
  const error = "Subject must contain more than 5";
  it(">> returns error if condition is met", async () => {
    const condition = true;
    const result = validateField(condition, error);
    expect(result).toEqual(error);
  });
  it(">> returns undefined if condition is not met", async () => {
    const condition = false;
    const result = validateField(condition, error);
    expect(result).toEqual(undefined);
  });
});
