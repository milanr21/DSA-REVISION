const calculator = require("./calculator");

test("", () => {
  const num1 = 12;
  const num2 = 3;

  //addition
  expect(calculator(num1, num2, "+")).toBe(15);

  //subtraction
  expect(calculator(num1, num2, "-")).toBe(9);

  //multiplication
  expect(calculator(num1, num2, "*")).toBe(36);

  //division
  expect(calculator(num1, num2, "/")).toBe(4);
});
