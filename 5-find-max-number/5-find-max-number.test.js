const findMaxNumber = require("./find-max-number");

test("Finding the maximum number in an array", () => {
  expect(findMaxNumber([1, 5, 4, 12, 5, 3])).toBe(12);
  expect(findMaxNumber([0, -1, -5, 2])).toBe(2);
  expect(findMaxNumber([10, 10, 10, 10])).toBe(10);
});
