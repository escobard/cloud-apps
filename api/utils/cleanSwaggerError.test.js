describe("cleanSwaggerError util", () => {
  it("return formatted string", () => {
    let testString = '{"status":400,"description":"The \\"body\\" body parameter is invalid ({\\"user_id\\":\\"a\\"})' +
      ' \\nJSON Schema validation error. \\nData path: \\"\\" \\nSchema path: \\"/required/1\\" \\nMissing required property: subject"}';
    // testString = cleanSwaggerError(testString);
    expect(testString).to.equal('{"status":400,"description":"The "body" body parameter is invalid ({"user_id":"a"}) - JSON Schema validation error. - Data path: "" - Schema path: "/required/1" - Missing required property: subject"}')
  });
});