const getSum = require("./get-sum");

test("Calculating the sum of two numbers", () => {
  const num1 = 12;
  const num2 = 5;
  const result = getSum(num1, num2);
  expect(result).toBe(17);
});
