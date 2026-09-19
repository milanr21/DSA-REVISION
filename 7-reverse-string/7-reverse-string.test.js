const reverseString = require("./reverse-string");

test("Reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("javascript")).toBe("tpircsavaj");
  expect(reverseString("milan")).toBe("nalim");
});
