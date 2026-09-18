const countOccurrences = require("./count-occurrencs");

test("Count Occurrences of a Character", () => {
  expect(countOccurrences("hello", "l")).toBe(2);
  expect(countOccurrences("programming", "m")).toBe(2);
  expect(countOccurrences("automatically", "a")).toBe(3);
});
